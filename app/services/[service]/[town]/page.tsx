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
      description:
        "Professional cleaning services across Nairobi, Kiambu and Kenya including sofa cleaning, cabro cleaning, mattress cleaning and fumigation.",
    };
  }

  const formattedService = service.replace(/-/g, " ");
  const formattedTown = town.replace(/-/g, " ");

  return {
    title: `${formattedService} in ${formattedTown} | Glanz Facility Services`,
    description: `Best ${formattedService} in ${formattedTown}. Affordable and professional cleaning company in ${formattedTown} offering sofa cleaning, cabro cleaning, mattress cleaning and fumigation services.`,
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
            Looking for the best {formattedService} in {formattedTown}?  
            Glanz Facility Services is a professional cleaning company in {formattedTown} offering
            affordable, reliable and high-quality cleaning services including sofa cleaning, mattress cleaning,
            cabro cleaning, fumigation and house cleaning across Nairobi and Kiambu.  
            Many clients searching for <b>best cleaning services in {formattedTown}</b> and
            <b> professional cleaning company near me</b> trust us for consistent results.
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
            in {formattedTown}. Our team is known as a <b>reliable cleaning company in Kenya</b>,
            using modern equipment and eco-friendly cleaning agents to deliver deep cleaning results.
            Whether you are searching for <b>affordable cleaning services in {formattedTown}</b> or
            <b> professional cleaners near me</b>, we are ready to help.
          </p>

          <p className="text-slate-600 mt-4 leading-7">
            We serve homeowners, tenants, property managers and businesses in {formattedTown}.
            Our services are also popular for people searching <b>cleaning contractors Kenya</b>,
            <b> janitorial services Nairobi</b> and <b>top cleaning company in Nairobi</b>.
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
              ✔ Fast response within {formattedTown} (cleaning near me services)
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
            <li>Best cleaning services in {formattedTown}</li>
            <li>Affordable cleaning services with no hidden charges</li>
            <li>Professional and trained cleaning staff</li>
            <li>Reliable cleaning contractors Kenya</li>
            <li>Fast response and same-day service available</li>
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
              <h3 className="font-semibold">
                Do you offer {formattedService} in {formattedTown}?
              </h3>
              <p>
                Yes, we are a professional cleaning company offering {formattedService} services in {formattedTown}
                and nearby areas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Are you the best cleaning company near me?</h3>
              <p>
                Many clients searching for best cleaning services near me choose Glanz Facility Services due to reliability and quality.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Do you offer affordable cleaning services?</h3>
              <p>
                Yes, we offer affordable cleaning services in Nairobi, Kiambu and {formattedTown}.
              </p>
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
            Contact the best cleaning company in {formattedTown} for fast and professional service.
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