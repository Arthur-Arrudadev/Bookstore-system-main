import MakeGetProfile from '../../../commands/factories/user/makeGetProfile.js'

export async function ProfileController(req, res) {
    try {
        const userData = req.user

        const makeGetProfile = MakeGetProfile()

        const { user } = await makeGetProfile.execute({ id: userData.sub.id })

        res
            .status(200)
            .send({
                auth: true,
                user
            })

    } catch (err) {
        res.status(400)
            .json({
                message: err.message
            })

    }
}