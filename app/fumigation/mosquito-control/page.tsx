import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title: "Mosquito Control Services in Nairobi | Glanz Facility Services",
  description:
    "Professional mosquito control services in Nairobi for homes, compounds, offices, and facilities. Assessment-based treatment available.",
};

export default function MosquitoControlPage() {
  const pricingRows = [
    {
      item: "Small house / indoor treatment",
      pricing: "From KES 3,000",
      details: "Suitable for smaller indoor mosquito control treatment.",
    },
    {
      item: "1–2 bedroom house",
      pricing: "From KES 4,500",
      details: "Rate depends on room count and treatment coverage.",
    },
    {
      item: "Larger home / compound treatment",
      pricing: "Call for assessment",
      details: "Quoted based on indoor and outdoor scope.",
    },
    {
      item: "Office / institution / facility",
      pricing: "Custom quote",
      details: "Best priced after understanding size and treatment needs.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Mosquito Control"
            title="Professional Mosquito Control Services in Nairobi"
            description="Mosquito treatment for homes, compounds, offices, and other spaces where pest control support is needed."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Mosquitoes affect comfort in homes, compounds, offices, and
                other living or working spaces.
              </p>
              <p>
                Glanz Facility Services Limited provides mosquito control
                services for indoor and outdoor treatment depending on the
                property and the scope required.
              </p>
              <p>
                This service is suitable for homes, managed compounds, and
                facilities that need better pest control support.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Suitable for</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Homes and apartments</li>
                <li>Indoor treatment areas</li>
                <li>Compounds and outdoor areas</li>
                <li>Offices and facilities</li>
                <li>Assessment-based mosquito control</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Mosquito Control Pricing Guide"
          note="Final pricing depends on indoor or outdoor scope, property size, and treatment requirements."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send your location and treatment area details on WhatsApp for a quicker quote.
              </p>
              <a
                href="https://wa.me/254759993502"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900"
              >
                Request Assessment
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