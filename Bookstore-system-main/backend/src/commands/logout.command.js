import { errors } from '../errors/commands/LogoutCommandError.js'

export default class LogoutCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async execute({ id }) {
        const user = await this.#userRepository.findById(id)

        if (!user) {
            throw errors.logoutError
        }

        return { user }
    }
}