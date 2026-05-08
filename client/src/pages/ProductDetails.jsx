import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [product, setProduct] = useState(null);

    const { addToCart } = useContext(CartContext);

    useEffect(() => {

        fetchProduct();

    }, []);

    const fetchProduct = async () => {

        try {

            const res = await axios.get(
                `https://tooldec.onrender.com/api/products/${id}`
            );

            setProduct(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    if (!product) {

        return (

            <div className="text-center py-20 text-2xl md:text-3xl">

                Loading...

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-gray-100 py-10 md:py-20 px-4 md:px-6">

            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-72 md:h-full object-cover"
                />

                <div className="p-6 md:p-10 flex flex-col justify-center">

                    <p className="text-gray-500 font-semibold uppercase tracking-[3px] mb-4 text-sm">

                        {product.category}

                    </p>

                    <h1 className="text-3xl md:text-5xl font-bold mb-6 text-black leading-tight">

                        {product.name}

                    </h1>

                    <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">

                        {product.description}

                    </p>

                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-black">

                        ₹{product.price}

                    </h2>

                    <div className="flex flex-col sm:flex-row gap-4">

                        <button
                            onClick={() => {

                                addToCart(product);

                                navigate("/cart");

                            }}
                            className="bg-black text-white px-8 py-4 rounded-xl text-base md:text-lg font-semibold hover:opacity-90 transition"
                        >

                            Order Now

                        </button>

                        <a
                            href="https://wa.me/919999999999"
                            target="_blank"
                            rel="noreferrer"
                            className="border border-black px-8 py-4 rounded-xl text-base md:text-lg text-center hover:bg-black hover:text-white transition"
                        >

                            Inquiry

                        </a>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProductDetails;