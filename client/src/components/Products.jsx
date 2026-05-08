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
            className="bg-white py-14 md:py-20"
        >

            <div className="max-w-7xl mx-auto px-4 md:px-6">

                <div className="mb-10 md:mb-14">

                    <p className="text-gray-500 uppercase tracking-[4px] text-[11px] md:text-sm mb-3">

                        Product Catalog

                    </p>

                    <h2 className="text-3xl md:text-5xl font-bold text-black">

                        Featured Products

                    </h2>

                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">

                    {products.map((product) => (

                        <Link
                            to={`/product/${product._id}`}
                            key={product._id}
                            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition duration-300"
                        >

                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-40 md:h-64 w-full object-cover"
                            />

                            <div className="p-3 md:p-6">

                                <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-3 text-black line-clamp-2">

                                    {product.name}

                                </h3>

                                <p className="hidden md:block text-gray-500 mb-5 leading-relaxed text-sm md:text-base line-clamp-3">

                                    {product.description}

                                </p>

                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                                    <span className="text-black text-sm md:text-2xl font-bold">

                                        ₹{product.price}

                                    </span>

                                    <button className="border border-gray-300 px-3 md:px-5 py-2 rounded-lg hover:bg-black hover:text-white transition text-xs md:text-base">

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