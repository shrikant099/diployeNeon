
import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    offerOnPrice: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
    },
    productImage: {
        type: String,
        required: true
    },
    clickCount: {
        type: Number,
        default: 0,
    },
    clicks: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            firstName: { type: String },
            email: { type: String },
            timestamp: { type: Date, default: Date.now }
        }
    ],
}, { timestamps: true });

// const Product = mongoose.model('Product', productSchema);

/** @type {import("mongoose").Model} */
const Product = mongoose.model('ProductSchema', productSchema);

export { Product };
