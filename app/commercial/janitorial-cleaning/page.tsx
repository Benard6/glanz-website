import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title: "Janitorial Cleaning Services Nairobi | Glanz Facility Services",
  description:
    "Professional janitorial cleaning services for offices, schools, and commercial buildings in Nairobi, Kiambu, Thika, and surrounding areas.",
};

export default function JanitorialPage() {
  const pricingRows = [
    {
      item: "Office janitorial cleaning",
      pricing: "KES 60 – 120 per sqm",
      details: "Daily or scheduled cleaning for offices and commercial spaces.",
    },
    {
      item: "Monthly cleaning contracts",
      pricing: "Custom quotation",
      details: "Depends on frequency, staff allocation, and scope of work.",
    },
    {
      item: "Washroom maintenance",
      pricing: "From KES 3,000 per month",
      details: "Includes sanitation, restocking, and hygiene management.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeader
            eyebrow="Janitorial Services"
            title="Professional Janitorial Cleaning in Nairobi"
            description="Reliable cleaning services for offices, schools, institutions, and commercial buildings."
          />

          <div className="mt-10 grid lg:grid-cols-2 gap-10 text-slate-600 text-lg">
            <div className="space-y-4">
              <p>
                We provide structured janitorial services for businesses that require
                daily or scheduled cleaning operations.
              </p>
              <p>
                Our teams ensure consistent cleanliness, hygiene, and professional
                maintenance of your workspace.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-8 border">
              <h3 className="text-xl font-semibold">Service Includes</h3>
              <ul className="mt-4 space-y-2">
                <li>Office cleaning</li>
                <li>Floor maintenance</li>
                <li>Washroom sanitation</li>
                <li>Trash management</li>
                <li>Common area cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Janitorial Pricing Guide"
          note="Pricing depends on contract size, frequency, and site requirements."
          rows={pricingRows}
        />

        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-slate-900 text-white p-10 rounded-2xl">
              <h2 className="text-2xl font-bold">
                Need a janitorial contract?
              </h2>
              <p className="mt-3 text-slate-300">
                Send your location and cleaning requirements for a tailored quotation.
              </p>
              <a
                href="https://wa.me/254759993502"
                className="mt-6 inline-block bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold"
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