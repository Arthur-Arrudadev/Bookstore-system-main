import { errors } from '../errors/commands/ProfileCommandError.js'

export default class ProfileCommand {

    #userRepository

    constructor(userRepository) {
        this.#userRepository = userRepository
    }

    async execute({ id }) {
        const user = await this.#userRepository.findById(id)

        if (!user) {
            throw errors.userNotExists
        }

        return { user }
    }
}