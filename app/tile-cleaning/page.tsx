import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title:
    "Tile Cleaning Services Nairobi, Kiambu & Thika | Floor & Grout Cleaning Kenya",
  description:
    "Professional tile and grout cleaning in Nairobi, Kiambu and Thika. We remove stains, mold, grease and restore floors in kitchens, bathrooms and commercial spaces.",
  keywords: [
    "tile cleaning Nairobi",
    "grout cleaning Kenya",
    "floor cleaning Nairobi",
    "bathroom tile cleaning Kiambu",
    "kitchen tile cleaning Thika",
  ],
};

export default function TileCleaningPage() {
  const media = [
    { type: "image", src: "/images/hero/tile-cleaning/1.jpg" },
    { type: "image", src: "/images/hero/tile-cleaning/2.jpg" },
    { type: "image", src: "/images/hero/tile-cleaning/3.jpg" },
    
  ];

  const pricingRows = [
    {
      item: "Standard tile cleaning",
      pricing: "KES 50 per sqm",
      details: "Deep cleaning for ceramic and porcelain tiles.",
    },
    {
      item: "Grout cleaning",
      pricing: "KES 60–70 per sqm",
      details: "Removes dirt, mold and discoloration between tiles.",
    },
    {
      item: "Heavy stain / grease removal",
      pricing: "Assessment required",
      details: "For kitchens, commercial floors and long-term buildup.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Tile Cleaning Services Kenya"
            title="Professional Tile & Grout Cleaning in Nairobi, Kiambu & Thika"
            description="Restore dirty tiles in kitchens, bathrooms and floors with deep cleaning and stain removal."
          />

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((item, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-slate-100"
              >
                <Image
                  src={item.src}
                  alt={`Tile cleaning Nairobi Kenya ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
          <div className="grid gap-10 lg:grid-cols-2">

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <h2 className="text-2xl font-bold text-slate-900">
                Deep Tile & Grout Cleaning Services in Kenya
              </h2>

              <p>
                Tiles and grout collect dirt, grease, mold and stains over time,
                making floors look dull and unhygienic.
              </p>

              <p>
                Glanz Facility Services provides professional tile cleaning
                services in Nairobi, Kiambu, Thika and surrounding areas.
              </p>

              <p>
                Our deep cleaning process removes embedded dirt, restores tile
                brightness and improves overall hygiene.
              </p>

              <p>
                Suitable for homes, bathrooms, kitchens, offices and commercial
                properties.
              </p>
            </div>

            {/* WHAT WE HANDLE */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we clean</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Bathroom tiles and walls</li>
                <li>Kitchen floors and grease buildup</li>
                <li>Living room and hallway tiles</li>
                <li>Outdoor and balcony tiles</li>
                <li>Grout lines and joints</li>
                <li>Commercial and office floors</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Tile Cleaning Pricing in Kenya"
          note="Pricing depends on floor size, dirt level, grout condition and accessibility."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve
            </h2>

            <p className="mt-4 text-slate-600">
              We provide tile cleaning services in Nairobi, Kiambu, Thika,
              Ruiru, Westlands, Kilimani, Kahawa and nearby areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Tile Cleaning?
            </h2>

            <p className="mt-4 text-slate-300">
              Send photos of your tiles on WhatsApp for fast pricing.
            </p>

            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900"
            >
              Request Quote
            </a>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}