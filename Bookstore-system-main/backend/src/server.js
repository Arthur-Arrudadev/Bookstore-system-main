/** Imports */
import { env } from './env/index.js'

import http from 'node:http'
import { app } from './app.js'
import { errors } from './errors/serverErrors.js'


// const PORT = process.env?.PORT // Port necessary for server

const server = http.createServer(app) // Create a Express App Server with node http

/** Server is running on port */
server.listen(env.PORT, () => {
    try {
        console.log(`Listening at port ${env.PORT} 🟢`)

    } catch (err) {
        throw errors.serverRunError

    }
})