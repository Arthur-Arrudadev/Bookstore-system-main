import { z } from 'zod'

const acceptableEmailProviders = ['discente.ifpe.edu.br', 'doscente.ifpe.edu.br'];

export const registerSchema = z.object({
    name: z.string().min(6).max(24),
    email: z.string().email().refine((email) => {
        const domain = email.split('@')[1]
        return acceptableEmailProviders.includes(domain)
    }, {
        message: "Email provider is not acceptable",
    }),
    registration: z.string().min(14).max(14),
    password: z.string().min(8).max(32)
}).required({
    name: true,
    email: true,
    registration: true,
    password: true
})

export const authenticateSchema = z.object({
    registration: z.string().min(14).max(14),
    password: z.string().min(8).max(32)
}).required({
    registration: true,
    password: true
})