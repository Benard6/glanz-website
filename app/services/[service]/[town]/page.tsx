import { notFound } from "next/navigation";

type Props = {
  params: {
    service?: string;
    town?: string;
  };
};

// ✅ Optional but recommended for SEO & build stability
export function generateStaticParams() {
  return [
    { service: "sofa-cleaning", town: "roysambu" },
    { service: "sofa-cleaning", town: "kahawa-west" },
    { service: "mattress-cleaning", town: "ruiru" },
    { service: "cabro-cleaning", town: "thika" },
    { service: "house-cleaning", town: "kiambu" },
  ];
}

// ✅ Fix metadata crash
export async function generateMetadata({ params }: Props) {
  const { service, town } = params;

  if (!service || !town) {
    return {
      title: "Cleaning Services | Glanz Facility Services",
      description: "Professional cleaning services across Nairobi and Kiambu.",
    };
  }

  const formattedService = service.replace(/-/g, " ");
  const formattedTown = town.replace(/-/g, " ");

  return {
    title: `${formattedService} in ${formattedTown} | Glanz Facility Services`,
    description: `Professional ${formattedService} services in ${formattedTown}. Book today with Glanz Facility Services.`,
  };
}

export default function ServiceTownPage({ params }: Props) {
  const { service, town } = params;

  // ✅ Prevent build crash
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

      {/* INTRO */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            About Our {formattedService} in {formattedTown}
          </h2>

          <p className="text-slate-600 leading-7">
            At Glanz Facility Services, we provide high-quality {formattedService} in {formattedTown}. 
            Our team uses modern equipment, eco-friendly detergents, and professional techniques to ensure deep cleaning results that last longer.
          </p>

          <p className="text-slate-600 mt-4 leading-7">
            Whether residential, commercial, or industrial, we tailor our services to meet your needs. 
            Customers in {formattedTown} trust us for consistent quality and fast response times.
          </p>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-6">
            Why Choose Us in {formattedTown}?
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <div className="bg-white p-5 rounded-xl border">✔ Experienced professionals</div>
            <div className="bg-white p-5 rounded-xl border">✔ Affordable pricing</div>
            <div className="bg-white p-5 rounded-xl border">✔ Fast response in {formattedTown}</div>
            <div className="bg-white p-5 rounded-xl border">✔ Modern equipment</div>
            <div className="bg-white p-5 rounded-xl border">✔ Trusted across Nairobi & Kiambu</div>
            <div className="bg-white p-5 rounded-xl border">✔ Guaranteed satisfaction</div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            What Our {formattedService} Includes
          </h2>

          <ul className="space-y-3 text-slate-600 list-disc pl-6">
            <li>Deep cleaning and stain removal</li>
            <li>Professional-grade equipment</li>
            <li>Eco-friendly products</li>
            <li>Surface restoration</li>
            <li>Residential & commercial services</li>
            <li>Flexible scheduling</li>
          </ul>

        </div>
      </section>

      {/* LOCAL SEO */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-3">
            Serving {formattedTown} and Nearby Areas
          </h2>

          <p className="text-slate-600">
            We also serve surrounding areas near {formattedTown}, ensuring fast response 
            and reliable cleaning services across Nairobi and Kiambu.
          </p>

        </div>
      </section>

      {/* CTA */}
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