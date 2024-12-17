import MakeRegister from '../../commands/factories/user/makeRegister.js'
import { registerSchema } from '../../schemas/UserSchema.js'

export async function RegisterController(req, res) {

    try {
        const { name, email, registration, password } = registerSchema.parse(req.body) // Get user data from client

        const makeRegister = MakeRegister()

        await makeRegister.execute({ name, email, registration, password }) // Wait receive user data from register.command.js

        /**
         * If Register Command not have error, user create is success!
         */
        res
            .status(200)
            .json({
                status: 200,
                message: "User Created!"
            })

    } catch (err) {
        res
            .status(400)
            .json({
                message: err.message
            })
    }
}