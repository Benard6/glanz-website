import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function CabroInstallationPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="relative h-[350px] w-full">
          <Image
            src="/images/hero/cabro-repaint/IMG_1034.jpeg"
            alt="Cabro Installation by Glanz Facility Services"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Cabro Installation
            </h1>
          </div>
        </section>

        {/* CONTENT */}
        <section className="mx-auto max-w-5xl px-6 py-16">

          <p className="text-slate-600">
            We offer professional cabro installation services for homes, apartments, and commercial properties.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>✔ Site preparation and leveling</li>
            <li>✔ Cabro laying and alignment</li>
            <li>✔ Compaction and finishing</li>
            <li>✔ Proper drainage setup</li>
          </ul>

          {/* PRICING SECTION */}
          <div className="mt-10 p-6 bg-slate-50 rounded-2xl border">

            <h2 className="text-xl font-semibold">
              Pricing & Site Assessment
            </h2>

            <p className="mt-3 text-slate-600">
              Due to the nature of cabro installation works, pricing is determined after a physical site assessment.
            </p>

            <p className="mt-3 text-slate-600">
              This allows us to evaluate ground conditions, measurements, accessibility, and materials required.
            </p>

            <p className="mt-3 font-medium">
              Site visits are mandatory before issuing a final quotation.
            </p>

            <p className="mt-3 text-slate-600">
              We ensure accurate pricing and professional results for every project.
            </p>

            {/* CTA */}
            <a
              href="https://wa.me/254711628595"
              className="inline-block mt-5 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
            >
              Book Site Visit on WhatsApp
            </a>

          </div>

        </section>
      </main>

      <Footer />
    </>
  );
}