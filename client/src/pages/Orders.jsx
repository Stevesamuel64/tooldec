import { useEffect, useState } from "react";
import axios from "axios";

function Orders() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetchOrders();

    }, []);

    const fetchOrders = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/orders"
            );

            setOrders(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-7xl mx-auto">

                <h1 className="text-5xl font-bold mb-10">
                    Orders
                </h1>

                <div className="space-y-8">

                    {orders.map((order) => (

                        <div
                            key={order._id}
                            className="bg-white rounded-2xl shadow-xl p-8"
                        >

                            <div className="flex justify-between items-center mb-6">

                                <h2 className="text-2xl font-bold">
                                    Order ID:
                                    <span className="text-gray-500 ml-2">
                                        {order._id.slice(-6)}
                                    </span>
                                </h2>

                                <p className="text-gray-500">
                                    {new Date(order.createdAt)
                                        .toLocaleString()}
                                </p>

                            </div>

                            <div className="space-y-4">

                                {order.items.map((item, index) => (

                                    <div
                                        key={index}
                                        className="flex items-center gap-5 border-b pb-4"
                                    >

                                        <img
                                            src={item.image}
                                            alt=""
                                            className="w-24 h-24 object-cover rounded-xl"
                                        />

                                        <div className="flex-1">

                                            <h3 className="text-xl font-bold">
                                                {item.name}
                                            </h3>

                                            <p className="text-gray-500">
                                                ₹{item.price}
                                            </p>

                                            <p className="text-gray-500">
                                                Quantity: {item.quantity}
                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                            <div className="mt-6 text-right">

                                <h2 className="text-3xl font-bold">
                                    Total: ₹{order.totalAmount}
                                </h2>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </div>

    );

}

export default Orders;