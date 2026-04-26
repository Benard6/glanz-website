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

  // ✅ NEW
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

          <Link href="/" className="hover:text-blue-600 transition">Home</Link>

          {/* CLEANING */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("cleaning")}
              onMouseEnter={() => setActiveMenu("cleaning")}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Cleaning <span className="text-xs">▼</span>
            </button>

            {activeMenu === "cleaning" && (
              <div
                onMouseLeave={() => setActiveMenu(null)}
                className="absolute top-10 left-0 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl p-2"
              >
                {cleaningLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={closeAll}
                    className="block px-4 py-2 rounded-xl text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* FUMIGATION */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("fumigation")}
              onMouseEnter={() => setActiveMenu("fumigation")}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Fumigation <span className="text-xs">▼</span>
            </button>

            {activeMenu === "fumigation" && (
              <div
                onMouseLeave={() => setActiveMenu(null)}
                className="absolute top-10 left-0 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl p-2"
              >
                {fumigationLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={closeAll}
                    className="block px-4 py-2 rounded-xl text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* ✅ RENOVATION */}
          <div className="relative">
            <button
              onClick={() => toggleMenu("renovation")}
              onMouseEnter={() => setActiveMenu("renovation")}
              className="flex items-center gap-1 hover:text-blue-600 transition"
            >
              Renovation <span className="text-xs">▼</span>
            </button>

            {activeMenu === "renovation" && (
              <div
                onMouseLeave={() => setActiveMenu(null)}
                className="absolute top-10 left-0 w-72 bg-white border border-slate-100 rounded-2xl shadow-xl p-2"
              >
                {renovationLinks.map((link) => (
                  <a key={link.name} href={link.href} onClick={closeAll}
                    className="block px-4 py-2 rounded-xl text-sm hover:bg-blue-50 hover:text-blue-600 transition">
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/blog" className="hover:text-blue-600 transition">Blog</a>
          <a href="/gallery" className="hover:text-blue-600 transition">Gallery</a>
          <a href="/contact" className="hover:text-blue-600 transition">Contact</a>

        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/254759993502"
            className="hidden md:block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold transition"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden border px-3 py-2 rounded-lg"
          >
            Menu
          </button>
        </div>

      </div>

      {/* MOBILE */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white p-4 space-y-3">

          <Link href="/" onClick={closeAll}>Home</Link>

          <details>
            <summary className="font-semibold">Cleaning</summary>
            {cleaningLinks.map((l) => (
              <a key={l.name} href={l.href} onClick={closeAll} className="block pl-3 py-1 text-sm">
                {l.name}
              </a>
            ))}
          </details>

          <details>
            <summary className="font-semibold">Fumigation</summary>
            {fumigationLinks.map((l) => (
              <a key={l.name} href={l.href} onClick={closeAll} className="block pl-3 py-1 text-sm">
                {l.name}
              </a>
            ))}
          </details>

          {/* ✅ RENOVATION MOBILE */}
          <details>
            <summary className="font-semibold">Renovation</summary>
            {renovationLinks.map((l) => (
              <a key={l.name} href={l.href} onClick={closeAll} className="block pl-3 py-1 text-sm">
                {l.name}
              </a>
            ))}
          </details>

          <a href="/blog">Blog</a>
          <a href="/gallery">Gallery</a>
          <a href="/contact">Contact</a>

          <a
            href="https://wa.me/254759993502"
            className="block bg-green-500 text-white text-center py-3 rounded-xl"
          >
            WhatsApp
          </a>

        </div>
      )}
    </header>
  );
}