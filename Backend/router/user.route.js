import express from 'express'
import { SignIn } from '../controller/user.controller.js'
const UserRouter = express.Router()

UserRouter.post('/sign-in',SignIn)


export default UserRouter