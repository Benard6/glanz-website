import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";

import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export default function CockroachControlPage() {
  const pricingRows = [
    {
      item: "Bedsitter / small room",
      pricing: "From KES 2,500",
      details:
        "Suitable for light cockroach control treatment in small residential spaces.",
    },
    {
      item: "1 bedroom house",
      pricing: "From KES 3,500",
      details:
        "Rate depends on infestation level, kitchen condition, and treatment scope.",
    },
    {
      item: "2 bedroom house",
      pricing: "From KES 4,500",
      details:
        "Suitable for standard residential cockroach treatment and pest control.",
    },
    {
      item: "3 bedroom house and above",
      pricing: "Call for assessment",
      details:
        "Depends on room count, infestation severity, and areas requiring treatment.",
    },
    {
      item: "Apartments / blocks / shared compounds",
      pricing: "Call for assessment",
      details:
        "Quoted based on number of units, common areas, and extent of infestation.",
    },
    {
      item: "Restaurants / kitchens / offices / commercial spaces",
      pricing: "Custom quote",
      details:
        "Commercial pest control is best quoted after assessment of operations and treatment needs.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Cockroach Control"
            title="Professional Cockroach Fumigation Services in Nairobi"
            description="Effective cockroach control for homes, apartments, restaurants, kitchens, offices, and commercial spaces."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Cockroaches spread quickly and can be difficult to eliminate
                without proper treatment. A small problem can become a bigger
                infestation when not handled early.
              </p>

              <p>
                Glanz Facility Services Limited provides targeted cockroach
                control and fumigation services to help clients manage
                infestation and restore hygiene in their homes and workplaces.
              </p>

              <p>
                Our treatment is suitable for residential and commercial
                environments where cleanliness, safety, and consistent pest
                control matter.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Suitable for</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Homes and apartments</li>
                <li>Restaurants and kitchens</li>
                <li>Offices and staff areas</li>
                <li>Shops and commercial spaces</li>
                <li>Rental units and managed properties</li>
                <li>Routine pest control support</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Cockroach Fumigation Pricing Guide"
          note="Final rate depends on room size, infestation level, treatment scope, and whether the property is residential or commercial."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Why fast treatment matters
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Protect hygiene</h3>
                <p className="mt-3 text-slate-600">
                  Cockroaches affect cleanliness and create health concerns in
                  living and working spaces.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Avoid spread</h3>
                <p className="mt-3 text-slate-600">
                  Fast action helps control the problem before infestation
                  becomes more serious and harder to manage.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">
                  Support property care
                </h3>
                <p className="mt-3 text-slate-600">
                  Professional pest control helps homes and businesses stay safe,
                  presentable, and comfortable for occupants.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send your location, house size, and a few photos on WhatsApp for
                a quicker estimate, or book an assessment for a more accurate
                quote.
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