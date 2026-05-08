import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import About from "./pages/About";
import UploadProduct from "./pages/UploadProduct";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/upload-product"
          element={<UploadProduct />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;