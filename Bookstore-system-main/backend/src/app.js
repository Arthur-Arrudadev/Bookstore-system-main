/** imports */
import express from 'express'
import cors from 'cors'
import { UserRoutes } from './http/controllers/user/routes.js'
import cookieParser from 'cookie-parser'

const app = express()

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true
    })
)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// app.use((err, req, res, next) => {
//     if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
//         return res.status(400).json({ error: 'Invalid JSON payload' });
//     }
//     next();
// });

app.use('/api', UserRoutes) // Routes from User (Auth, register...)

app.use('*', (req, res) => {
    res
        .status(404)
        .send({
            err: "Route Not found",
            status: 404
        })
})

// app.use((req, res, next) => {
//     res.status(404).send('Not found');
// });

export { app }