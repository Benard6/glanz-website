import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloat from "../components/WhatsappFloat";
import Script from "next/script";

export const metadata = {
  title:
    "Glanz Facility Services | Cleaning & Renovation Services in Nairobi Kenya",
  description:
    "Professional cleaning and renovation services in Nairobi including sofa cleaning, carpet cleaning, house cleaning, cabro installation, cabro repainting, house painting, and fumigation services across Kenya.",
  keywords:
    "cleaning services Nairobi, renovation services Nairobi, cabro installation Kenya, house painting Nairobi, sofa cleaning Kenya, carpet cleaning Nairobi, fumigation services Kenya",

  openGraph: {
    title: "Glanz Facility Services",
    description: "Professional cleaning & renovation services in Kenya",
    url: "https://www.glanzkenya.co.ke",
    siteName: "Glanz Facility Services",
    images: [
      {
        url: "/images/hero/Profile/2.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Glanz Facility Services",
    description: "Cleaning & renovation services in Kenya",
  },
};

export default function HomePage() {
  const services = [
    { title: "Sofa Cleaning", link: "/services/sofa-cleaning" },
    { title: "House Cleaning", link: "/services/house-cleaning" },
    { title: "Cabro Cleaning", link: "/services/cabro-cleaning" },
    { title: "Carpet Cleaning", link: "/services/carpet-cleaning" },
    {
      title: "Vehicle Interior Cleaning",
      link: "/services/vehicle-interior-cleaning",
    },
    { title: "Terrazzo Cleaning", link: "/services/terrazzo-cleaning" },
    { title: "Window Cleaning", link: "/services/window-cleaning" },
    { title: "Tile Cleaning", link: "/services/tile-cleaning" },
    { title: "Mattress Cleaning", link: "/services/mattress-cleaning" },
    {
      title: "Post Construction Cleaning",
      link: "/services/post-construction-cleaning",
    },
    { title: "Office Cleaning", link: "/commercial/office-cleaning" },
    { title: "Janitorial Cleaning", link: "/commercial/janitorial-cleaning" },
    { title: "Fumigation Services", link: "/services/fumigation" },
    {
      title: "Cabro Installation",
      link: "/renovation/cabro-installation",
    },
    {
      title: "Cabro Repainting",
      link: "/renovation/cabro-repainting",
    },
    { title: "House Painting", link: "/renovation/house-painting" },
  ];

  const areas = [
    "Roysambu",
    "Kahawa West",
    "Zimmerman",
    "Githurai",
    "Ruiru",
    "Juja",
    "Kilimani",
    "Westlands",
    "Kasarani",
    "Kiambu",
  ];

  return (
    <>
      {/* SEO SCHEMA */}
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
              "Professional cleaning and renovation services in Nairobi Kenya.",
            telephone: "+254759993502",
            email: "info@glanzkenya.co.ke",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            areaServed: [
              "Nairobi",
              "Kiambu",
              "Thika",
              "Ruiru",
              "Kahawa",
            ],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61562113449202",
              "https://www.instagram.com/glanzkenya",
              "https://www.tiktok.com/@glanzkenya",
            ],
            priceRange: "KES 2000 - KES 150000",
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
                Cleaning & Renovation Services in Nairobi
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-slate-600">
                Professional cleaning and renovation services including cabro installation,
                repainting, house painting, fumigation, sofa cleaning, and deep cleaning.
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

            <div className="relative h-[420px] w-full">
              <Image
                src="/images/hero/Profile/2.jpg"
                alt="Glanz Facility Services Team"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>

          </div>
        </section>

        {/* FEATURED */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">Featured Projects</h2>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="relative h-64 w-full">
                <Image
                  src="/images/hero/cabro-cleaning/1.jpg"
                  alt="Cabro cleaning Nairobi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative h-64 w-full">
                <Image
                  src="/images/hero/cabro-cleaning/7.jpg"
                  alt="Cabro repainting Kenya"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="relative h-64 w-full">
                <Image
                  src="/images/hero/tile-cleaning/1.jpg"
                  alt="Tile cleaning Nairobi"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="rounded-2xl object-cover"
                />
              </div>

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
                  <p className="mt-2 text-slate-600">View details</p>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* AREAS */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <h2 className="text-3xl font-bold">
              Areas We Serve in Nairobi & Kiambu
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              {areas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border px-4 py-2 text-sm text-slate-700"
                >
                  {area}
                </span>
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