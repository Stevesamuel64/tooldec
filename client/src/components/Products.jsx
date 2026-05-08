import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                "https://tooldec.onrender.com/api/products"
            );

            setProducts(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <section
            id="products"
            className="bg-white py-20"
        >

            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-14">

                    <p className="text-gray-500 uppercase tracking-[4px] text-sm mb-3">

                        Product Catalog

                    </p>

                    <h2 className="text-5xl font-bold text-black">

                        Featured Products

                    </h2>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {products.map((product) => (

                        <Link
                            to={`/product/${product._id}`}
                            key={product._id}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={product.image}
                                alt=""
                                className="h-64 w-full object-cover"
                            />

                            <div className="p-6">

                                <h3 className="text-2xl font-bold mb-3 text-black">
                                    {product.name}
                                </h3>

                                <p className="text-gray-500 mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">

                                    <span className="text-black text-2xl font-bold">
                                        ₹{product.price}
                                    </span>

                                    <button className="border border-gray-300 px-5 py-2 rounded-lg hover:bg-black hover:text-white transition">

                                        View

                                    </button>

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Products;