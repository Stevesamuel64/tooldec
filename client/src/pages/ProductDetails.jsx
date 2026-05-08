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
                `http://localhost:5000/api/products/${id}`
            );

            setProduct(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    if (!product) {

        return (
            <div className="text-center py-20 text-3xl">
                Loading...
            </div>
        );

    }

    return (

        <div className="min-h-screen bg-gray-100 py-20 px-6">

            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

                <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover"
                />

                <div className="p-10 flex flex-col justify-center">

                    <p className="text-yellow-500 font-bold uppercase mb-4">
                        {product.category}
                    </p>

                    <h1 className="text-5xl font-bold mb-6">
                        {product.name}
                    </h1>

                    <p className="text-gray-600 text-lg mb-8">
                        {product.description}
                    </p>

                    <h2 className="text-4xl font-bold mb-8">
                        ₹{product.price}
                    </h2>

                    <div className="flex gap-4">

                        <button
    onClick={() => {

        addToCart(product);

        navigate("/cart");

    }}
    className="bg-black text-white px-8 py-4 rounded-xl text-lg"
>
    Order Now
</button>

                        <button className="border border-black px-8 py-4 rounded-xl text-lg">
                            Inquiry
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default ProductDetails;