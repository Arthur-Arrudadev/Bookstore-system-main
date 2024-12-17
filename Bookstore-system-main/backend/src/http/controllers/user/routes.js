import express from 'express'
import { RegisterController } from '../register.controller.js'
import {
    AuthenticateController,
    ProfileController,
    LogoutController
} from './index.js'
import { VerifyJWT } from '../../middlewares/jwt/VerifyJWT.js'

const router = express.Router()

router.post('/user', RegisterController) // Register a new User

router.post('/auth', AuthenticateController) // Authenticate a user

router.get('/me', [VerifyJWT], ProfileController) // Get User Profile (User should is authenticated)

router.get('/logout', [VerifyJWT], LogoutController)

export {
    router as UserRoutes //Rename route to UserRoutes and export it (reference: app.js)
}