import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title:
    "Bedbug Fumigation Services Nairobi, Kiambu & Thika | Pest Control Kenya",
  description:
    "Professional bedbug fumigation services in Nairobi, Kiambu, Thika and across Kenya. We eliminate bedbugs in homes, apartments, hostels and rentals using effective pest control methods.",
  keywords: [
    "bedbug fumigation Nairobi",
    "bedbug control Kenya",
    "pest control Nairobi",
    "bedbug removal Kiambu",
    "fumigation services Thika",
    "bedbug treatment Kenya",
  ],
};

export default function BedbugControlPage() {
  const media = [
    { type: "image", src: "/images/hero/Fumigation/2.jpg" },
    { type: "image", src: "/images/hero/Fumigation/6.jpg" },
    { type: "image", src: "/images/hero/Fumigation/8.jpg" },
  ];

  const pricingRows = [
    {
      item: "Single room / bedsitter",
      pricing: "From KES 3,500",
      details: "Suitable for smaller spaces with light or moderate infestation.",
    },
    {
      item: "1 bedroom house",
      pricing: "From KES 5,000",
      details: "Depends on infestation spread and treatment coverage.",
    },
    {
      item: "2 bedroom house",
      pricing: "From KES 6,500",
      details: "Standard treatment for residential spaces.",
    },
    {
      item: "3 bedroom house and above",
      pricing: "Assessment required",
      details: "Quoted after evaluating infestation severity.",
    },
    {
      item: "Hostels / rentals / multiple rooms",
      pricing: "Custom quote",
      details: "Best for multi-room and commercial fumigation.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Bedbug Fumigation Services Kenya"
            title="Professional Bedbug Fumigation in Nairobi, Kiambu & Thika"
            description="Effective bedbug control solutions for homes, apartments, hostels and rental properties."
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
                  alt={`Bedbug fumigation Nairobi Kenya ${index + 1}`}
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
                Reliable Bedbug Control Services in Kenya
              </h2>

              <p>
                Bedbugs spread quickly in sleeping areas and are difficult to
                eliminate without professional treatment.
              </p>

              <p>
                Glanz Facility Services provides effective bedbug fumigation
                services across Nairobi, Kiambu, Thika and surrounding areas.
              </p>

              <p>
                Our treatment targets hidden infestation areas, helping restore
                comfort and hygiene in homes and accommodation spaces.
              </p>

              <p>
                We use safe, effective pest control methods suitable for
                residential and commercial environments.
              </p>
            </div>

            {/* SUITABLE FOR */}
            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">Suitable for</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Bedrooms and sleeping areas</li>
                <li>Homes and apartments</li>
                <li>Hostels and rentals</li>
                <li>Guest rooms and Airbnbs</li>
                <li>Multi-room properties</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Bedbug Fumigation Pricing in Kenya"
          note="Final pricing depends on infestation level, room count and treatment coverage."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">
              Areas We Serve
            </h2>

            <p className="mt-4 text-slate-600">
              We offer bedbug fumigation services in Nairobi, Kiambu, Thika,
              Ruiru, Westlands, Kilimani and surrounding areas.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Bedbug Fumigation Services?
            </h2>

            <p className="mt-4 text-slate-300">
              Send room details and photos via WhatsApp for fast assessment and quotation.
            </p>

            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900"
            >
              Request Assessment
            </a>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}