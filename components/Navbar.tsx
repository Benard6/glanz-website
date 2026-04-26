"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-[9999]">
      {/* Top bar */}
      <div className="backdrop-blur-xl bg-white/80 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="font-semibold text-lg tracking-tight">
            Glanz Facility Services
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

            <Link href="/" className="text-gray-700 hover:text-black">
              Home
            </Link>

            {/* Cleaning */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("cleaning")}
                className="text-gray-700 hover:text-black"
              >
                Cleaning ▼
              </button>

              {openDropdown === "cleaning" && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl p-3 w-52 border">
                  <Link href="/cleaning/house" className="block py-2 px-2 rounded hover:bg-gray-100">
                    House Cleaning
                  </Link>
                  <Link href="/cleaning/deep" className="block py-2 px-2 rounded hover:bg-gray-100">
                    Deep Cleaning
                  </Link>
                </div>
              )}
            </div>

            {/* Fumigation */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("fumigation")}
                className="text-gray-700 hover:text-black"
              >
                Fumigation ▼
              </button>

              {openDropdown === "fumigation" && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl p-3 w-52 border">
                  <Link href="/fumigation/home" className="block py-2 px-2 rounded hover:bg-gray-100">
                    Home Fumigation
                  </Link>
                  <Link href="/fumigation/commercial" className="block py-2 px-2 rounded hover:bg-gray-100">
                    Commercial Fumigation
                  </Link>
                </div>
              )}
            </div>

            {/* Renovation */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("renovation")}
                className="text-gray-700 hover:text-black"
              >
                Renovation ▼
              </button>

              {openDropdown === "renovation" && (
                <div className="absolute top-8 left-0 bg-white shadow-lg rounded-xl p-3 w-52 border">
                  <Link href="/renovation/cabro" className="block py-2 px-2 rounded hover:bg-gray-100">
                    Cabro Installation
                  </Link>
                  <Link href="/renovation/painting" className="block py-2 px-2 rounded hover:bg-gray-100">
                    House Painting
                  </Link>
                </div>
              )}
            </div>

            <Link href="/blog" className="text-gray-700 hover:text-black">
              Blog
            </Link>

            <Link href="/gallery" className="text-gray-700 hover:text-black">
              Gallery
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-black">
              Contact
            </Link>

            <a
              href="https://wa.me/254711628595"
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600"
            >
              WhatsApp
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-2xl"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="md:hidden bg-gray-100/95 backdrop-blur-xl border-t border-gray-200 px-4 py-5 space-y-4 z-[9999] shadow-xl">

            <Link href="/" className="block text-gray-800">Home</Link>

            {/* Cleaning */}
            <button
              onClick={() => toggleDropdown("m-cleaning")}
              className="block w-full text-left text-gray-800"
            >
              Cleaning ▼
            </button>
            {openDropdown === "m-cleaning" && (
              <div className="pl-4 space-y-2">
                <Link href="/cleaning/house" className="block">House Cleaning</Link>
                <Link href="/cleaning/deep" className="block">Deep Cleaning</Link>
              </div>
            )}

            {/* Fumigation */}
            <button
              onClick={() => toggleDropdown("m-fumigation")}
              className="block w-full text-left text-gray-800"
            >
              Fumigation ▼
            </button>
            {openDropdown === "m-fumigation" && (
              <div className="pl-4 space-y-2">
                <Link href="/fumigation/home" className="block">Home Fumigation</Link>
                <Link href="/fumigation/commercial" className="block">Commercial Fumigation</Link>
              </div>
            )}

            {/* Renovation */}
            <button
              onClick={() => toggleDropdown("m-renovation")}
              className="block w-full text-left text-gray-800"
            >
              Renovation ▼
            </button>
            {openDropdown === "m-renovation" && (
              <div className="pl-4 space-y-2">
                <Link href="/renovation/cabro" className="block">Cabro Installation</Link>
                <Link href="/renovation/painting" className="block">House Painting</Link>
              </div>
            )}

            <Link href="/blog" className="block">Blog</Link>
            <Link href="/gallery" className="block">Gallery</Link>
            <Link href="/contact" className="block">Contact</Link>

            <a
              href="https://wa.me/254711628595"
              className="block bg-green-500 text-white text-center py-2 rounded-full"
            >
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}