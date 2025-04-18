import express from 'express'
import userRouter from './route/user.route.js'
const app = express();
app.use(express.json());
app.use('/api/user', userRouter);

import productRouter from './route/product.route.js'
app.use('/api/product', productRouter)

import cartProductRouter from './route/cartProduct.route.js';
app.use('/api/cartProduct', cartProductRouter);

import categoryRouter from './route/category.route.js';
app.use('/api/category', categoryRouter);

import cors from 'cors'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
///import userRouter from './route/user.route.js'
dotenv.config()


//const app = express()
app.use(cors({
    credentials : true,
    origin : process.env.FRONTEND_URL 
}))
//app.use(express.json())
app.use(cookieParser())
app.use(morgan('dev'))
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8080 || process.env.PORT

app.get("/", (request, response)=>{
    ///server to client
    response.json({
        message : "Server is running " + PORT
    })
})

//app.use(express.json())
//app.use('/api/user', userRouter)

connectDB().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is running", PORT)
    })
})

