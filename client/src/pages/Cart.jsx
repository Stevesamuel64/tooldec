import { useContext, useState } from "react";
import axios from "axios";

import { CartContext } from "../context/CartContext";

function Cart() {

    const {
        cart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity
    } = useContext(CartContext);

    const [customer, setCustomer] = useState({

        customerName: "",
        phone: "",
        email: "",
        company: ""

    });

    const total = cart.reduce(

        (acc, item) =>

            acc + (item.price * item.quantity),

        0

    );

    const handleChange = (e) => {

        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });

    };

  const submitInquiry = async () => {

    try {

        await axios.post(
            "https://tooldec.onrender.com/api/orders",
            {
                ...customer,
                items: cart,
                totalAmount: total
            }
        );

       
        alert("Inquiry Submitted Successfully");

        localStorage.removeItem("tooldec-cart");

        window.location.reload();

    } catch (error) {

        console.log(error);

        alert("Submission Failed");

    }

};

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

                <div className="md:col-span-2">

                    <h1 className="text-5xl font-bold mb-10">
                        Inquiry Cart
                    </h1>

                    {cart.length === 0 ? (

                        <div className="bg-white p-10 rounded-2xl shadow-xl text-2xl">
                            Cart is Empty
                        </div>

                    ) : (

                        <div className="space-y-6">

                            {cart.map((item) => (

                                <div
                                    key={item._id}
                                    className="bg-white p-5 rounded-2xl shadow-lg flex items-center gap-5"
                                >

                                    <img
                                        src={item.image}
                                        alt=""
                                        className="w-28 h-28 object-cover rounded-xl"
                                    />

                                    <div className="flex-1">

                                        <h2 className="text-2xl font-bold">
                                            {item.name}
                                        </h2>

                                        <p className="text-gray-500 mb-3">
                                            ₹{item.price}
                                        </p>

                                        <div className="flex items-center gap-3">

                                            <button
                                                onClick={() => decreaseQuantity(item._id)}
                                                className="bg-gray-200 px-4 py-2 rounded-lg"
                                            >
                                                -
                                            </button>

                                            <span className="text-xl font-bold">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() => increaseQuantity(item._id)}
                                                className="bg-gray-200 px-4 py-2 rounded-lg"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="bg-red-500 text-white px-5 py-3 rounded-xl"
                                    >
                                        Remove
                                    </button>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                <div className="bg-white p-8 rounded-2xl shadow-xl h-fit">

                    <h2 className="text-3xl font-bold mb-6">
                        Customer Details
                    </h2>

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Full Name"
                        className="w-full border p-4 rounded-xl mb-4"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-4 rounded-xl mb-4"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-4 rounded-xl mb-4"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full border p-4 rounded-xl mb-6"
                        onChange={handleChange}
                    />

                    <h2 className="text-3xl font-bold mb-6">
                        Total: ₹{total}
                    </h2>

                    <button
                        onClick={submitInquiry}
                        className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold"
                    >
                        Submit Inquiry
                    </button>

                </div>

            </div>

        </div>

    );

}

export default Cart;