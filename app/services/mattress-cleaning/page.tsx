import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title:
    "Mattress Cleaning Services Nairobi, Kiambu & Thika | Deep Cleaning Kenya",
  description:
    "Professional mattress cleaning in Nairobi, Kiambu and Thika. Remove stains, dust, odor and allergens with deep cleaning services for homes, apartments and hotels.",
  keywords: [
    "mattress cleaning Nairobi",
    "deep mattress cleaning Kenya",
    "mattress stain removal Nairobi",
    "sofa and mattress cleaning Kiambu",
    "bed cleaning services Thika",
  ],
};

export default function MattressCleaningPage() {
  const media = [
    { type: "image", src: "/images/hero/mattress-cleaning/1.jpg" },
    { type: "image", src: "/images/hero/mattress-cleaning/8.jpg" },
    { type: "image", src: "/images/hero/mattress-cleaning/9.jpg" },
    { type: "image", src: "/images/hero/mattress-cleaning/4.jpg" },
    { type: "image", src: "/images/hero/mattress-cleaning/5.jpg" },
  ];

  const pricingRows = [
    {
      item: "3x6 mattress",
      pricing: "From KES 2,500",
      details: "Standard deep cleaning for single mattress.",
    },
    {
      item: "4x6 mattress",
      pricing: "From KES 3,000",
      details: "Depends on stains and cleaning condition.",
    },
    {
      item: "5x6 mattress",
      pricing: "From KES 3,500",
      details: "Ideal for regular hygiene cleaning.",
    },
    {
      item: "6x6 mattress",
      pricing: "From KES 4,000",
      details: "Pricing varies based on thickness and stain removal.",
    },
    {
      item: "Multiple mattresses / hotels / Airbnb",
      pricing: "Assessment required",
      details: "Best for bulk or commercial cleaning setups.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Mattress Cleaning Services Kenya"
            title="Professional Mattress Cleaning in Nairobi, Kiambu & Thika"
            description="Deep mattress cleaning for homes, apartments, Airbnbs and hotels."
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
                  alt={`Mattress cleaning Nairobi Kenya ${index + 1}`}
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
                Deep Mattress Cleaning Services in Kenya
              </h2>

              <p>
                Mattresses accumulate dust, sweat, stains and allergens over time,
                affecting hygiene and comfort.
              </p>

              <p>
                Glanz Facility Services provides professional mattress cleaning
                services in Nairobi, Kiambu, Thika and nearby areas.
              </p>

              <p>
                Our deep cleaning process helps remove stains, reduce odor and
                improve freshness for better sleeping conditions.
              </p>

              <p>
                Ideal for homes, rentals, Airbnbs, guest rooms and hotels.
              </p>
            </div>

            {/* WHAT WE HANDLE */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we handle</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Dust and allergen removal</li>
                <li>Stain treatment</li>
                <li>Odor elimination</li>
                <li>Deep fabric cleaning</li>
                <li>Single and multiple mattresses</li>
                <li>Residential and commercial cleaning</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Mattress Cleaning Pricing in Kenya"
          note="Final pricing depends on mattress size, condition, stain level and quantity."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve
            </h2>

            <p className="mt-4 text-slate-600">
              We offer mattress cleaning services in Nairobi, Kiambu, Thika,
              Ruiru, Westlands, Kilimani, Kahawa, and surrounding areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Mattress Cleaning?
            </h2>

            <p className="mt-4 text-slate-300">
              Send mattress size and photos on WhatsApp for fast pricing.
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