import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full bg-black text-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        <Link to="/" className="flex items-center gap-2">

          <img
            src={logo}
            alt="ToolDec"
            className="h-8 w-auto"
          />

          <h1 className="text-lg md:text-2xl font-bold">
            TOOLDEC
          </h1>

        </Link>

        {/* Desktop */}

        <div className="hidden md:flex gap-8">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/cart">Cart</Link>

        </div>

        {/* Mobile */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >

          ☰

        </button>

      </div>

      {menuOpen && (

        <div className="md:hidden bg-black px-4 pb-4 flex flex-col gap-4">

          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>

          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>

          <Link to="/cart" onClick={() => setMenuOpen(false)}>
            Cart
          </Link>

        </div>

      )}

    </nav>

  );

}

export default Navbar;