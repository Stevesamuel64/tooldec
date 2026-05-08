import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

  return (

    <nav className="w-full bg-black text-white">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        <Link
  to="/"
  className="flex items-center gap-3"
>

  <img
    src={logo}
    alt="ToolDec"
    className="h-10 w-auto object-contain"
  />

  <h1 className="text-2xl font-bold tracking-wide text-White">

    TOOLDEC

  </h1>

</Link>
        <ul className="hidden md:flex gap-8 text-sm uppercase font-semibold">

          <li>
            <Link
              to="/"
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>
          </li>

          <li>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-400 transition"
            >
              Contact
            </a>
          </li>

          <li>
  <Link
    to="/about"
    className="hover:text-gray-500 transition"
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