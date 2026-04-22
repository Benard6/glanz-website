import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title: "Curtain Cleaning Services in Nairobi | Glanz Facility Services",
  description:
    "Professional curtain cleaning in Nairobi for homes, apartments, and offices. Refresh your curtains and reduce dust buildup.",
};

export default function CurtainCleaningPage() {
  const pricingRows = [
    {
      item: "Standard curtain set",
      pricing: "Call for assessment",
      details: "Price depends on size, fabric type, and number of panels.",
    },
    {
      item: "Sheer curtain set",
      pricing: "Call for assessment",
      details: "Quoted based on fabric and handling needs.",
    },
    {
      item: "Heavy curtains / lined curtains",
      pricing: "Call for assessment",
      details: "Depends on material, quantity, and cleaning approach required.",
    },
    {
      item: "Office / multiple window curtains",
      pricing: "Custom quote",
      details: "Best priced after review of quantity and access.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Curtain Cleaning"
            title="Professional Curtain Cleaning Services in Nairobi"
            description="Curtain cleaning support for homes, apartments, offices, and other interior spaces."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Curtains collect dust over time and affect the freshness and
                appearance of a room.
              </p>
              <p>
                Glanz Facility Services Limited provides curtain cleaning
                support for residential and commercial spaces where proper
                fabric care and cleanliness matter.
              </p>
              <p>
                This service is ideal for living rooms, bedrooms, offices, and
                spaces with multiple windows.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Suitable for</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Homes and apartments</li>
                <li>Office curtains</li>
                <li>Sheer and standard curtains</li>
                <li>Multiple window setups</li>
                <li>Routine refresh cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Curtain Cleaning Pricing Guide"
          note="Curtain cleaning is best priced after reviewing quantity, fabric type, size, and handling requirements."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send the number of windows, curtain type, and photos on WhatsApp.
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