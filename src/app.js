import express from 'express'
import userRouter from './routers/user.router.js'
import errorHandler from './middlewares/error.middleware.js'

const app = express()
app.use(express.json())

app.use('/api/users', userRouter)
app.use(errorHandler)

app.listen(8080, () => console.log('Server Up!'))
