import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";
import Image from "next/image";

<section className="mx-auto max-w-7xl px-6 py-10">
  <div className="relative h-[420px] w-full overflow-hidden rounded-2xl">

    <Image
      src="/images/services/carpet/hero.jpg"
      alt="Professional Cleaning Service"
      fill
      className="object-cover"
      priority
    />

    <div className="absolute inset-0 bg-black/40 flex items-end p-6">
      <h1 className="text-white text-3xl font-bold">
        Professional Cleaning Services in Nairobi
      </h1>
    </div>

  </div>
</section>
export const metadata: Metadata = {
  title: "Carpet Cleaning Services in Nairobi | Glanz Facility Services",
  description:
    "Professional carpet cleaning in Nairobi for homes, offices, and apartments. Remove stains, dust, and odor with deep cleaning support.",
};

export default function CarpetCleaningPage() {
  const pricingRows = [
    {
      item: "Small carpet",
      pricing: "From KES 2,000",
      details: "Suitable for standard deep carpet cleaning.",
    },
    {
      item: "Medium carpet",
      pricing: "From KES 3,000",
      details: "Rate depends on size, material, and stain level.",
    },
    {
      item: "Large carpet",
      pricing: "From KES 4,500",
      details: "Best for larger living room or office carpets.",
    },
    {
      item: "Wall-to-wall carpet / office carpet",
      pricing: "Call for assessment",
      details: "Quoted after measurement and scope review.",
    },
    {
      item: "Heavy stain / multiple carpets",
      pricing: "Call for assessment",
      details: "Best priced after photos or site review.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Carpet Cleaning"
            title="Professional Carpet Cleaning Services in Nairobi"
            description="Deep carpet cleaning for homes, apartments, offices, and commercial spaces."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Carpet cleaning helps remove dust, stains, trapped dirt, and
                odor that affect the appearance and comfort of a space.
              </p>
              <p>
                Glanz Facility Services Limited provides deep carpet cleaning
                for homes, offices, apartments, and business premises.
              </p>
              <p>
                We help restore freshness and improve the look of carpets used
                in living rooms, bedrooms, offices, and reception areas.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Service covers</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Deep carpet cleaning</li>
                <li>Dust and dirt removal</li>
                <li>Stain treatment</li>
                <li>Odor reduction</li>
                <li>Home and office carpets</li>
                <li>Single and multiple carpet cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Carpet Cleaning Pricing Guide"
          note="Final pricing depends on carpet size, stain level, thickness, and the number of items."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send carpet size and photos on WhatsApp for a quicker estimate.
              </p>
              <a
                href="https://wa.me/254759993502"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900"
              >
                Request Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <WhatsappFloat />
      <Footer />
    </>
  );
}