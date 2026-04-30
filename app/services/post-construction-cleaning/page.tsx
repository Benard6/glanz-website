import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title:
    "Post Construction Cleaning in Nairobi | Deep Cleaning & Handover Services Kenya",
  description:
    "Professional post-construction cleaning in Nairobi, Kiambu & Thika. We remove dust, paint marks, cement residue, stickers and prepare properties for occupation.",
  keywords:
    "post construction cleaning Nairobi, after renovation cleaning Kenya, building cleaning Nairobi, construction cleanup Kenya, handover cleaning Nairobi",
};

export default function PostConstructionCleaningPage() {
  const pricingRows = [
    {
      item: "Bedsitter / studio",
      pricing: "From KES 7,500",
      details:
        "Final price depends on dust level, paint marks, stickers, and windows.",
    },
    {
      item: "1 bedroom apartment",
      pricing: "From KES 8,500",
      details: "Standard post-construction cleanup for small units.",
    },
    {
      item: "2 bedroom apartment",
      pricing: "Call For Assesment",
      details:
        "Depends on dust level, finishing condition, and detailing required.",
    },
    {
      item: "3 bedroom house",
      pricing: "Call For Assesment",
      details:
        "Full deep cleaning for newly built or renovated homes.",
    },
    {
      item: "Commercial projects",
      pricing: "Call for assessment",
      details:
        "Offices, schools, shops, and large buildings require site evaluation.",
    },
  ];

  const images = [
    "/images/hero/post-construction-cleaning/1.jpg",
    "/images/hero/post-construction-cleaning/2.jpg",
    "/images/hero/post-construction-cleaning/3.jpg",
    "/images/hero/post-construction-cleaning/7.jpg",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Post Construction Cleaning"
            title="Professional Post-Construction Cleaning in Nairobi"
            description="We clean newly built and renovated buildings, removing dust, paint, cement residue and preparing spaces for occupation."
          />

          {/* IMAGE SEO GRID */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-52 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Post construction cleaning Nairobi project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-16">
          <div className="grid gap-10 lg:grid-cols-2 text-lg text-slate-600">
            <div className="space-y-5">
              <p>
                Post-construction cleaning requires deep detailing beyond normal cleaning.
                We remove dust, cement residue, paint marks, adhesives and debris.
              </p>
              <p>
                Our team ensures your property is fully ready for handover or occupation.
              </p>
              <p>
                We serve homes, apartments, offices, schools and commercial buildings.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 border">
              <h3 className="text-xl font-semibold">What we clean</h3>
              <ul className="mt-4 space-y-2">
                <li>✔ Dust from all surfaces</li>
                <li>✔ Paint & cement stains</li>
                <li>✔ Windows & glass panels</li>
                <li>✔ Floors & tiles deep cleaning</li>
                <li>✔ Bathrooms & kitchens</li>
                <li>✔ Final detailing before handover</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Post Construction Cleaning Pricing Guide"
          note="Final price depends on size, dust level, and finishing condition."
          rows={pricingRows}
        />

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold">
              Need Post Construction Cleaning?
            </h2>

            <p className="mt-4 text-slate-300">
              Send photos and location on WhatsApp for a fast quote.
            </p>

            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 text-slate-900 font-semibold"
            >
              Get Quote on WhatsApp
            </a>
          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}