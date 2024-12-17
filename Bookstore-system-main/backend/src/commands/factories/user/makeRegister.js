import UserPrismaRepository from '../../../repositories/prisma/UserPrismaRepository.js'
import RegisterCommand from '../../register.command.js'


export default function MakeRegister() {
    const userRepository = new UserPrismaRepository() // Get User Prisma class
    const registerCommand = new RegisterCommand(userRepository) // Set User Prisma class into userRepository in constructor

    return registerCommand
}