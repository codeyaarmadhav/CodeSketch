import instance from "../config/razorpay.js";
import crypto from 'crypto';
import User from "../model/userModel.js";


async function paymentProcess(req, res){
    const {amount} = req.body;

    if(!amount){
        return res.status(400).json({
            success: false,
            message: "Amount is required"
        })
    }

    //console.log(process.env.RZP_KEY_ID);

    //const userId = req.user.id;

    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency: "INR",
        receipt: `receipt_${Math.floor(Math.random() * 1000000)}`,
    }

    const order = await instance.orders.create(options);

    res.json({
        success:true, 
        message: "pay process test success",
        order
    })
}

const getKey = async (req, res) => {
    res.json({
        success: true,
        key: process.env.RZP_KEY_ID
    })
}

const paymentVerification = async (req, res) => {
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    
    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const hmac = crypto.createHmac("sha256", process.env.RZP_KEY_SECRET);

    hmac.update(body.toString());

    const generatedSignature = hmac.digest("hex");

    if(generatedSignature === razorpay_signature){
        const user = await User.findById(req.user.id);
        user.plan = "standard";
        await user.save();
        
        res.redirect(`${process.env.FRONTEND_LINK}/success?reference=${razorpay_payment_id}`);
    }else{
        res.status(400).json({
            success: false,
            message: "Payment verification failed"
        })
    }
}

export {paymentProcess, getKey, paymentVerification};