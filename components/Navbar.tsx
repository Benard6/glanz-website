"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    "cleaning" | "fumigation" | "renovation" | null
  >(null);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  useEffect(() => {
    const handleClickOutside = () => setActiveMenu(null);
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const cleaningLinks = [
    { name: "All Cleaning", href: "/services" },
    { name: "Sofa Cleaning", href: "/services/sofa-cleaning" },
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { name: "House Cleaning", href: "/services/house-cleaning" },
    { name: "Cabro Cleaning", href: "/services/cabro-cleaning" },
    { name: "Office Cleaning", href: "/commercial/office-cleaning" },
    { name: "Post Construction", href: "/post-construction-cleaning" },
    { name: "Window Cleaning", href: "/window-cleaning" },
    { name: "Tile Cleaning", href: "/tile-cleaning" },
  ];

  const fumigationLinks = [
    { name: "All Fumigation", href: "/fumigation" },
    { name: "Cockroach Control", href: "/fumigation/cockroach-control" },
    { name: "Bedbugs Control", href: "/fumigation/bedbug-control" },
    { name: "Mosquito Control", href: "/fumigation/mosquito-control" },
  ];

  const renovationLinks = [
    { name: "All Renovation", href: "/renovation" },
    { name: "Cabro Installation", href: "/renovation/cabro-installation" },
    { name: "House Painting", href: "/renovation/house-painting" },
  ];

  const toggleMenu = (menu: "cleaning" | "fumigation" | "renovation") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3">
          <Image
            src="/images/hero/Logo/glanz_facility_services_logo-removebg-preview.png"
            alt="Glanz Facility Services"
            width={65}
            height={65}
          />

          <div>
            <p className="text-lg font-bold text-slate-900">
              Glanz Facility Services Ltd
            </p>
            <p className="text-xs text-slate-500">
              Cleaning & Surface Restoration Experts
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-slate-800 font-medium">

          <Link href="/" className="hover:text-blue-600">Home</Link>

          {/* CLEANING */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("cleaning")}
              onMouseEnter={() => setActiveMenu("cleaning")}
            >
              Cleaning ▼
            </button>

            {activeMenu === "cleaning" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-2xl shadow-xl p-2">
                {cleaningLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* FUMIGATION */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("fumigation")}
              onMouseEnter={() => setActiveMenu("fumigation")}
            >
              Fumigation ▼
            </button>

            {activeMenu === "fumigation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-2xl shadow-xl p-2">
                {fumigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RENOVATION */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("renovation")}
              onMouseEnter={() => setActiveMenu("renovation")}
            >
              Renovation ▼
            </button>

            {activeMenu === "renovation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-2xl shadow-xl p-2">
                {renovationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm hover:bg-blue-50"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog">Blog</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>

        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/254759993502"
          className="hidden md:block bg-green-500 text-white px-4 py-2 rounded-xl"
        >
          WhatsApp
        </a>

      </div>
    </header>
  );
}