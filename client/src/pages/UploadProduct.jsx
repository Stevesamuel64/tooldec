import { useState } from "react";
import axios from "axios";

function UploadProduct() {

    const [authorized, setAuthorized] = useState(false);

    const [secretCode, setSecretCode] = useState("");

    const [formData, setFormData] = useState({

        name: "",
        description: "",
        price: "",
        category: "",
        image: ""

    });

    const checkCode = () => {

        if (secretCode === "1234") {

            setAuthorized(true);

        } else {

            alert("Wrong Access Code");

        }

    };

    const handleChange = (e) => {

        setFormData({

            ...formData,

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

            setFormData({

                ...formData,

                image: res.data.secure_url

            });

        } catch (error) {

            console.log(error);

        }

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "https://tooldec.onrender.com/api/products/add",

                formData

            );

            alert("Product Uploaded Successfully");

        } catch (error) {

            console.log(error);

            alert("Upload Failed");

        }

    };


    if (!authorized) {

        return (

            <div className="min-h-screen bg-white flex items-center justify-center px-6">

                <div className="border border-gray-200 rounded-3xl p-10 w-full max-w-md">

                    <h1 className="text-3xl font-bold mb-6 text-center">

                        Owner Access

                    </h1>

                    <input
                        type="password"
                        placeholder="Enter Access Code"
                        className="w-full border border-gray-300 p-4 rounded-xl mb-5"
                        onChange={(e) => setSecretCode(e.target.value)}
                    />

                    <button
                        onClick={checkCode}
                        className="w-full bg-black text-white py-4 rounded-xl"
                    >

                        Enter

                    </button>

                </div>

            </div>

        );

    }

    return (

        <div className="min-h-screen bg-white py-20">

            <div className="max-w-2xl mx-auto px-6">

                <div className="border border-gray-200 rounded-3xl p-10">

                    <h1 className="text-4xl font-bold mb-8">

                        Upload Product

                    </h1>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >

                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            className="w-full border border-gray-300 p-4 rounded-xl"
                            onChange={handleChange}
                        />

                        <textarea
                            name="description"
                            placeholder="Description"
                            rows="5"
                            className="w-full border border-gray-300 p-4 rounded-xl"
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="w-full border border-gray-300 p-4 rounded-xl"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="category"
                            placeholder="Category"
                            className="w-full border border-gray-300 p-4 rounded-xl"
                            onChange={handleChange}
                        />

                        <input
                            type="file"
                            className="w-full border border-gray-300 p-4 rounded-xl"
                            onChange={handleImageUpload}
                        />

                        <button
                            className="w-full bg-black text-white py-4 rounded-xl text-lg font-semibold"
                        >

                            Upload Product

                        </button>

                    </form>

                </div>

            </div>

        </div>

    );

}

export default UploadProduct;