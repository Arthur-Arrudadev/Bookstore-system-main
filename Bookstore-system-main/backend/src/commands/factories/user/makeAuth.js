import UserPrismaRepository from '../../../repositories/prisma/UserPrismaRepository.js'
import AuthenticateCommand from '../../authenticate.command.js'

export default function MakeAuth() {
    const userPrismaRepository = new UserPrismaRepository()
    const authenticateCommand = new AuthenticateCommand(userPrismaRepository)

    return authenticateCommand
}