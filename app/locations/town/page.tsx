import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    town: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const town = params.town.replace(/-/g, " ");

  return {
    title: `Cleaning Services in ${town} | Glanz Facility Services`,
    description: `Professional cleaning, fumigation, cabro cleaning and renovation services in ${town}. Trusted experts for homes and businesses.`,
  };
}

export default function LocationPage({ params }: Props) {
  const { town } = params;

  if (!town) return notFound();

  const formattedTown = town.replace(/-/g, " ");

  const services = [
    "sofa-cleaning",
    "house-cleaning",
    "carpet-cleaning",
    "fumigation",
    "mattress-cleaning",
    "cabro-cleaning",
    "post-construction-cleaning",
    "window-cleaning",
    "tile-cleaning",
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* HERO SEO SECTION */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Cleaning Services in {formattedTown}
      </h1>

      <p className="text-gray-600 mb-6 max-w-3xl">
        Glanz Facility Services provides professional cleaning, fumigation,
        and renovation services in {formattedTown}. We serve homes,
        apartments, offices, and commercial buildings with high-quality,
        affordable cleaning solutions.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Choose Our Services in {formattedTown}?
      </h2>

      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-10">
        <li>Fast response within {formattedTown}</li>
        <li>Affordable pricing with no hidden charges</li>
        <li>Trained cleaning professionals</li>
        <li>Modern cleaning equipment & eco-friendly products</li>
        <li>Trusted by homeowners and businesses</li>
      </ul>

      {/* SERVICES GRID */}
      <h2 className="text-2xl font-semibold mb-4">
        Our Cleaning Services in {formattedTown}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {services.map((service) => (
          <Link
            key={service}
            href={`/services/${service}/${town}`}
            className="border rounded-xl p-4 hover:bg-black hover:text-white transition text-sm capitalize"
          >
            {service.replace(/-/g, " ")}
          </Link>
        ))}
      </div>

      {/* INTERNAL SEO BOOST (IMPORTANT ADDITION) */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-3">
          Popular Nearby Areas We Also Serve
        </h3>

        <div className="flex flex-wrap gap-2 text-sm">
          {[
            "Roysambu",
             "thika",
            "kiambu",
            "syokimau",
            "muthaiga",
            "Ruiru",
            "Kasarani",
          ].map((loc) => (
            <Link
              key={loc}
              href={`/locations/${loc.toLowerCase().replace(/ /g, "-")}`}
              className="border px-3 py-1 rounded hover:bg-black hover:text-white"
            >
              {loc}
            </Link>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 p-6 bg-black text-white rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">
          Book Cleaning Services in {formattedTown}
        </h3>

        <p className="mb-4">
          Get fast, reliable cleaning services in {formattedTown} today.
          Contact Glanz Facility Services now.
        </p>

        <a
          href="https://wa.me/254759993502"
          className="bg-white text-black px-5 py-2 rounded font-medium"
        >
          WhatsApp Us
        </a>
      </div>

    </div>
  );
}