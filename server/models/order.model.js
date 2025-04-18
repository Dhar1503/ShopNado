import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : 'user'
    },
    orderId : {
        type : String,
        required : [true, "Provide orderId"],
        unique : true
    },
    productId : {
        type : mongoose.Schema.ObjectId,
        ref : 'product'
    },
    product_details : {
        name : String,
        image : Array
    },
    paymentId : {
        type : String,
        default : ''
    },
    paymentStatus : {
        type : String,
        default : ''
    },
    delivery_address : {
        type : mongoose.Schema.ObjectId,
        ref : 'address'
    },
    subTotalAmt : {
        type : Number,
        default : 0
    },
    totalAmt : {
        type : Number,
        default : 0
    },
    invoice_receipt : {
        type : String,
        default : ''
    },
})

const OrderModel = mongoose.model('order', orderSchema)

export default OrderModel