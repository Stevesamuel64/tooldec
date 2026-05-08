import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem("tooldec-cart");

        return savedCart ? JSON.parse(savedCart) : [];

    });

    useEffect(() => {

        localStorage.setItem(
            "tooldec-cart",
            JSON.stringify(cart)
        );

    }, [cart]);

    const addToCart = (product) => {

        const existingProduct = cart.find(
            (item) => item._id === product._id
        );

        if (existingProduct) {

            const updatedCart = cart.map((item) =>

                item._id === product._id

                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }

                    : item

            );

            setCart(updatedCart);

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);

        }

        alert("Added To Cart");

    };

    const increaseQuantity = (id) => {

        const updatedCart = cart.map((item) =>

            item._id === id

                ? {
                    ...item,
                    quantity: item.quantity + 1
                }

                : item

        );

        setCart(updatedCart);

    };

    const decreaseQuantity = (id) => {

        const updatedCart = cart.map((item) =>

            item._id === id

                ? {
                    ...item,
                    quantity:
                        item.quantity > 1
                            ? item.quantity - 1
                            : 1
                }

                : item

        );

        setCart(updatedCart);

    };

    const removeFromCart = (id) => {

        setCart((prev) =>
            prev.filter((item) => item._id !== id)
        );

    };

    return (

        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >

            {children}

        </CartContext.Provider>

    );

}

export default CartProvider;