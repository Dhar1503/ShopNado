import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    /// user id primary key is created by default
    name : {
        type : String,
        required : [true, "Provide name"]
    },
    email : {
        type : String,
        required : [true, "Provide email"],
        unique : true
    },
    password : {
        type : String,
        required : [true, "Provide password"]
    },
    mobile : {
        type : Number,
        default : null
    },
    refresh_token : {
        type : String,
        default : ""
    },
    verify_email : {
        type : Boolean,
        default : false
    },
    last_login_date: {
        type : Date,
        default : ""
    },
    status : {
        type : String,
        enum : ["Active", "Inactive", "Suspended"],
        default : "Active"
    },
    address_details : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'address'
        }
    ],
    shopping_cart : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'cartProduct'
        }
    ],
    orderHistory : [
        {
            type : mongoose.Schema.ObjectId,
            ref : 'order'
        }
    ],
    role : {
        type: String,
        enum : ['ADMIN', 'USER'],
        default : "USER"
    }
    
})

const UserModel = mongoose.model("user", userSchema)

export default UserModel