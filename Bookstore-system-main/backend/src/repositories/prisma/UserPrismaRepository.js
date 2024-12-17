import { PrismaClient } from '@prisma/client'
import { errors } from '../../errors/repositories/UserPrismaRepositoryErrors.js'

const prisma = new PrismaClient()

export default class UserPrismaRepository {

    async findByRegistration(registration) { // Find user by registration
        try {
            const user = await prisma.user.findUnique({
                where: {
                    registration
                }
            })

            return user

        } catch (err) {
            throw errors.findByRegistrationError

        }
    }

    async findById(id) {
        const user = await prisma.user.findUnique({
            where: {
                id
            }
        })

        return user
    }

    async findByEmail(email) { // Find user by email
        try {
            const user = await prisma.user.findUnique({
                where: {
                    email
                }
            })

            return user

        } catch (err) {
            throw errors.findByEmailError

        }
    }

    async create(data) { // Create a new user
        try {
            const user = await prisma.user.create({
                data
            })

            return user

        } catch (err) {
            throw errors.createUserError

        }
    }
}