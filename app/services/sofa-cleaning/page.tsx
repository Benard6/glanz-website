import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title:
    "Sofa Cleaning Services Nairobi, Kiambu & Thika | Upholstery Cleaning Kenya",
  description:
    "Professional sofa cleaning in Nairobi, Kiambu and Thika. Remove stains, dirt, odor and restore your sofa with deep upholstery cleaning services.",
  keywords: [
    "sofa cleaning Nairobi",
    "couch cleaning Nairobi",
    "upholstery cleaning Kenya",
    "sofa stain removal Kiambu",
    "sofa cleaning services Thika",
  ],
};

export default function SofaCleaningPage() {
  const media = [
    { type: "image", src: "/images/hero/sofa-cleaning/11.jpg" },
    { type: "image", src: "/images/hero/sofa-cleaning/12.jpg" },
    { type: "image", src: "/images/hero/sofa-cleaning/13.jpg" },
    
  ];

  const pricingRows = [
    {
      item: "5 seater sofa",
      pricing: "From KES 3,500",
      details: "Depends on fabric, stains and condition.",
    },
    {
      item: "6 seater sofa",
      pricing: "From KES 4,000",
      details: "Standard deep cleaning and refresh treatment.",
    },
    {
      item: "7 seater sofa",
      pricing: "From KES 4,500",
      details: "Varies based on size and stain removal required.",
    },
    {
      item: "Office sofa set",
      pricing: "Assessment required",
      details: "Quoted based on number of seats and fabric type.",
    },
    {
      item: "Sectional / heavy stain sofas",
      pricing: "Assessment required",
      details: "Best priced after photos or site visit.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Sofa Cleaning Services Kenya"
            title="Professional Sofa Cleaning in Nairobi, Kiambu & Thika"
            description="Deep upholstery cleaning for homes, offices, apartments and commercial spaces."
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
                  alt={`Sofa cleaning Nairobi Kenya ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading={index === 1 ? "eager" : "lazy"}
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
                Deep Sofa Cleaning Services in Kenya
              </h2>

              <p>
                Sofas collect dust, stains, body oils and odors over time,
                making them look dull and unhygienic.
              </p>

              <p>
                Glanz Facility Services offers professional sofa cleaning
                services across Nairobi, Kiambu, Thika and surrounding areas.
              </p>

              <p>
                Our deep cleaning process removes embedded dirt, treats stains
                and restores freshness to your upholstery.
              </p>

              <p>
                Suitable for homes, offices, waiting areas, Airbnbs and commercial spaces.
              </p>
            </div>

            {/* WHAT WE HANDLE */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What the service covers</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Deep upholstery cleaning</li>
                <li>Dust and dirt extraction</li>
                <li>Stain removal treatment</li>
                <li>Odor elimination</li>
                <li>Seat, cushions and backrest cleaning</li>
                <li>Residential and office sofas</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Sofa Cleaning Pricing in Kenya"
          note="Pricing depends on seat count, material, stain level and drying time."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve
            </h2>

            <p className="mt-4 text-slate-600">
              We provide sofa cleaning services in Nairobi, Kiambu, Thika,
              Ruiru, Westlands, Kilimani, Kahawa and nearby areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Sofa Cleaning?
            </h2>

            <p className="mt-4 text-slate-300">
              Send photos of your sofa on WhatsApp for quick pricing.
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