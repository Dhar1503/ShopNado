import { Router } from 'express'
import { loginController, logoutController, registerUserController } from '../controllers/user.controller.js'

const userRouter = Router()

userRouter.post('/register', registerUserController)
userRouter.post('/login', loginController)
userRouter.post('/logout', logoutController)
userRouter.get('/register', (request, response) => {
    response.send('Register endpoint is active, but use POST to register a user.');
  });
  

export default userRouter