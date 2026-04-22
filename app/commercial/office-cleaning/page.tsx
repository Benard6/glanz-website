import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export default function OfficeCleaningPage() {
  const pricingRows = [
    {
      item: "Small office routine cleaning",
      pricing: "From KES 8,000 / month",
      details:
        "Suitable for small offices with light routine cleaning needs and limited traffic.",
    },
    {
      item: "Medium office routine cleaning",
      pricing: "Call for assessment",
      details:
        "Depends on office size, washrooms, kitchenette, staff count, and cleaning frequency.",
    },
    {
      item: "Large office / commercial floor",
      pricing: "Custom quote",
      details:
        "Quoted based on area size, staffing required, cleaning schedule, and scope of support.",
    },
    {
      item: "One-off office deep cleaning",
      pricing: "Call for assessment",
      details:
        "Best quoted after understanding floor area, condition, and level of detailed cleaning required.",
    },
    {
      item: "Office washroom and shared area support",
      pricing: "Call for assessment",
      details:
        "Rate depends on number of washrooms, common areas, and required service frequency.",
    },
    {
      item: "Monthly / contractual cleaning support",
      pricing: "Custom quote",
      details:
        "Best for businesses that need dependable recurring cleaning with a tailored schedule.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="Office Cleaning"
            title="Professional Office Cleaning Services in Nairobi"
            description="Reliable office cleaning support for businesses, shared workspaces, buildings, and managed commercial properties."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                A clean office supports productivity, professionalism, and a
                better environment for staff, clients, and visitors.
              </p>

              <p>
                Glanz Facility Services Limited provides dependable office
                cleaning services for daily, weekly, and scheduled maintenance
                needs across different types of workplaces.
              </p>

              <p>
                We support businesses looking for a reliable cleaning partner
                for routine office cleaning, deep cleaning, and monthly or
                contractual cleaning arrangements.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">Office cleaning covers</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Workstations and desk areas</li>
                <li>Reception and common areas</li>
                <li>Washrooms and kitchenettes</li>
                <li>Floor care and dust control</li>
                <li>Glass and touchpoint cleaning</li>
                <li>Routine and contract cleaning schedules</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="Office Cleaning Pricing Guide"
          note="Routine office cleaning rates usually depend on office size, staff traffic, washrooms, kitchen area, frequency of cleaning, and whether consumables or extra support are included."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Who this service is for
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Offices</h3>
                <p className="mt-3 text-slate-600">
                  Daily, weekly, or scheduled cleaning for professional
                  workplaces that need to stay neat and presentable.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Managed properties</h3>
                <p className="mt-3 text-slate-600">
                  Reliable cleaning support for property managers, office
                  buildings, and shared commercial spaces.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Commercial tenants</h3>
                <p className="mt-3 text-slate-600">
                  A dependable solution for businesses that want regular,
                  professional facility care without the stress.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Send your office location, size, cleaning frequency, and a few
                photos on WhatsApp for a quicker estimate, or book an
                assessment for a tailored quote.
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