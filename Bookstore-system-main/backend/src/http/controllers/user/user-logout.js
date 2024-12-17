import MakeLogout from '../../../commands/factories/user/makeLogout.js'
import JwtPrismaRepository from '../../../repositories/prisma/JwtPrismaRepository.js'

export async function LogoutController(req, res) {
    try {
        const makeLogout = MakeLogout()
        await makeLogout.execute({ id: req.user.sub.id })

        const { refreshToken } = req.cookies

        await new JwtPrismaRepository().removeTokenFromDb(refreshToken)

        res.clearCookie('refreshToken', { sameSite: "none", secure: true })
        res.clearCookie('accessToken', { sameSite: "none", secure: true })

        res
            .status(200)
            .send({
                auth: false,
                user: null
            })

    } catch (err) {
        res
            .status(400)
            .json({
                message: err.message
            })
    }
}