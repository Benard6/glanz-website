import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import Image from "next/image";

const galleryItems = [
  {
    title: "Post-Construction Cleaning",
    description:
      "Final deep cleaning for newly built homes, apartments, and commercial spaces.",
    image: "/images/hero/post-construction-cleaning/2.jpg",
  },
  {
    title: "Cabro Cleaning & Restoration",
    description:
      "Cabro cleaning, stain removal, and compound restoration services.",
    image: "/images/hero/cabro-cleaning/3.jpg",
  },
  {
    title: "Carpet Cleaning",
    description:
      "Deep carpet washing for homes, offices, and apartments.",
    image: "/images/hero/carpert-cleaning/2.jpg", 
  },
  {
    title: "Sofa Cleaning",
    description:
      "Professional upholstery and sofa deep cleaning services.",
    image: "/images/hero/sofa-cleaning/3.jpg",
  },
  {
    title: "House Cleaning",
    description:
      "Complete residential cleaning for occupied and vacant homes.",
    image: "/images/hero/house-cleaning/1.jpg",
  },
  {
    title: "Mattress Cleaning",
    description:
      "Deep mattress cleaning removing stains, dust, and odor.",
    image: "/images/hero/mattress-cleaning/6.jpg",
  },
  {
    title: "Terrazzo Cleaning",
    description:
      "Terrazzo floor restoration and polishing services.",
    image: "/images/hero/terrazzo-cleaning/1.jpg",
  },
  {
    title: "Tile Cleaning",
    description:
      "Deep tile and grout cleaning for kitchens and bathrooms.",
    image: "/images/hero/tile-cleaning/1.jpg",
  },
  {
    title: "Window Cleaning",
    description:
      "Streak-free window cleaning for homes and offices.",
    image: "/images/hero/window-cleaning/2.jpg",
  },
  {
    title: "Fumigation Services",
    description:
      "Professional pest control and fumigation services.",
    image: "/images/hero/fumigation/4.jpg",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HEADER */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Gallery
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Our Cleaning & Restoration Work in Nairobi
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Real projects from Glanz Facility Services across residential,
              commercial cleaning, fumigation, and restoration services.
            </p>
          </div>

          {/* IMAGE GRID */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {galleryItems.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
              >
                {/* IMAGE */}
                <div className="relative h-64 w-full">
                  <Image
                    src={item.image}
                    alt={`${item.title} Nairobi Kenya service`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* TEXT */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-slate-600 leading-7">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="rounded-[2rem] bg-slate-900 p-8 text-white">
              <h2 className="text-2xl font-bold">
                Want Similar Cleaning Results?
              </h2>

              <p className="mt-3 max-w-2xl text-slate-300">
                Send your photos on WhatsApp for fast quotation or site visit booking.
              </p>

              <a
                href="https://wa.me/254759993502"
                className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-slate-900"
              >
                Chat on WhatsApp
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