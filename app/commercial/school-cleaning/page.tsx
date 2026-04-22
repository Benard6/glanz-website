"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import WhatsappFloat from "../../../components/WhatsappFloat";
import SectionHeader from "../../../components/SectionHeader";
import PricingTable from "../../../components/PricingTable";

export default function SchoolCleaningPage() {
  const pricingRows = [
    {
      item: "Small school / daycare cleaning",
      pricing: "From KES 10,000 / month",
      details:
        "Suitable for small learning centers, daycare facilities, and low student population environments.",
    },
    {
      item: "Primary / secondary school cleaning",
      pricing: "Call for assessment",
      details:
        "Depends on number of classrooms, washrooms, student population, and cleaning frequency.",
    },
    {
      item: "Large school / institution cleaning",
      pricing: "Custom quote",
      details:
        "Quoted based on compound size, dormitories, halls, staffing needs, and scope of cleaning.",
    },
    {
      item: "One-off deep cleaning (schools)",
      pricing: "Call for assessment",
      details:
        "Ideal during holidays or term breaks for full deep cleaning of classrooms and facilities.",
    },
    {
      item: "Washroom and sanitation support",
      pricing: "Call for assessment",
      details:
        "Depends on number of washrooms, usage frequency, and hygiene standards required.",
    },
    {
      item: "Contract / term-based cleaning",
      pricing: "Custom quote",
      details:
        "Best for institutions needing consistent, reliable cleaning across school terms.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <SectionHeader
            eyebrow="School Cleaning"
            title="Professional School Cleaning Services in Nairobi"
            description="Reliable cleaning solutions for schools, daycare centers, colleges, and learning institutions across Nairobi and surrounding areas."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Maintaining a clean and hygienic school environment is essential
                for the health, safety, and comfort of students and staff.
              </p>

              <p>
                Glanz Facility Services Limited provides structured and reliable
                school cleaning services tailored to learning institutions of
                different sizes.
              </p>

              <p>
                We support daily cleaning, scheduled maintenance, deep cleaning
                during holidays, and long-term contractual cleaning programs.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
              <h2 className="text-2xl font-bold">School cleaning covers</h2>
              <ul className="mt-6 space-y-3 text-slate-700">
                <li>Classrooms and learning areas</li>
                <li>Staff rooms and administration offices</li>
                <li>Washrooms and sanitation areas</li>
                <li>Playgrounds and common areas</li>
                <li>Dormitories (for boarding schools)</li>
                <li>Routine and scheduled cleaning programs</li>
              </ul>
            </div>
          </div>
        </section>

        <PricingTable
          title="School Cleaning Pricing Guide"
          note="School cleaning rates depend on number of classrooms, student population, washrooms, compound size, cleaning frequency, and level of sanitation required."
          rows={pricingRows}
        />

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight">
              Who this service is for
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Daycare centers</h3>
                <p className="mt-3 text-slate-600">
                  Safe and hygienic cleaning for environments with young
                  children requiring high sanitation standards.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Primary & secondary schools</h3>
                <p className="mt-3 text-slate-600">
                  Reliable daily or scheduled cleaning to maintain a healthy
                  learning environment for students and staff.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Colleges & institutions</h3>
                <p className="mt-3 text-slate-600">
                  Structured cleaning support for larger institutions with
                  multiple facilities and high traffic.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-[2rem] bg-slate-900 p-8 text-white">
              <h3 className="text-2xl font-bold">Need exact pricing?</h3>
              <p className="mt-3 max-w-2xl text-slate-300">
                Share your school size, number of classrooms, and cleaning needs
                on WhatsApp for a faster estimate, or book a site visit for a
                detailed quotation.
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