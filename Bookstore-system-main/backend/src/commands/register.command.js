import bcrypt from 'bcrypt'
import { errors } from '../errors/commands/RegisterCommandError.js'

export default class RegisterCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository // Get User Prisma class (reference: makeRegister.js)
    }

    async execute({
        name,
        email,
        registration,
        password
    }) {

        const userEmail = await this.#userRepository.findByEmail(email) // Find user by email

        if (userEmail) { // Check user email and, if User already exists, occurs an error.
            throw errors.userAlreadyExists
        }

        const hashed_password = await bcrypt.hash(password, 10) // Encrypt user password

        const user = await this.#userRepository.create({ name, email, registration, password: hashed_password }) // Send and Get data from user created 

        if (!user) {
            throw errors.userNullError
        }

        return { user } // Return this data from user created (reference: register.controller.js)
    }
}