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
    "cabro cleaning Nairobi, driveway cleaning Kenya, cabro restoration Nairobi, compound cleaning Kenya, paving block cleaning Nairobi, best cabro cleaning Nairobi, professional cabro cleaning company Nairobi",
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
            description="We clean and restore dirty cabro surfaces for compounds, driveways, parking areas, and commercial spaces using professional equipment and eco-friendly methods."
          />

          {/* IMAGE GRID */}
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
                Clients often search for <strong>best cabro cleaning Nairobi</strong> and
                <strong> professional cabro cleaning company</strong> — and that is exactly what we deliver.
              </p>

              <p>
                Our service removes red soil stains, algae, oil marks, cement
                residue, and deep dirt buildup. Many customers looking for
                <strong> affordable cleaning services Nairobi</strong> and
                <strong> reliable cleaning company Kenya</strong> choose us for consistent results.
              </p>

              <p>
                Ideal for homes, apartments, estates, parking lots, and
                commercial properties. We are trusted for both residential and
                <strong> commercial cleaning contractors Kenya</strong> work.
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

        {/* SEO KEYWORDS SECTION (IMPORTANT FOR GOOGLE) */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">
              People Search For Cabro Cleaning Services Like This
            </h2>

            <p className="text-slate-600 mb-6">
              Our clients find us using different search terms such as:
            </p>

            <div className="grid md:grid-cols-2 gap-3 text-slate-700">
              <p>• best cleaning services in Nairobi</p>
              <p>• best cabro cleaning company near me</p>
              <p>• professional cabro cleaning Nairobi</p>
              <p>• affordable cabro cleaning Kenya</p>
              <p>• cleaning services near me</p>
              <p>• top cleaning company in Nairobi</p>
              <p>• reliable cleaning company Kenya</p>
              <p>• how to clean cabro stains</p>
              <p>• remove oil stains from cabro</p>
              <p>• post construction cleaning Nairobi</p>
              <p>• cleaning contractors Kenya</p>
              <p>• janitorial services Nairobi</p>
            </div>
          </div>
        </section>

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