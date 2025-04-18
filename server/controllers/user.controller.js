import UserModel from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

// Register Controller
export async function registerUserController(request, response){
    try{
        const {name, email, password} = request.body
        ///console.log(request.body);

        if(!name || !email || !password){
            return response.status(400).json({
                message : "provide email, name, password", 
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(user) {
            return response.json({
                message: "Already register email",
                error : true,
                success : false
            })
        }

        const salt = await bcryptjs.genSalt(10)
        const hashPassword = await bcryptjs.hash(password, salt)

        const payload = {
            name,
            email,
            password : hashPassword
        }

        const newUser = new UserModel(payload)
        const save = await newUser.save()

        return response.json({
            message : "User register successfully",
            error : false,
            success : true,
            data : save
        })

    }catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


// Login Controller
export async function loginController(request, response) {
    try{
        const { email, password } = request.body

        if(!email || !password){
            return response.status(400).json({
                message : "Provide email & password",
                error : true,
                success : false
            })
        }

        const user = await UserModel.findOne({ email })

        if(!user){
            return response.status(400).json({
                message : "User not registered",
                error : true,
                success : false
            })
        }

        if(user.status !== "Active"){
            return response.status(400).json({
                message : "Contact to admin",
                error: true,
                success : false
            })
        }

        const checkPassword = await bcryptjs.compare(password, user.password)
        if(!checkPassword){
            return response.status(400).json({
                message : "Check your password",
                error : true,
                success : false
            })
        }


         // ✅ Success response — no tokens!
         return response.status(200).json({
            message: "Login successful",
            error: false,
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });



    }catch(error){
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}


// Logout Controller
export async function logoutController(request, response) {
    try {

        return response.status(200).json({
            message: "Logout successful",
            error: false,
            success: true
        });
        
    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true,
            success : false
        })
    }
}

