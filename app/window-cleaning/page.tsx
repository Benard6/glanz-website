import type { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title:
    "Window Cleaning Services Nairobi, Kiambu & Thika | High-Rise Glass Cleaning Kenya",
  description:
    "Professional window and glass cleaning in Nairobi, Kiambu and Thika. We clean residential, office and high-rise windows with safe, streak-free results.",
  keywords: [
    "window cleaning Nairobi",
    "high rise window cleaning Kenya",
    "glass cleaning Nairobi",
    "office window cleaning Kiambu",
    "apartment window cleaning Thika",
  ],
};

export default function WindowCleaningPage() {
  const media = [
    "/images/hero/window-cleaning/1.jpg",
    "/images/hero/window-cleaning/2.jpg",
    "/images/hero/window-cleaning/3.jpg",
    "/images/hero/window-cleaning/4.jpg",
  ];

  const pricingRows = [
    {
      item: "Standard window cleaning",
      pricing: "KES 100 per sqm",
      details: "Interior and exterior glass cleaning with streak-free finish.",
    },
    {
      item: "High-rise window cleaning",
      pricing: "Assessment required",
      details: "Rope access or scaffold cleaning for tall buildings.",
    },
    {
      item: "Office glass panels",
      pricing: "Custom quote",
      details: "Depends on size, height and accessibility.",
    },
  ];

  return (
    <>

      {/* ================= SEO SCHEMA PACK ================= */}

      {/* SERVICE SCHEMA */}
      <Script
        id="service-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Window Cleaning",
            name: "Professional Window Cleaning in Nairobi",
            provider: {
              "@type": "LocalBusiness",
              name: "Glanz Facility Services Limited",
              url: "https://www.glanzkenya.co.ke",
            },
            areaServed: ["Nairobi", "Kiambu", "Thika"],
            description:
              "Professional window and glass cleaning services for homes, offices and high-rise buildings in Kenya.",
          }),
        }}
      />

      {/* FAQ SCHEMA */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does window cleaning cost in Nairobi?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Window cleaning in Nairobi starts from around KES 100 per square meter depending on size and access.",
                },
              },
              {
                "@type": "Question",
                name: "Do you clean high-rise buildings?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "Yes, we provide professional high-rise window cleaning using rope access and safety equipment.",
                },
              },
              {
                "@type": "Question",
                name: "Which areas do you serve?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text:
                    "We serve Nairobi, Kiambu, Thika and surrounding areas.",
                },
              },
            ],
          }),
        }}
      />

      {/* ================= PAGE ================= */}

      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Window Cleaning Services Kenya"
            title="Professional Window Cleaning in Nairobi, Kiambu & Thika"
            description="Crystal-clear window cleaning for homes, offices and high-rise buildings."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {media.map((src, index) => (
              <div
                key={index}
                className="relative h-64 w-full overflow-hidden rounded-2xl border bg-slate-100"
              >
                <Image
                  src={src}
                  alt={`Window cleaning Kenya ${index + 1}`}
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
                Professional Window Cleaning Services in Kenya
              </h2>

              <p>
                We provide streak-free window cleaning for residential and
                commercial properties.
              </p>

              <p>
                Our team handles both interior and exterior glass cleaning.
              </p>

              <p>
                Suitable for homes, offices, apartments, and high-rise buildings.
              </p>
            </div>

            <div className="rounded-2xl border bg-slate-50 p-8">
              <h3 className="text-xl font-bold">What we clean</h3>

              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Residential windows</li>
                <li>Office glass panels</li>
                <li>High-rise exterior glass</li>
                <li>Balcony glass</li>
                <li>Frames and edges</li>
              </ul>
            </div>

          </div>
        </section>

        {/* PRICING */}
        <PricingTable
          title="Window Cleaning Pricing in Kenya"
          note="Pricing depends on height, access difficulty, and total surface area."
          rows={pricingRows}
        />

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16 text-center">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Need Window Cleaning?
            </h2>

            <p className="mt-4 text-slate-300">
              Send photos on WhatsApp for instant pricing.
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