import type { Metadata } from "next";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

/* ================= SEO SCHEMA ================= */
function VehicleCleaningSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Vehicle Interior Cleaning Nairobi",
          provider: {
            "@type": "LocalBusiness",
            name: "Glanz Facility Services Limited",
            url: "https://www.glanzkenya.co.ke",
            telephone: "+254759993502",
          },
          areaServed: ["Nairobi", "Kiambu", "Thika", "Ruiru"],
          description:
            "Professional car interior cleaning in Nairobi, Kiambu and Thika including seats, carpets, dashboards and deep stain removal.",
          serviceType: "Car Interior Cleaning"
        }),
      }}
    />
  );
}

/* ================= METADATA ================= */
export const metadata: Metadata = {
  title:
    "Car Interior Cleaning Nairobi, Kiambu & Thika | Vehicle Detailing Kenya",
  description:
    "Professional car interior cleaning in Nairobi, Kiambu and Thika. We clean seats, carpets, dashboards and remove stains, odor and dirt from vehicles.",
  keywords: [
    "car interior cleaning Nairobi",
    "vehicle detailing Kenya",
    "car seat cleaning Nairobi",
    "car upholstery cleaning Kiambu",
    "deep car cleaning Thika",
  ],
};

export default function VehicleCleaningPage() {
  const media = [
    { src: "/images/hero/vehicle-interior-cleaning/1.jpg" },
    { src: "/images/hero/vehicle-interior-cleaning/v1.jpg" },
    { src: "/images/hero/vehicle-interior-cleaning/v2.jpg" },
  ];

  const pricingRows = [
    {
      item: "Basic interior cleaning",
      pricing: "KES 4,500 – 8,000",
      details: "Vacuuming, dashboard cleaning and light stain removal.",
    },
    {
      item: "Deep interior detailing",
      pricing: "KES 6,500 – 13,500",
      details: "Seats, carpets, roof lining and full deep cleaning.",
    },
    {
      item: "Stain & odor removal",
      pricing: "Add-on service",
      details: "Removes strong odors, spills and stubborn stains.",
    },
  ];

  return (
    <>
      {/* ✅ SEO SCHEMA */}
      <VehicleCleaningSchema />

      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Vehicle Interior Cleaning Kenya"
            title="Professional Car Interior Cleaning in Nairobi, Kiambu & Thika"
            description="Deep interior cleaning for cars, SUVs, vans and fleet vehicles."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((item, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-slate-100"
              >
                <Image
                  src={item.src}
                  alt={`Car interior cleaning ${index + 1}`}
                  fill
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
                Professional Vehicle Interior Cleaning in Kenya
              </h2>

              <p>
                Vehicle interiors collect dust, stains and odors over time.
              </p>

              <p>
                We provide deep cleaning across Nairobi, Kiambu and Thika.
              </p>

              <p>
                We clean seats, carpets, dashboards and hidden dirt areas.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we clean</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Seats & upholstery</li>
                <li>Floor carpets</li>
                <li>Dashboard</li>
                <li>Roof lining</li>
                <li>Boot area</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Car Interior Cleaning Pricing in Kenya"
          note="Pricing depends on vehicle size and condition."
          rows={pricingRows}
        />

        {/* LOCAL SEO */}
        <section className="bg-slate-50 py-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Areas We Serve</h2>

            <p className="mt-4 text-slate-600">
              Nairobi, Kiambu, Thika, Ruiru, Westlands, Kilimani, Kahawa and more.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Car Interior Cleaning?
            </h2>

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