import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title:
    "Carpet Cleaning Services Nairobi, Kiambu & Thika | Deep Carpet Cleaning Kenya",
  description:
    "Professional carpet cleaning services in Nairobi, Kiambu, Thika and across Kenya. We remove stains, dust, allergens and odors using deep extraction cleaning for homes and offices.",
  keywords: [
    "carpet cleaning Nairobi",
    "carpet cleaning Kiambu",
    "carpet cleaning Thika",
    "deep carpet cleaning Kenya",
    "carpet stain removal Nairobi",
    "sofa and carpet cleaning Kenya",
  ],
};

export default function CarpetCleaningPage() {
  const images = [
    "/images/hero/carpert-cleaning/1.jpg",
    "/images/hero/carpert-cleaning/2.jpg",
    "/images/hero/carpert-cleaning/3.jpg",
    "/images/hero/carpert-cleaning/4.jpg",
    "/images/hero/carpert-cleaning/5.jpg",
  ];

  const pricingRows = [
    {
      item: "Standard carpet cleaning",
      pricing: "KES 40 per sqm",
      details:
        "Deep vacuuming, stain treatment, shampooing and extraction cleaning.",
    },
    {
      item: "Heavy stain removal",
      pricing: "KES 50–70 per sqm",
      details:
        "For oil stains, food stains, pet stains and heavily soiled carpets.",
    },
    {
      item: "Wall-to-wall carpet cleaning",
      pricing: "Site assessment required",
      details:
        "Pricing depends on carpet thickness, size and condition.",
    },
    {
      item: "Office & commercial carpet cleaning",
      pricing: "Custom quotation",
      details:
        "Ideal for offices, hotels and commercial buildings.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Carpet Cleaning Services Kenya"
            title="Professional Carpet Cleaning in Nairobi, Kiambu & Thika"
            description="Deep carpet cleaning that removes stains, dust, allergens and odors for homes and businesses."
          />

          {/* IMAGE GRID */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-slate-100"
              >
                <Image
                  src={src}
                  alt={`Carpet cleaning service Nairobi Kenya ${index + 1}`}
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
                Expert Carpet Cleaning Services in Kenya
              </h2>

              <p>
                Glanz Facility Services provides professional carpet cleaning
                across Nairobi, Kiambu, Thika and nearby areas.
              </p>

              <p>
                Our deep extraction cleaning removes embedded dirt, allergens,
                bacteria and stains from carpet fibers.
              </p>

              <p>
                We restore carpets to a clean, fresh and hygienic condition,
                improving both appearance and indoor air quality.
              </p>

              <p>
                Suitable for homes, apartments, offices, hotels and commercial
                spaces.
              </p>
            </div>

            {/* SERVICES */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we clean</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Home carpets</li>
                <li>Office carpets</li>
                <li>Hotel carpets</li>
                <li>Apartment carpets</li>
                <li>Wall-to-wall carpets</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Carpet Cleaning Pricing in Kenya"
          note="Final pricing depends on carpet condition and size."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Areas We Serve</h2>

            <p className="mt-4 text-slate-600">
              Nairobi, Kiambu, Thika, Ruiru, Westlands, Kilimani, Karen and surrounding areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold">
              Need Carpet Cleaning Services?
            </h2>

            <p className="mt-4 text-slate-300">
              Send your carpet size and photos via WhatsApp for a fast quote.
            </p>

            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900"
            >
              Get Free Quote
            </a>
          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}