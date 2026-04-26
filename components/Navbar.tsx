"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState<
    "cleaning" | "fumigation" | "renovation" | null
  >(null);

  const toggleMenu = (menu: "cleaning" | "fumigation" | "renovation") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
  };

  const cleaningLinks = [
    { name: "All Cleaning", href: "/services" },
    { name: "Sofa Cleaning", href: "/services/sofa-cleaning" },
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { name: "House Cleaning", href: "/services/house-cleaning" },
    { name: "Cabro Cleaning", href: "/services/cabro-cleaning" },
    { name: "Office Cleaning", href: "/commercial/office-cleaning" },
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
            <p className="text-lg font-bold">Glanz Facility Services Ltd</p>
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
              <span>Cleaning</span>
              <span className="text-xs">▼</span>
            </div>

            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {cleaningLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* FUMIGATION */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Fumigation</span>
              <span className="text-xs">▼</span>
            </div>

            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {fumigationLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 hover:bg-blue-50 text-sm">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>

          {/* RENOVATION */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Renovation</span>
              <span className="text-xs">▼</span>
            </div>

            <div className="absolute hidden group-hover:block top-8 left-0 w-72 bg-white border rounded-xl shadow-lg p-2">
              {renovationLinks.map((l) => (
                <Link key={l.name} href={l.href} className="block px-4 py-2 hover:bg-blue-50 text-sm">
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
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-4">

          <Link href="/" onClick={closeAll}>Home</Link>

          {/* CLEANING */}
          <button onClick={() => toggleMenu("cleaning")} className="w-full text-left font-medium">
            Cleaning ▼
          </button>

          {activeMenu === "cleaning" && (
            <div className="grid gap-2">
              {cleaningLinks.map((l) => (
                <Link key={l.name} href={l.href} onClick={closeAll}
                  className="border rounded-lg px-4 py-3 bg-slate-50">
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          {/* FUMIGATION */}
          <button onClick={() => toggleMenu("fumigation")} className="w-full text-left font-medium">
            Fumigation ▼
          </button>

          {activeMenu === "fumigation" && (
            <div className="grid gap-2">
              {fumigationLinks.map((l) => (
                <Link key={l.name} href={l.href} onClick={closeAll}
                  className="border rounded-lg px-4 py-3 bg-slate-50">
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          {/* RENOVATION */}
          <button onClick={() => toggleMenu("renovation")} className="w-full text-left font-medium">
            Renovation ▼
          </button>

          {activeMenu === "renovation" && (
            <div className="grid gap-2">
              {renovationLinks.map((l) => (
                <Link key={l.name} href={l.href} onClick={closeAll}
                  className="border rounded-lg px-4 py-3 bg-slate-50">
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/blog" onClick={closeAll}>Blog</Link>
          <Link href="/gallery" onClick={closeAll}>Gallery</Link>
          <Link href="/contact" onClick={closeAll}>Contact</Link>

          <a
            href="https://wa.me/254759993502"
            className="block bg-green-500 text-white px-4 py-2 rounded-xl text-center"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}