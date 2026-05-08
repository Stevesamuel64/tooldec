import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

  return (

    <nav className="w-full bg-black text-white border-b border-gray-800">

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

      </div>

    </nav>

  );

}

export default Navbar;