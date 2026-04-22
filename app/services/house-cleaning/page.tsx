import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title:
    "House Cleaning Services Nairobi, Kiambu & Thika | Professional Home Cleaning Kenya",
  description:
    "Professional house cleaning services in Nairobi, Kiambu, Thika and across Kenya. We offer deep cleaning, apartment cleaning, move-in cleaning and regular home cleaning services.",
  keywords: [
    "house cleaning Nairobi",
    "home cleaning services Kenya",
    "apartment cleaning Kiambu",
    "deep cleaning Thika",
    "residential cleaning Nairobi",
    "professional cleaners Kenya",
  ],
};

export default function HouseCleaningPage() {
  const media = [
    { type: "image", src: "/images/hero/house-Cleaning/1.jpg" },
    { type: "image", src: "/images/hero/house-Cleaning/2.jpg" },
    { type: "image", src: "/images/hero/carpert-cleaning/3.jpg" }, // you included this
    { type: "image", src: "/images/hero/house-Cleaning/4.jpg" },
    { type: "image", src: "/images/hero/house-Cleaning/5.jpg" },
  ];

  const pricingRows = [
    {
      item: "Standard house cleaning",
      pricing: "From KES 3,500",
      details:
        "General cleaning including dusting, mopping, kitchen and bathroom cleaning.",
    },
    {
      item: "Deep house cleaning",
      pricing: "From KES 6,000",
      details:
        "Detailed cleaning including walls, appliances, hidden dirt and deep scrubbing.",
    },
    {
      item: "Move-in / Move-out cleaning",
      pricing: "Custom quotation",
      details:
        "Full house cleaning before or after moving into a new home.",
    },
    {
      item: "Apartment cleaning",
      pricing: "Based on size",
      details:
        "Flexible pricing depending on number of rooms and condition.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="House Cleaning Services Kenya"
            title="Professional House Cleaning in Nairobi, Kiambu & Thika"
            description="We provide reliable and thorough house cleaning services for homes, apartments and residential spaces."
          />

          {/* MEDIA GRID */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((item, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-slate-100"
              >
                <Image
                  src={item.src}
                  alt={`House cleaning Nairobi Kenya ${index + 1}`}
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
                Reliable Home Cleaning Services in Kenya
              </h2>

              <p>
                Glanz Facility Services provides professional house cleaning
                services across Nairobi, Kiambu, Thika and nearby areas.
              </p>

              <p>
                We help homeowners maintain clean, hygienic and comfortable
                living spaces through detailed and reliable cleaning services.
              </p>

              <p>
                Our trained team handles everything from routine cleaning to
                deep cleaning for homes, apartments and residential properties.
              </p>

              <p>
                We use safe cleaning products and professional equipment to
                deliver high-quality results every time.
              </p>
            </div>

            {/* SERVICES */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we clean</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Living rooms and bedrooms</li>
                <li>Kitchens and appliances</li>
                <li>Bathrooms and toilets</li>
                <li>Floors, tiles and surfaces</li>
                <li>Windows and interior spaces</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="House Cleaning Pricing in Kenya"
          note="Final pricing depends on house size, condition and cleaning level required."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve
            </h2>

            <p className="mt-4 text-slate-600">
              We offer house cleaning services in Nairobi, Kiambu, Thika,
              Ruiru, Westlands, Kilimani, Syokimau and surrounding areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

            <h2 className="text-3xl font-bold">
              Need House Cleaning Services?
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Send your location and house details via WhatsApp for fast booking and quotation.
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