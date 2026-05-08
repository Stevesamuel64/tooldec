import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:5000/api/auth/login",
                formData
            );

            localStorage.setItem(
                "tooldec-token",
                res.data.token
            );

            alert("Login Successful");

            navigate("/");

        } catch (error) {

            console.log(error);

            alert("Login Failed");

        }

    };

    return (

        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

            <form
                onSubmit={handleSubmit}
                className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md"
            >

                <h1 className="text-4xl font-bold mb-8 text-center">
                    Login
                </h1>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border p-4 rounded-xl mb-4"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full border p-4 rounded-xl mb-6"
                    onChange={handleChange}
                />

                <button
                    className="w-full bg-black text-white py-4 rounded-xl text-lg font-bold"
                >
                    Login
                </button>

                <p className="mt-6 text-center">

                    Don't have account?

                    <Link
                        to="/register"
                        className="text-blue-500 ml-2"
                    >
                        Register
                    </Link>

                </p>

            </form>

        </div>

    );

}

export default Login;