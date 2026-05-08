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

            window.location.href = "/";

        } catch (error) {

            console.log(error);

            alert("Submission Failed");

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 py-8 md:py-10 px-4">

            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-10">

                <div className="md:col-span-2">

                    <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10">

                        Inquiry Cart

                    </h1>

                    {cart.length === 0 ? (

                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl text-lg md:text-2xl">

                            Cart is Empty

                        </div>

                    ) : (

                        <div className="space-y-4 md:space-y-6">

                            {cart.map((item) => (

                                <div
                                    key={item._id}
                                    className="bg-white p-4 md:p-5 rounded-2xl shadow-lg flex gap-4"
                                >

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-xl"
                                    />

                                    <div className="flex-1">

                                        <h2 className="text-lg md:text-2xl font-bold mb-2">

                                            {item.name}

                                        </h2>

                                        <p className="text-gray-500 mb-3 text-sm md:text-base">

                                            ₹{item.price}

                                        </p>

                                        <div className="flex items-center gap-2 md:gap-3">

                                            <button
                                                onClick={() => decreaseQuantity(item._id)}
                                                className="bg-gray-200 px-3 md:px-4 py-1 md:py-2 rounded-lg"
                                            >
                                                -
                                            </button>

                                            <span className="text-base md:text-xl font-bold">

                                                {item.quantity}

                                            </span>

                                            <button
                                                onClick={() => increaseQuantity(item._id)}
                                                className="bg-gray-200 px-3 md:px-4 py-1 md:py-2 rounded-lg"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item._id)}
                                        className="bg-red-500 text-white px-3 md:px-5 py-2 md:py-3 rounded-xl text-sm md:text-base h-fit"
                                    >

                                        Remove

                                    </button>

                                </div>

                            ))}

                        </div>

                    )}

                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl h-fit">

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">

                        Customer Details

                    </h2>

                    <input
                        type="text"
                        name="customerName"
                        placeholder="Full Name"
                        className="w-full border p-3 md:p-4 rounded-xl mb-4 text-sm md:text-base"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        className="w-full border p-3 md:p-4 rounded-xl mb-4 text-sm md:text-base"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="w-full border p-3 md:p-4 rounded-xl mb-4 text-sm md:text-base"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        className="w-full border p-3 md:p-4 rounded-xl mb-6 text-sm md:text-base"
                        onChange={handleChange}
                    />

                    <h2 className="text-2xl md:text-3xl font-bold mb-6">

                        Total: ₹{total}

                    </h2>

                    <button
                        onClick={submitInquiry}
                        className="w-full bg-black text-white py-3 md:py-4 rounded-xl text-base md:text-lg font-bold hover:opacity-90 transition"
                    >

                        Submit Inquiry

                    </button>

                </div>

            </div>

        </div>

    );

}

export default Cart;