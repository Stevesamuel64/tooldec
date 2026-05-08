import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {

    const [product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
        description: ""
    });

    const [products, setProducts] = useState([]);

    const [editingId, setEditingId] = useState(null);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/products"
            );

            setProducts(res.data);

        } catch (error) {

            console.log(error);

        }

    };

    const handleChange = (e) => {

        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });

    };

    const handleImageUpload = async (e) => {

        const file = e.target.files[0];

        const data = new FormData();

        data.append("file", file);
        data.append("upload_preset", "tooldec");

        try {

            const res = await axios.post(
                "https://api.cloudinary.com/v1_1/ddmph9p0g/image/upload",
                data
            );

            const imageUrl = res.data.secure_url;

            setProduct((prev) => ({
                ...prev,
                image: imageUrl
            }));

            alert("Image Uploaded");

        } catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (editingId) {

                await axios.put(
                    `http://localhost:5000/api/products/${editingId}`,
                    product
                );

                alert("Product Updated");

                setEditingId(null);

            } else {

                await axios.post(
                    "http://localhost:5000/api/products/add",
                    product
                );

                alert("Product Added");

            }

            setProduct({
                name: "",
                price: "",
                image: "",
                category: "",
                description: ""
            });

            fetchProducts();

        } catch (error) {

            console.log(error);

        }

    };

    const editProduct = (item) => {

        setProduct({
            name: item.name,
            price: item.price,
            image: item.image,
            category: item.category,
            description: item.description
        });

        setEditingId(item._id);

    };

    const deleteProduct = async (id) => {

        try {

            await axios.delete(
                `http://localhost:5000/api/products/${id}`
            );

            fetchProducts();

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 p-10">

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

                <form
                    onSubmit={handleSubmit}
                    className="bg-white p-8 rounded-2xl shadow-xl"
                >

                    <h2 className="text-4xl font-bold mb-8">
                        {editingId ? "Edit Product" : "Add Product"}
                    </h2>

                    <input
                        type="text"
                        name="name"
                        placeholder="Product Name"
                        className="w-full border p-4 rounded-lg mb-4"
                        value={product.name}
                        onChange={handleChange}
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        className="w-full border p-4 rounded-lg mb-4"
                        value={product.price}
                        onChange={handleChange}
                    />

                    <input
                        type="file"
                        className="w-full border p-4 rounded-lg mb-4"
                        onChange={handleImageUpload}
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        className="w-full border p-4 rounded-lg mb-4"
                        value={product.category}
                        onChange={handleChange}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        className="w-full border p-4 rounded-lg mb-6"
                        value={product.description}
                        onChange={handleChange}
                    />

                    <button
                        className="w-full bg-black text-white py-4 rounded-lg text-lg font-bold"
                    >
                        {editingId ? "Update Product" : "Add Product"}
                    </button>

                </form>

                <div>

                    <h2 className="text-4xl font-bold mb-8">
                        All Products
                    </h2>

                    <div className="space-y-6">

                        {products.map((item) => (

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

                                    <h3 className="text-2xl font-bold">
                                        {item.name}
                                    </h3>

                                    <p className="text-gray-500">
                                        ₹{item.price}
                                    </p>

                                </div>

                                <button
                                    onClick={() => editProduct(item)}
                                    className="bg-blue-500 text-white px-5 py-3 rounded-xl mr-3"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteProduct(item._id)}
                                    className="bg-red-500 text-white px-5 py-3 rounded-xl"
                                >
                                    Delete
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Admin;