const express = require("express");

const router = express.Router();

const nodemailer = require("nodemailer");

const Order = require("../models/Order");


const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: process.env.EMAIL_USER,

        pass: process.env.EMAIL_PASS

    }

});


// CREATE INQUIRY
router.post("/", async (req, res) => {

    try {

        const order = await Order.create(req.body);

        let productList = "";

        order.items.forEach((item) => {

            productList +=
                `${item.name} x ${item.quantity}\n`;

        });

        const mailOptions = {

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            subject: "New ToolDec Inquiry",

            text:

                `New Customer Inquiry\n\n` +

                `Customer: ${order.customerName}\n` +

                `Phone: ${order.phone}\n` +

                `Email: ${order.email}\n` +

                `Company: ${order.company}\n\n` +

                `Products:\n${productList}\n` +

                `Total: ₹${order.totalAmount}`

        };

        await transporter.sendMail(mailOptions);

        res.status(201).json(order);

    } catch (error) {

        console.log(error);

        res.status(500).json({
            message: error.message
        });

    }

});


// GET INQUIRIES
router.get("/", async (req, res) => {

    try {

        const orders = await Order.find();

        res.status(200).json(orders);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;