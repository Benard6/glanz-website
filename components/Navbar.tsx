"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [activeMenu, setActiveMenu] = useState<
    "cleaning" | "fumigation" | "renovation" | null
  >(null);

  const [mobileMenu, setMobileMenu] = useState<
    "cleaning" | "fumigation" | "renovation" | null
  >(null);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMenu(null);
    setMobileMenu(null);
  };

  const toggleMenu = (menu: "cleaning" | "fumigation" | "renovation") => {
    setActiveMenu((prev) => (prev === menu ? null : menu));
  };

  useEffect(() => {
    const handleClick = () => setActiveMenu(null);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const cleaningLinks = [
    { name: "All Cleaning", href: "/services" },
    { name: "Sofa Cleaning", href: "/services/sofa-cleaning" },
    { name: "Carpet Cleaning", href: "/services/carpet-cleaning" },
    { name: "House Cleaning", href: "/services/house-cleaning" },
    { name: "Cabro Cleaning", href: "/services/cabro-cleaning" },
    { name: "Post Construction Cleaning", href: "/services/post-construction-cleaning" },
    { name: "Window Cleaning", href: "/services/window-cleaning" },
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
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">

      {/* TOP BAR */}
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" onClick={closeAll} className="flex items-center gap-3">
          <Image
            src="/images/hero/Logo/glanz_facility_services_logo-removebg-preview.png"
            alt="Glanz Facility Services"
            width={55}
            height={55}
          />
          <div>
            <p className="text-lg font-bold">Glanz Facility ltd</p>
            <p className="text-xs text-slate-500">
              Cleaning & Renovation Experts
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-slate-800">

          <Link href="/">Home</Link>

          {/* CLEANING */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("cleaning");
              }}
              className="hover:text-blue-600"
            >
              Cleaning ▼
            </button>

            {activeMenu === "cleaning" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-3 space-y-1">

                {cleaningLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-100 transition"
                  >
                    {l.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          {/* FUMIGATION */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("fumigation");
              }}
              className="hover:text-blue-600"
            >
              Fumigation ▼
            </button>

            {activeMenu === "fumigation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-3 space-y-1">

                {fumigationLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-100 transition"
                  >
                    {l.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          {/* RENOVATION */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu("renovation");
              }}
              className="hover:text-blue-600"
            >
              Renovation ▼
            </button>

            {activeMenu === "renovation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-3 space-y-1">

                {renovationLinks.map((l) => (
                  <Link
                    key={l.name}
                    href={l.href}
                    onClick={closeAll}
                    className="block px-4 py-2 text-sm rounded-lg hover:bg-slate-100 transition"
                  >
                    {l.name}
                  </Link>
                ))}

              </div>
            )}
          </div>

          <Link href="/areas-we-serve">Areas We Serve</Link>
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
        <button className="md:hidden text-3xl" onClick={() => setMobileOpen(true)}>
          ☰
        </button>
      </div>

      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={closeAll}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 space-y-4">

          {/* HEADER */}
          <div className="flex justify-between border-b pb-3">
            <span className="font-semibold text-lg">Menu</span>
            <button onClick={closeAll}>✕</button>
          </div>

          <Link href="/" onClick={closeAll} className="block py-2">
            Home
          </Link>

          {/* CLEANING MOBILE */}
          <button
            onClick={() =>
              setMobileMenu((prev) => (prev === "cleaning" ? null : "cleaning"))
            }
            className="w-full text-left py-2 font-medium"
          >
            Cleaning ▼
          </button>

          {mobileMenu === "cleaning" && (
            <div className="pl-3 space-y-2">
              {cleaningLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={closeAll}
                  className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          {/* FUMIGATION MOBILE */}
          <button
            onClick={() =>
              setMobileMenu((prev) => (prev === "fumigation" ? null : "fumigation"))
            }
            className="w-full text-left py-2 font-medium"
          >
            Fumigation ▼
          </button>

          {mobileMenu === "fumigation" && (
            <div className="pl-3 space-y-2">
              {fumigationLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={closeAll}
                  className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          {/* RENOVATION MOBILE */}
          <button
            onClick={() =>
              setMobileMenu((prev) => (prev === "renovation" ? null : "renovation"))
            }
            className="w-full text-left py-2 font-medium"
          >
            Renovation ▼
          </button>

          {mobileMenu === "renovation" && (
            <div className="pl-3 space-y-2">
              {renovationLinks.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={closeAll}
                  className="block py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100"
                >
                  {l.name}
                </Link>
              ))}
            </div>
          )}

          <Link href="/areas-we-serve" onClick={closeAll} className="block py-2">
            Areas We Serve
          </Link>

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
            className="block bg-green-500 text-white text-center py-3 rounded-xl mt-4"
          >
            WhatsApp
          </a>

        </div>
      </div>
    </header>
  );
}