import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title:
    "Cabro Cleaning Services in Nairobi | Driveway & Compound Restoration Kenya",
  description:
    "Professional cabro cleaning in Nairobi, Kiambu & Thika. We remove red soil stains, black marks, algae, cement residue and restore paving to a clean finish.",
  keywords:
    "cabro cleaning Nairobi, driveway cleaning Kenya, cabro restoration Nairobi, compound cleaning Kenya, paving block cleaning Nairobi",
};

export default function CabroCleaningPage() {
  const pricingRows = [
    {
      item: "Basic cabro cleaning",
      pricing: "From KES 70 per sqm",
      details: "Suitable for normal dirt, dust, and general surface cleaning.",
    },
    {
      item: "Red soil / stubborn stain removal",
      pricing: "From KES 80–95 per sqm",
      details:
        "Depends on severity of stains, chemical use, and labor required.",
    },
    {
      item: "Cabro repainting",
      pricing: "Call for assessment",
      details:
        "Depends on surface condition, color choice, and materials used.",
    },
    {
      item: "Cabro sealing / protection",
      pricing: "Call for assessment",
      details:
        "Clear protective coating to prevent future staining and fading.",
    },
    {
      item: "Large compounds / estates",
      pricing: "Custom quote",
      details: "Best priced after site assessment and measurement.",
    },
  ];

  const images = [
    "/images/hero/cabro-cleaning/1.jpg",
    "/images/hero/cabro-cleaning/2.jpg",
    "/images/hero/cabro-cleaning/4.jpg",
    "/images/hero/cabro-cleaning/6.jpg",
    "/images/hero/cabro-cleaning/7.jpg",
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Cabro Cleaning"
            title="Professional Cabro Cleaning & Restoration in Nairobi"
            description="We clean and restore dirty cabro surfaces for compounds, driveways, parking areas, and commercial spaces."
          />

          {/* IMAGE GRID (SEO BOOST SECTION) */}
          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative h-52 w-full overflow-hidden rounded-2xl"
              >
                <Image
                  src={src}
                  alt={`Cabro cleaning Nairobi project ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
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
                We provide professional cabro cleaning services in Nairobi and
                surrounding areas, restoring dirty and stained paving blocks.
              </p>
              <p>
                Our service removes red soil stains, algae, oil marks, cement
                residue, and deep dirt buildup.
              </p>
              <p>
                Ideal for homes, apartments, estates, parking lots, and
                commercial properties.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 border">
              <h3 className="text-xl font-semibold">We handle</h3>
              <ul className="mt-4 space-y-2">
                <li>✔ Cabro deep cleaning</li>
                <li>✔ Red soil removal</li>
                <li>✔ Algae & black stains</li>
                <li>✔ Oil & grease cleaning</li>
                <li>✔ Cabro sealing</li>
                <li>✔ Repainting options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Cabro Cleaning Pricing Guide"
          note="Final price depends on condition, stain type, and area size."
          rows={pricingRows}
        />

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold">
              Need Cabro Cleaning Services?
            </h2>

            <p className="mt-4 text-slate-300">
              Send photos and location on WhatsApp for fast quotation.
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