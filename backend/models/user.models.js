import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config({})



const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    number: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
}, { timestamps: true });

// Method to generate JWT token

// Method to generate JWT token
userSchema.methods.generateAuthToken = async function () {
    const user = this;

    // Generate token
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, {
        expiresIn: "30d",
    });

    // Save token to user
    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token;
};


// Method to clean expired tokens
userSchema.methods.cleanExpiredTokens = async function () {
    const user = this;

    const validTokens = user.tokens.filter((tokenObj) => {
        try {
            jwt.verify(tokenObj.token, process.env.JWT_SECRET);
            return true;
        } catch (error) {
            console.error("Expired token removed:", tokenObj.token);
            return false;
        }
    });

    user.tokens = validTokens;
    await user.save();
};
/** @type {import("mongoose").Model} */
const User = mongoose.model('User', userSchema);
export { User }
