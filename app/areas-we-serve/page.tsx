import Link from "next/link";

const services = [
  "sofa-cleaning",
  "mattress-cleaning",
  "carpet-cleaning",
  "house-cleaning",
  "post-construction-cleaning",
  "cabro-cleaning",
  "window-cleaning",
  "tile-cleaning",
  "office-cleaning",
  "fumigation",
];

const locations = [
  "roysambu",
  "zimmerman",
  "kahawa-west",
  "kahawa-sukari",
  "kahawa-wendani",
  "githurai",
  "kasarani",
  "mwiki",
  "ruiru",
  "juja",
  "gatundu",
  "kenyatta-road",

  "kiambu",
  "kiambu-road",
  "ridgeways",
  "runda",
  "muthaiga",

  "westlands",
  "lavington",
  "kileleshwa",
  "karen",
  "kangemi",
  "lower-kabete",
  "upper-kabete",

  "kilimani",
  "hurlingham",
  "ngong-road",
  "dagoretti",
  "lenana",
  "adams-arcade",

  "embakasi",
  "donholm",
  "imara-daima",
  "syokimau",
  "mombasa-road",

  "langata",
  "rongai",
  "south-c",
  "athiriver",

  "thika",
  "nairobi-cbd"
];

export default function AreasWeServePage() {
  return (
    <div className="bg-slate-50 min-h-screen py-14">

      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-slate-900">
            Cleaning Services Across Nairobi & Kiambu
          </h1>

          <p className="mt-3 text-slate-600 text-lg">
            Select your location and service below to view availability
          </p>
        </div>

        {/* LOCATION BLOCKS */}
        <div className="space-y-10">

          {locations.map((location) => (
            <div
              key={location}
              className="bg-white border rounded-2xl shadow-sm p-5 hover:shadow-md transition"
            >

              {/* LOCATION TITLE */}
              <h2 className="text-lg font-semibold capitalize text-slate-800 border-b pb-3 mb-4">
                {location.replace(/-/g, " ")}
              </h2>

              {/* SERVICES GRID */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">

                {services.map((service) => (
                  <Link
                    key={service}
                    href={`/services/${service}/${location}`}
                    className="text-center text-sm border rounded-xl px-3 py-2 bg-slate-50 hover:bg-black hover:text-white transition capitalize"
                  >
                    {service.replace(/-/g, " ")}
                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
}