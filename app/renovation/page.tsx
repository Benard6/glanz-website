import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function RenovationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="relative h-[350px]">
          <Image
            src="/images/hero/cabro-repaint/IMG_1034.JPEG"
            alt="Renovation Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Renovation Services
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <p className="text-center text-slate-600 max-w-2xl mx-auto">
            We provide professional renovation solutions including cabro installation and house painting for residential and commercial properties.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">

            <Link href="/renovation/cabro-installation">
              <div className="p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer border">
                <h2 className="text-xl font-semibold">Cabro Installation</h2>
                <p className="mt-2 text-slate-600">
                  Professional cabro laying, leveling, and finishing for durable surfaces.
                </p>
              </div>
            </Link>

            <Link href="/renovation/house-painting">
              <div className="p-6 rounded-2xl shadow hover:shadow-lg cursor-pointer border">
                <h2 className="text-xl font-semibold">House Painting</h2>
                <p className="mt-2 text-slate-600">
                  Interior and exterior painting with clean, long-lasting finishes.
                </p>
              </div>
            </Link>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}