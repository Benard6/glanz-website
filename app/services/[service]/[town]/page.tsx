import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    service: string;
    town: string;
  }>;
};

export default async function ServiceTownPage({ params }: Props) {
  const { service, town } = await params;

  if (!service || !town) return notFound();

  const formattedService = service.replace(/-/g, " ");
  const formattedTown = town.replace(/-/g, " ");

  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl font-bold capitalize">
            {formattedService} in {formattedTown}
          </h1>

          <p className="mt-4 text-slate-300 max-w-2xl">
            Professional, affordable and reliable {formattedService} services in{" "}
            {formattedTown}. Trusted by homes, offices, apartments and businesses
            across Nairobi and Kiambu.
          </p>

          <a
            href="https://wa.me/254759993502"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-lg font-semibold"
          >
            Book on WhatsApp
          </a>

        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            About Our {formattedService} in {formattedTown}
          </h2>

          <p className="text-slate-600 leading-7">
            At Glanz Facility Services, we provide high-quality{" "}
            {formattedService} in {formattedTown}. Our team uses modern equipment,
            eco-friendly detergents, and professional techniques to ensure deep
            cleaning results that last longer.
          </p>

          <p className="text-slate-600 mt-4 leading-7">
            Whether it is residential, commercial, or industrial cleaning, we
            tailor our services to meet your exact needs. Customers in{" "}
            {formattedTown} trust us for consistent quality and fast response times.
          </p>

        </div>
      </section>

      {/* SERVICES BENEFITS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-6">
            Why Choose Us in {formattedTown}?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <div className="bg-white p-5 rounded-xl border">
              ✔ Experienced cleaning professionals
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Affordable pricing for all budgets
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Fast response within {formattedTown}
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Modern cleaning equipment
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Trusted across Nairobi & Kiambu
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Satisfaction guaranteed results
            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            What Our {formattedService} Includes
          </h2>

          <ul className="space-y-3 text-slate-600 list-disc pl-6">
            <li>Deep cleaning and stain removal</li>
            <li>Professional-grade equipment usage</li>
            <li>Eco-friendly cleaning products</li>
            <li>Surface restoration and detailing</li>
            <li>Residential and commercial coverage</li>
            <li>On-site or scheduled cleaning services</li>
          </ul>

        </div>
      </section>

      {/* LOCAL SEO BOOST */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-3">
            Serving {formattedTown} and Nearby Areas
          </h2>

          <p className="text-slate-600">
            We also serve surrounding areas near {formattedTown}, ensuring fast
            response times and reliable cleaning services across Nairobi and Kiambu
            regions.
          </p>

        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-900 text-white py-16 text-center">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Book {formattedService} in {formattedTown} Today
          </h2>

          <p className="mt-4 text-slate-300">
            Get fast response and professional cleaning services from Glanz Facility Services.
          </p>

          <a
            href="https://wa.me/254759993502"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Request Quote on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}