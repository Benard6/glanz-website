import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: {
    town?: string;
  };
};

// ✅ FIX: safe metadata (prevents build crash)
export async function generateMetadata({ params }: Props) {
  const town = params?.town;

  if (!town) {
    return {
      title: "Locations | Glanz Facility Services",
      description: "Professional cleaning services across Kenya.",
    };
  }

  const formattedTown = town.replace(/-/g, " ");

  return {
    title: `Cleaning Services in ${formattedTown} | Glanz Facility Services`,
    description: `Professional cleaning, fumigation, cabro cleaning and renovation services in ${formattedTown}.`,
  };
}

export default function LocationPage({ params }: Props) {
  const town = params?.town;

  // ✅ BLOCK INVALID ROUTES (VERY IMPORTANT)
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

      {/* HERO */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Cleaning Services in {formattedTown}
      </h1>

      <p className="text-gray-600 mb-6 max-w-3xl">
        Glanz Facility Services provides professional cleaning, fumigation,
        and renovation services in {formattedTown}.
      </p>

      {/* WHY CHOOSE US */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Why Choose Our Services in {formattedTown}?
      </h2>

      <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-10">
        <li>Fast response within {formattedTown}</li>
        <li>Affordable pricing</li>
        <li>Trained professionals</li>
        <li>Eco-friendly cleaning products</li>
        <li>Trusted across Kenya</li>
      </ul>

      {/* SERVICES */}
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

      {/* CTA */}
      <div className="mt-12 p-6 bg-black text-white rounded-2xl">
        <h3 className="text-xl font-semibold mb-2">
          Book Cleaning Services in {formattedTown}
        </h3>

        <p className="mb-4">
          Get fast, reliable cleaning services in {formattedTown} today.
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