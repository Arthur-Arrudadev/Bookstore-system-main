import bcrypt from 'bcrypt'
import { errors } from '../errors/commands/AuthCommandError.js'

export default class AuthenticateCommand {
    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async execute({
        registration,
        password
    }) {

        const user = await this.#userRepository.findByRegistration(registration)

        if (!user) {
            throw errors.userNotExistsError
        }

        const passwordIsMatch = await bcrypt.compare(password, user.password)

        if (!passwordIsMatch) {
            throw errors.passwordNotMatch
        }

        return { user }

    }
}