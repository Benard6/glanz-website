import Link from "next/link";

type Props = {
  current: string;
  type?: "service" | "location"; // ✅ now optional (fixes your build error)
};

const services = [
  "sofa-cleaning",
  "post-construction-cleaning",
  "terrazzo-cleaning",
  "house-cleaning",
  "tile-cleaning",
  "mattress-cleaning",
  "window-cleaning",
  "vehicle-interior-cleaning",
  "carpet-cleaning",
  "cabro-cleaning",
  "fumigation",
];

const locations = [
  "roysambu",
  "kahawa-west",
  "zimmerman",
  "githurai",
  "ruiru",
  "juja",
  "runda",
  "karen",
  "muthaiga",
  "thika",
  "kilimani",
  "westlands",
  "kasarani",
  "kiambu",
];

export default function SeoLinks({ type = "service", current }: Props) {
  // ✅ SERVICE → show locations
  if (type === "service") {
    return (
      <div className="mt-12 border-t pt-8">

        <h3 className="text-xl font-semibold text-slate-900 mb-4">
          Available in these areas
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">

          {locations.map((loc) => (
            <Link
              key={loc}
              href={`/services/${current}/${loc}`}
              className="text-center text-sm border rounded-xl px-3 py-2 bg-slate-50 hover:bg-black hover:text-white transition capitalize"
            >
              {loc.replace(/-/g, " ")}
            </Link>
          ))}

        </div>

      </div>
    );
  }

  // ✅ LOCATION → show services
  return (
    <div className="mt-12 border-t pt-8">

      <h3 className="text-xl font-semibold text-slate-900 mb-4">
        Services available in this area
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">

        {services.map((service) => (
          <Link
            key={service}
            href={`/services/${service}/${current}`}
            className="text-center text-sm border rounded-xl px-3 py-2 bg-slate-50 hover:bg-black hover:text-white transition capitalize"
          >
            {service.replace(/-/g, " ")}
          </Link>
        ))}

      </div>

    </div>
  );
}