import Link from "next/link";

type Props = {
  type: "service" | "location";
  current: string;
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

export default function SeoLinks({ type, current }: Props) {
  if (type === "service") {
    return (
      <div className="mt-10">
        <h3 className="font-semibold text-lg mb-3">
          This service is available in:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {locations.map((loc) => (
            <Link
              key={loc}
              href={`/services/${current}/${loc}`}
              className="border p-2 text-sm rounded hover:bg-black hover:text-white text-center"
            >
              {loc.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10">
      <h3 className="font-semibold text-lg mb-3">
        Services available in this area:
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {services.map((service) => (
          <Link
            key={service}
            href={`/services/${service}/${current}`}
            className="border p-2 text-sm rounded hover:bg-black hover:text-white text-center"
          >
            {service.replace(/-/g, " ")}
          </Link>
        ))}
      </div>
    </div>
  );
}