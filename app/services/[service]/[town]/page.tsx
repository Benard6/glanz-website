import { notFound } from "next/navigation";

type Params = {
  service: string;
  town: string;
};

type Props = {
  params: Promise<Params>;
};

// SEO: static generation
export function generateStaticParams() {
  return [
    { service: "sofa-cleaning", town: "roysambu" },
    { service: "sofa-cleaning", town: "kahawa-west" },
    { service: "mattress-cleaning", town: "ruiru" },
    { service: "cabro-cleaning", town: "thika" },
    { service: "house-cleaning", town: "kiambu" },
  ];
}

// SEO metadata
export async function generateMetadata({ params }: Props) {
  const { service, town } = await params;

  if (!service || !town) {
    return {
      title: "Cleaning Services in Kenya | Glanz Facility Services",
      description: "Professional cleaning services across Nairobi, Kiambu and Kenya.",
    };
  }

  const formattedService = service.replace(/-/g, " ");
  const formattedTown = town.replace(/-/g, " ");

  return {
    title: `${formattedService} in ${formattedTown} | Glanz Facility Services`,
    description: `Best ${formattedService} in ${formattedTown}. Affordable, professional cleaning services for homes, offices and commercial buildings.`,
  };
}

export default async function ServiceTownPage({ params }: Props) {
  const { service, town } = await params;

  if (!service || !town) return notFound();

  const formattedService = service.replace(/-/g, " ");
  const formattedTown = town.replace(/-/g, " ");

  return (
    <main className="bg-white text-slate-900">

      {/* HERO */}
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {formattedService} in {formattedTown}
          </h1>

          <p className="mt-4 text-slate-300 max-w-3xl">
            Looking for reliable {formattedService} in {formattedTown}?  
            Glanz Facility Services is a trusted cleaning company offering professional,
            affordable and high-quality cleaning solutions for homes, apartments, offices,
            and commercial buildings across Nairobi and Kiambu.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/254759993502"
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp: 0759 993 502
            </a>

            <a
              href="tel:+254759993502"
              className="border border-white px-6 py-3 rounded-lg"
            >
              Call Now
            </a>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            Professional {formattedService} in {formattedTown}
          </h2>

          <p className="text-slate-600 leading-7">
            At Glanz Facility Services, we specialize in delivering high-quality {formattedService}
            in {formattedTown}. Our team uses modern equipment, eco-friendly cleaning agents,
            and industry-standard techniques to ensure deep cleaning and long-lasting results.
          </p>

          <p className="text-slate-600 mt-4 leading-7">
            Whether you are a homeowner, tenant, property manager, or business owner in {formattedTown},
            we tailor our cleaning services to meet your exact needs.
          </p>

        </div>
      </section>

      {/* SERVICES BREAKDOWN */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-6">
            What Our {formattedService} Includes
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-slate-700">

            <div className="bg-white p-5 rounded-xl border">
              ✔ Deep cleaning and stain removal
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Professional equipment and machines
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Eco-friendly cleaning products
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Interior and surface sanitization
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Residential and commercial cleaning
            </div>

            <div className="bg-white p-5 rounded-xl border">
              ✔ Fast response within {formattedTown}
            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-4">
            Why Choose Glanz Facility Services in {formattedTown}?
          </h2>

          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li>Trusted cleaning company in Nairobi & Kiambu</li>
            <li>Affordable pricing with no hidden charges</li>
            <li>Experienced and trained cleaning staff</li>
            <li>Fast response and reliable scheduling</li>
            <li>Customer satisfaction guaranteed</li>
          </ul>

        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-2xl font-bold mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4 text-slate-700">

            <div>
              <h3 className="font-semibold">Do you offer services in {formattedTown}?</h3>
              <p>Yes, we provide full {formattedService} services across all areas of {formattedTown}.</p>
            </div>

            <div>
              <h3 className="font-semibold">How much do you charge?</h3>
              <p>Pricing depends on size and condition. Contact us for a free quote.</p>
            </div>

            <div>
              <h3 className="font-semibold">Do you offer same-day service?</h3>
              <p>Yes, we offer fast response and same-day cleaning in most cases.</p>
            </div>

          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold">
            Book {formattedService} in {formattedTown}
          </h2>

          <p className="mt-4 text-slate-300">
            Contact Glanz Facility Services today for fast and professional cleaning services.
          </p>

          <div className="mt-6 space-y-2">
            <p>📞 0759 993 502</p>
            <p>📞 0711 628 595</p>
            <p>📧 info@glanzkenya.co.ke</p>
            <p>🌐 www.glanzkenya.co.ke</p>
          </div>

          <a
            href="https://wa.me/254759993502"
            className="inline-block mt-6 bg-white text-black px-6 py-3 rounded-xl font-semibold"
          >
            Get Quote on WhatsApp
          </a>

        </div>
      </section>

    </main>
  );
}