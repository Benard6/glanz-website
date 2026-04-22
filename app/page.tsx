import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import Script from "next/script";

export const metadata = {
  title: "Glanz Facility Services | Cleaning Services in Nairobi Kenya",
  description:
    "Professional cleaning services in Nairobi including sofa cleaning, carpet cleaning, house cleaning, mattress cleaning, window cleaning, tile cleaning, terrazzo cleaning and fumigation services across Kenya.",
  keywords:
    "cleaning services Nairobi, sofa cleaning Kenya, carpet cleaning Nairobi, house cleaning Kenya, mattress cleaning Nairobi, fumigation services Kenya",
};

export default function HomePage() {
  const services = [
    { title: "Sofa Cleaning", link: "/services/sofa-cleaning" },
    { title: "House Cleaning", link: "/services/house-cleaning" },
    { title: "Cabro Cleaning", link: "/services/cabro-cleaning" },
    { title: "Carpet Cleaning", link: "/carpet-cleaning" },
    { title: "Vehicle Interior Cleaning", link: "/vehicle-interior-cleaning" },
    { title: "Terrazzo Cleaning", link: "/terrazzo-cleaning" },
    { title: "Window Cleaning", link: "/window-cleaning" },
    { title: "Tile Cleaning", link: "/tile-cleaning" },
    { title: "Mattress Cleaning", link: "/services/mattress-cleaning" },
    { title: "Post Construction Cleaning", link: "/post-construction-cleaning" },
    { title: "Office Cleaning", link: "/commercial/office-cleaning" },
    { title: "Janitorial Cleaning", link: "/commercial/janitorial-cleaning" },
    { title: "Fumigation Services", link: "/fumigation" },
  ];

  return (
    <>
      {/* ✅ SEO SCHEMA (SAFE + PROPER) */}
      <Script
        id="org-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Glanz Facility Services Limited",
            url: "https://www.glanzkenya.co.ke",
            logo:
              "https://www.glanzkenya.co.ke/images/hero/Logo/glanz_facility_services_logo-removebg-preview.png",
            image:
              "https://www.glanzkenya.co.ke/images/hero/Profile/2.jpg",
            description:
              "Professional cleaning services in Nairobi including sofa cleaning, carpet cleaning, mattress cleaning, cabro cleaning, fumigation, and post-construction cleaning.",
            telephone: "+254759993502",
            email: "info@glanzkenya.co.ke",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            areaServed: ["Nairobi", "Kiambu", "Thika", "Ruiru", "Kahawa"],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61562113449202",
              "https://www.instagram.com/p/DWqayreCCFI/",
              "https://www.tiktok.com/@glanzkenya",
            ],
            priceRange: "KES 2000 - KES 50000",
          }),
        }}
      />

      <Navbar />

      <main className="bg-white text-slate-900">

        {/* HERO */}
        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">

            <div>
              <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
                Professional Cleaning Services in Nairobi
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Sofa cleaning, carpet cleaning, house cleaning, mattress cleaning,
                cabro cleaning, terrazzo cleaning, window cleaning, tile cleaning,
                office cleaning, janitorial cleaning and fumigation services.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="/get-quote"
                  className="rounded-xl bg-slate-900 px-6 py-4 text-white font-semibold"
                >
                  Request Quote
                </a>

                <a
                  href="/contact"
                  className="rounded-xl border px-6 py-4 font-semibold"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div>
              <img
                src="/images/hero/Profile/2.jpg"
                alt="Glanz Facility Services Team"
                className="rounded-2xl object-cover w-full h-[420px] shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* FEATURED IMAGES */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Our Featured Cleaning Services
            </h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <img src="/images/hero/cabro-cleaning/1.jpg" className="rounded-2xl h-64 w-full object-cover" />
              <img src="/images/hero/cabro-cleaning/7.jpg" className="rounded-2xl h-64 w-full object-cover" />
              <img src="/images/hero/tile-cleaning/1.jpg" className="rounded-2xl h-64 w-full object-cover" />

            </div>

          </div>
        </section>

        {/* SERVICES */}
        <section className="bg-slate-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">Our Services</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={service.link}
                  className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-slate-600">View details and pricing</p>
                </a>
              ))}
            </div>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}