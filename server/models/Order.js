const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    company: {
        type: String
    },

    items: [

        {
            name: String,
            price: Number,
            image: String,
            quantity: Number
        }

    ],

    totalAmount: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);