import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import SectionHeader from "@/components/SectionHeader";
import PricingTable from "@/components/PricingTable";

export const metadata: Metadata = {
  title: "School Cleaning Services Kenya | Glanz Facility Services",
  description:
    "Professional school cleaning services for classrooms, dormitories, and institutions in Nairobi and surrounding regions.",
};

export default function SchoolCleaningPage() {
  const pricingRows = [
    {
      item: "Classroom cleaning",
      pricing: "KES 40 per sqm",
      details: "Floor, desks, and surface cleaning.",
    },
    {
      item: "School compound cleaning",
      pricing: "Custom quotation",
      details: "Based on size and number of blocks.",
    },
    {
      item: "Dormitory cleaning",
      pricing: "KES 50 per sqm",
      details: "Deep cleaning for student housing.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="School Cleaning"
            title="Professional School Cleaning Services"
            description="We provide safe, structured cleaning for schools, colleges, and learning institutions."
          />

          <div className="mt-10 text-slate-600 space-y-4">
            <p>
              We maintain hygiene in educational environments through structured cleaning systems.
            </p>
            <p>
              Our services include classrooms, toilets, dormitories, and compound cleaning.
            </p>
          </div>
        </section>

        <PricingTable
          title="School Cleaning Pricing"
          note="Pricing depends on size, number of buildings, and frequency."
          rows={pricingRows}
        />

        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Book School Cleaning</h2>
            <p className="mt-3 text-slate-300">
              Contact us for institutional cleaning contracts.
            </p>
            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold"
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