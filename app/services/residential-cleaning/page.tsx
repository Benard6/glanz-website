import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export const metadata: Metadata = {
  title: "Residential Cleaning Services in Nairobi | Glanz Facility Services",
  description:
    "Professional residential cleaning services in Nairobi for homes, apartments, and estates. Deep cleaning, routine cleaning, and move-in cleaning available.",
};

export default function ResidentialCleaningPage() {
  const pricingRows = [
    {
      item: "Bedsitter / studio cleaning",
      pricing: "From KES 6,500",
      details:
        "Suitable for standard home cleaning. Final price depends on condition and scope.",
    },
    {
      item: "1 bedroom apartment",
      pricing: "From KES 7,500",
      details:
        "Includes general room cleaning, kitchen, bathroom, and floor care.",
    },
    {
      item: "2 bedroom apartment",
      pricing: "From KES 10,500",
      details:
        "Rate may vary depending on size, dust level, and detailing required.",
    },
    {
      item: "3 bedroom house / apartment",
      pricing: "From KES 16,500",
      details:
        "Suitable for full residential cleaning with more detailed work.",
    },
    {
      item: "Maisonette / larger homes",
      pricing: "Call for assessment",
      details:
        "Best quoted after reviewing room count, condition, and cleaning scope.",
    },
    {
      item: "Routine / weekly / monthly cleaning",
      pricing: "Custom quote",
      details:
        "Pricing depends on frequency, size, and level of cleaning support needed.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Residential Cleaning"
            title="Professional Residential Cleaning Services in Nairobi"
            description="Reliable home cleaning services for apartments, houses, estates, and residential spaces."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Residential cleaning helps maintain a clean, comfortable, and
                healthy living environment for you and your household.
              </p>

              <p>
                Glanz Facility Services Limited provides professional home
                cleaning services for occupied homes, vacant homes, apartments,
                and residential spaces that need proper attention to detail.
              </p>

              <p>
                Whether you need a one-time deep clean or regular cleaning
                support, we help keep your home neat and well maintained.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Service covers</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>General house cleaning</li>
                <li>Kitchen and bathroom cleaning</li>
                <li>Dusting and wiping surfaces</li>
                <li>Floor cleaning and detailing</li>
                <li>Occupied and vacant home cleaning</li>
                <li>Deep cleaning and routine cleaning</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Residential Cleaning Pricing Guide"
          note="Final pricing depends on house size, condition, cleaning scope, and whether the service is one-time or recurring."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send your location, house size, and photos on WhatsApp for a
                quicker estimate, or book a site visit for a more accurate quote.
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