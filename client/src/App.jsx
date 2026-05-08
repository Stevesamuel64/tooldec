import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import UploadProduct from "./pages/UploadProduct";

function App() {

  return (

<BrowserRouter>

  <Navbar />

  <div className="pt-16">

    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/upload-product" element={<UploadProduct />} />

    </Routes>

  </div>

</BrowserRouter>

  );

}

export default App;