import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";
import SeoLinks from "../../../components/SeoLinks";

export const metadata: Metadata = {
  title:
    "Sofa Cleaning Services Nairobi, Kiambu & Thika | Upholstery Cleaning Kenya",
  description:
    "Professional sofa cleaning in Nairobi, Kiambu and Thika. Deep upholstery cleaning for homes, offices and commercial spaces.",
  keywords: [
    "sofa cleaning Nairobi",
    "couch cleaning Kenya",
    "upholstery cleaning Kiambu",
    "sofa cleaning Thika",
  ],
};

export default function SofaCleaningPage() {
  const media = [
    "/images/hero/sofa-cleaning/11.jpg",
    "/images/hero/sofa-cleaning/12.jpg",
    "/images/hero/sofa-cleaning/13.jpg",
  ];

  const pricingRows = [
    {
      item: "5 seater sofa",
      pricing: "From KES 3,500",
      details: "Depends on fabric and stain level",
    },
    {
      item: "6 seater sofa",
      pricing: "From KES 4,000",
      details: "Deep cleaning included",
    },
    {
      item: "7 seater sofa",
      pricing: "From KES 4,500",
      details: "Heavy duty cleaning",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <SectionHeader
            eyebrow="Sofa Cleaning Kenya"
            title="Professional Sofa Cleaning in Nairobi & Kiambu"
            description="We remove stains, odor and deep dirt from all sofa types."
          />

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {media.map((src, i) => (
              <div key={i} className="relative h-64 w-full rounded-xl overflow-hidden">
                <Image
                  src={src}
                  alt="Sofa cleaning"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
          <div className="text-slate-600 space-y-4">
            <h2 className="text-2xl font-bold text-black">
              Deep Sofa Cleaning Services
            </h2>
            <p>
              We clean all sofa types including fabric, leather and office seating.
            </p>
            <p>
              Our process removes dust, stains and bacteria using professional equipment.
            </p>
          </div>

          <div className="bg-slate-50 p-6 rounded-xl">
            <h3 className="font-bold text-lg">What We Do</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li>Deep cleaning extraction</li>
              <li>Stain removal</li>
              <li>Odor elimination</li>
              <li>Fabric care treatment</li>
            </ul>
          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Pricing"
          note="Prices vary based on condition"
          rows={pricingRows}
        />

        {/* SEO LINKS */}
        <section className="bg-slate-50 py-14">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-2xl font-bold">Service Areas</h2>
            <p className="text-slate-600 mt-2">
              We serve Nairobi, Kiambu, Ruiru, Thika and surrounding areas.
            </p>

            {/* ✅ FIXED */}
            <SeoLinks current="sofa-cleaning" type="service" />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white text-center py-16">
          <h2 className="text-3xl font-bold">Need Sofa Cleaning?</h2>
          <p className="mt-3 text-gray-300">
            Book via WhatsApp for fast service
          </p>

          <a
            href="https://wa.me/254759993502"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Get Quote
          </a>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}