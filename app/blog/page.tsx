import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import Image from "next/image";

export const metadata = {
  title: "Cleaning Tips & Insights in Nairobi | Glanz Facility Services Blog",
  description:
    "Read expert cleaning tips, fumigation advice, and maintenance guides for homes, offices, and commercial spaces in Nairobi and Kenya.",
};

export default function BlogPage() {
  const faqs = [
    {
      q: "How often should I deep clean my house?",
      a: "We recommend deep cleaning your house at least once every 1–3 months depending on usage, number of occupants, and presence of pets.",
    },
    {
      q: "What is the difference between regular cleaning and deep cleaning?",
      a: "Regular cleaning handles surface dirt while deep cleaning targets hidden dust, stains, bacteria, and hard-to-reach areas like grout, sofas, and mattresses.",
    },
    {
      q: "Do you provide cleaning services for apartments and estates?",
      a: "Yes. We work with individual homeowners, apartments, gated communities, and property managers across Nairobi, Kiambu, and Thika.",
    },
    {
      q: "How long does post-construction cleaning take?",
      a: "It depends on the size of the project. A standard apartment may take 1–2 days, while larger houses or commercial buildings may take longer.",
    },
    {
      q: "Do I need to provide cleaning materials?",
      a: "No. We bring all professional equipment and cleaning detergents unless otherwise agreed for specialized jobs.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO BLOG HEADER */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Glanz Blog
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Cleaning Tips, Guides & Insights
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Expert advice on cleaning, fumigation, maintenance, and surface restoration
            for homes, offices, and commercial spaces in Kenya.
          </p>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">

            <div className="relative h-[320px] w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/hero/tile-cleaning/4.jpg"
                alt="Professional tile cleaning in Kenya"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Why Professional Tile Cleaning Matters
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Tiles accumulate dirt, grease, mold, and grime over time especially
                in bathrooms, kitchens, and commercial floors. Regular mopping
                is not enough to remove deep stains trapped in grout lines.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                Professional tile cleaning restores brightness, removes bacteria,
                and improves hygiene in your home or business environment.
              </p>

              <a
                href="https://wa.me/254759993502"
                className="mt-6 inline-block rounded-xl bg-slate-900 px-6 py-3 text-white font-semibold"
              >
                Book Cleaning Service
              </a>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-slate-50 mt-16 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Frequently Asked Questions
            </h2>

            <div className="mt-10 space-y-6">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl bg-white p-6 shadow-sm border"
                >
                  <h3 className="font-semibold text-lg">
                    {item.q}
                  </h3>
                  <p className="mt-2 text-slate-600">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="bg-slate-900 text-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

            <h2 className="text-3xl font-bold">
              Need Professional Cleaning Services?
            </h2>

            <p className="mt-4 text-slate-300 max-w-2xl mx-auto">
              Send photos of your space and get a fast quotation on WhatsApp.
              We respond quickly across Nairobi, Kiambu & Thika.
            </p>

            <a
              href="https://wa.me/254759993502"
              className="mt-6 inline-block rounded-xl bg-white px-6 py-4 text-slate-900 font-semibold"
            >
              Chat on WhatsApp
            </a>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}