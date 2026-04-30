import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title:
    "Terrazzo Cleaning & Floor Restoration Nairobi, Kiambu, Thika | Kenya",
  description:
    "Professional terrazzo cleaning, polishing and floor restoration services in Nairobi, Kiambu, Thika and across Kenya. We remove stains, restore shine and deliver deep floor cleaning for homes, offices and commercial buildings.",
  keywords: [
    "terrazzo cleaning Nairobi",
    "floor polishing Kenya",
    "floor restoration Nairobi",
    "terrazzo cleaning Kiambu",
    "terrazzo cleaning Thika",
    "stone floor cleaning Kenya",
    "commercial floor cleaning Nairobi",
  ],
};

export default function TerrazzoCleaningPage() {
  const media = [
    { type: "image", src: "/images/hero/terrazzo-cleaning/1.jpg" },
    { type: "image", src: "/images/hero/terrazzo-cleaning/2.jpg" },
  

    { type: "image", src: "/images/hero/terrazzo-cleaning/4.jpg" },
    { type: "image", src: "/images/hero/terrazzo-cleaning/5.jpg" },
  ];

  const pricingRows = [
    {
      item: "Basic terrazzo cleaning",
      pricing: "KES 90 per sqm",
      details:
        "Standard cleaning for dust, dirt and surface stains on terrazzo floors.",
    },
    {
      item: "Heavy stain removal",
      pricing: "KES 100–120 per sqm",
      details:
        "For deep stains, oil marks, cement residue and long-term dirt buildup.",
    },
    {
      item: "Grinding & polishing restoration",
      pricing: "Site inspection required",
      details:
        "Full restoration for worn, dull or damaged terrazzo floors with machine polishing.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO / INTRO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Terrazzo Cleaning Services Kenya"
            title="Professional Terrazzo Floor Cleaning & Restoration in Nairobi, Kiambu & Thika"
            description="We provide expert terrazzo cleaning, polishing and restoration for residential, commercial and institutional floors across Kenya."
          />

          {/* MEDIA GRID */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((item, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-black"
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={`Terrazzo cleaning Nairobi Kenya ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                ) : (
                  <video
                    src={item.src}
                    controls
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CONTENT SECTION */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
          <div className="grid gap-10 lg:grid-cols-2">

            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <h2 className="text-2xl font-bold text-slate-900">
                Terrazzo Floor Cleaning Experts in Kenya
              </h2>

              <p>
                Glanz Facility Services provides professional terrazzo cleaning
                and floor restoration services in Nairobi, Kiambu, Thika and
                surrounding areas.
              </p>

              <p>
                We remove deep stains, dirt buildup, scratches and dullness,
                restoring your terrazzo floors to a clean and polished finish.
              </p>

              <p>
                Our services are ideal for homes, apartments, offices, schools,
                hospitals and commercial buildings.
              </p>

              <p>
                We use professional machines and safe cleaning solutions to
                ensure long-lasting shine and protection.
              </p>
            </div>

            {/* SERVICES LIST */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we offer</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Deep terrazzo floor cleaning</li>
                <li>Stain and grease removal</li>
                <li>Grinding and polishing</li>
                <li>Surface restoration</li>
                <li>Gloss finishing and protection</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Terrazzo Cleaning Pricing in Kenya"
          note="Final pricing depends on floor condition, size and level of restoration required."
          rows={pricingRows}
        />

        {/* LOCAL SEO SECTION */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve in Kenya
            </h2>

            <p className="mt-4 text-slate-600">
              We provide terrazzo cleaning services across Nairobi, Kiambu,
              Thika, Ruiru, Westlands, Kilimani, Industrial Area and surrounding regions.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">
              Need Terrazzo Cleaning in Nairobi or Nearby Areas?
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Contact us on WhatsApp for instant quotation or site inspection.
              We respond quickly across all Nairobi and Kiambu regions.
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