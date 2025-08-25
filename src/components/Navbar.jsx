import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <nav className="bg-black text-white px-6 py-4 w-full">
      <div className="flex justify-between items-center ml-4 w-full">
        {/* Logo */}
        <Link to="/" className="text-[20px] sm:text-[22px] md:text-[25px] font-bold">
          T.Henderson
        </Link>

        {/* Hamburger Button (only <700px) */}
        <button
          className="block text-2xl max-[1000px]:block min-[1001px]:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Menu (only ≥700px) */}
        <ul
          className="
            hidden min-[1001px]:flex gap-6 lg:gap-11 
            text-[15px] md:text-[18px] lg:text-[18px] sm:text-3xl
            font mr-3 md:mr-[80px] lg:mr-0 font-medium
          "
        >
         
          <li><Link to="/about" className="hover:underline">About Us</Link></li>
          <li><Link to="/services" className="hover:underline">Services</Link></li>
          <li><Link to="/features" className="hover:underline">Features</Link></li>
          <li><Link to="/contact" className="underline ">Contact Us</Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu (<700px only) */}
      {open && (
        <div className="bg-white text-black mt-3 rounded-lg p-4 min-[701px]:hidden relative">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-4 text-2xl text-black"
          >
            ✖
          </button>

          <ul className="flex flex-col gap-y-4 text-center text-[18px] font-semibold mt-6">
            <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
            <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
            <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
