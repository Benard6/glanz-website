"use client";

import { useState } from "react";
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

  const toggleMenu = (menu: "cleaning" | "fumigation" | "renovation") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

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

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">

      {/* TOP BAR */}
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
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-800">

          <Link href="/">Home</Link>

          {/* CLEANING */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Cleaning <span className="text-xs">▼</span>
            </div>
            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {cleaningLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 text-sm hover:bg-blue-50">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FUMIGATION */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Fumigation <span className="text-xs">▼</span>
            </div>
            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {fumigationLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 text-sm hover:bg-blue-50">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RENOVATION */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              Renovation <span className="text-xs">▼</span>
            </div>
            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {renovationLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 text-sm hover:bg-blue-50">
                  {l.name}
                </Link>
              ))}
            </div>
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

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(true)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={closeAll}
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4 font-medium text-slate-800">

          {/* HEADER */}
          <div className="flex justify-between items-center border-b pb-3">
            <span className="font-bold">Menu</span>
            <button onClick={closeAll} className="text-xl">✕</button>
          </div>

          <Link href="/" onClick={closeAll} className="block py-2">
            Home
          </Link>

          {/* CLEANING */}
          <div>
            <button onClick={() => toggleMenu("cleaning")} className="w-full text-left py-2 flex justify-between">
              Cleaning <span>▼</span>
            </button>

            {activeMenu === "cleaning" && (
              <div className="grid gap-2 mt-2">
                {cleaningLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="border rounded-lg px-4 py-3 bg-slate-50"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* FUMIGATION */}
          <div>
            <button onClick={() => toggleMenu("fumigation")} className="w-full text-left py-2 flex justify-between">
              Fumigation <span>▼</span>
            </button>

            {activeMenu === "fumigation" && (
              <div className="grid gap-2 mt-2">
                {fumigationLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="border rounded-lg px-4 py-3 bg-slate-50"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* RENOVATION */}
          <div>
            <button onClick={() => toggleMenu("renovation")} className="w-full text-left py-2 flex justify-between">
              Renovation <span>▼</span>
            </button>

            {activeMenu === "renovation" && (
              <div className="grid gap-2 mt-2">
                {renovationLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="border rounded-lg px-4 py-3 bg-slate-50"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" onClick={closeAll} className="block py-2">
            Blog
          </Link>

          <Link href="/gallery" onClick={closeAll} className="block py-2">
            Gallery
          </Link>

          <Link href="/contact" onClick={closeAll} className="block py-2">
            Contact
          </Link>

          <a
            href="https://wa.me/254759993502"
            className="block bg-green-500 text-white text-center py-2 rounded-xl mt-4"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </header>
  );
}