import UserPrismaRepository from '../../../repositories/prisma/UserPrismaRepository.js'
import ProfileCommand from '../../profile.command.js'


export default function MakeGetProfile() {
    const userRepository = new UserPrismaRepository()
    const profileCommand = new ProfileCommand(userRepository)

    return profileCommand
}