import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO / ABOUT SECTION */}
        <section className="mx-auto max-w-5xl px-6 py-16 lg:px-8 lg:py-24">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            About Glanz
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Professional Cleaning and Facility Services in Nairobi
          </h1>

          {/* IMAGE + TEXT GRID */}
          <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center">

            {/* IMAGE */}
            {/* IMAGE */}
<div className="rounded-2xl overflow-hidden shadow-sm border aspect-[4/3]">
  <img
    src="/images/hero/Profile/1.jpg"
    alt="Glanz Facility Services Team"
    className="w-full h-full object-cover"
  />
</div>
            {/* TEXT */}
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Glanz Facility Services Limited provides reliable and professional
                cleaning solutions for homes, offices, apartments, and commercial
                properties.
              </p>

              <p>
                We specialize in post-construction cleaning, cabro cleaning and
                restoration, fumigation, office cleaning, and other residential
                and commercial cleaning services.
              </p>

              <p>
                Our goal is to help clients maintain clean, safe, and presentable
                spaces through proper cleaning methods, the right equipment, and
                attention to detail.
              </p>
            </div>

          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              What we stand for
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Professionalism</h3>
                <p className="mt-3 text-slate-600">
                  We serve clients with reliability, proper communication, and
                  quality workmanship.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Detail</h3>
                <p className="mt-3 text-slate-600">
                  We focus on proper finishing, deep cleaning, and visible results
                  that improve the look of a property.
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold">Dependability</h3>
                <p className="mt-3 text-slate-600">
                  We support homes, offices, and businesses that need a cleaning
                  partner they can trust.
                </p>
              </div>

            </div>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}