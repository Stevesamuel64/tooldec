import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";
import Navbar from "./components/Navbar";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <nav className="w-full bg-black text-white border-b border-gray-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">

        <Link
          to="/"
          className="flex items-center gap-2"
        >

          <img
            src={logo}
            alt="ToolDec"
            className="h-8 md:h-10 w-auto object-contain rounded"
          />

          <h1 className="text-lg md:text-2xl font-bold tracking-wide text-white">

            TOOLDEC

          </h1>

        </Link>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold">

          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              Contact
            </a>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-gray-300 transition"
            >
              About Us
            </Link>
          </li>

        </ul>

        {/* Mobile Hamburger */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1"
        >

          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>

        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-black border-t border-gray-800 px-4 py-5">

          <div className="flex flex-col gap-5 text-sm uppercase font-semibold">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              Home
            </Link>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-300 transition"
            >
              Contact
            </a>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-gray-300 transition"
            >
              About Us
            </Link>

          </div>

        </div>

      )}

    </nav>

  );

}

export default Navbar;