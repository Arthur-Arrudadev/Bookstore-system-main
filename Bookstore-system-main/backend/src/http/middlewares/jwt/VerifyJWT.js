import jwt from 'jsonwebtoken'
import { env } from '../../../env/index.js'

const JWT_SECRET = env.JWT_SECRET

export const VerifyJWT = (req, res, next) => {

    try {
        const { accessToken } = req.cookies

        if (!accessToken) {
            throw new Error("Not have token")
        }

        const userData = jwt.verify(accessToken, JWT_SECRET)

        if (!userData) {
            throw new Error("Not have a user data")
        }

        req.user = userData

        next()

    } catch (err) {
        res
            .status(400)
            .send({
                err: err.message,
                status: 400
            })
    }
}