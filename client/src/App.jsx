import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import ProtectedRoute from "./components/ProtectedRoute";
import Orders from "./pages/Orders";
import About from "./pages/About";
import UploadProduct from "./pages/UploadProduct";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/admin"
          element={
           <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        }
        />

<Route
  path="/cart"
  element={
    <ProtectedRoute>
      <Cart />
    </ProtectedRoute>
  }
/>

<Route
  path="/upload-product"
  element={<UploadProduct />}
/>


        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/about" element={<About />} />

        <Route path="/orders" element={<Orders />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;