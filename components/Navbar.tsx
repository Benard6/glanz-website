"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<
    "cleaning" | "fumigation" | "renovation" | null
  >(null);

  // Close menus on route change (important UX fix)
  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

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
          <Link href="/">Home</Link>

          <div className="relative">
            <button onClick={() => toggleMenu("cleaning")}>Cleaning ▼</button>
            {activeMenu === "cleaning" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-2 animate-fade">
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

          <div className="relative">
            <button onClick={() => toggleMenu("fumigation")}>Fumigation ▼</button>
            {activeMenu === "fumigation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-2 animate-fade">
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

          <div className="relative">
            <button onClick={() => toggleMenu("renovation")}>Renovation ▼</button>
            {activeMenu === "renovation" && (
              <div className="absolute top-10 left-0 w-72 bg-white border rounded-xl shadow-xl p-2 animate-fade">
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

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU (ANIMATED) */}
      <div
        className={`md:hidden bg-white border-t px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "max-h-[800px] py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="space-y-4 text-slate-800 font-medium">

          <Link href="/" onClick={closeAll}>Home</Link>

          <button onClick={() => toggleMenu("cleaning")}>Cleaning</button>
          {activeMenu === "cleaning" && (
            <div className="pl-4 space-y-2">
              {cleaningLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeAll}>
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <button onClick={() => toggleMenu("fumigation")}>Fumigation</button>
          {activeMenu === "fumigation" && (
            <div className="pl-4 space-y-2">
              {fumigationLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeAll}>
                  {link.name}
                </Link>
              ))}
            </div>
          )}

          <button onClick={() => toggleMenu("renovation")}>Renovation</button>
          {activeMenu === "renovation" && (
            <div className="pl-4 space-y-2">
              {renovationLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={closeAll}>
                  {link.name}
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
      </div>

      {/* SIMPLE ANIMATION */}
      <style jsx>{`
        .animate-fade {
          animation: fadeIn 0.15s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}