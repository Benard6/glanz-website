import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import SectionHeader from "../../components/SectionHeader";
import ServiceCard from "../../components/ServiceCard";

export default function ServicesPage() {
  const services = [
    {
      title: "Sofa Cleaning",
      description: "Deep sofa and upholstery cleaning for homes and offices.",
      href: "/services/sofa-cleaning",
    },
    {
      title: "Mattress Cleaning",
      description: "Professional mattress cleaning for freshness and hygiene.",
      href: "/services/mattress-cleaning",
    },
    {
      title: "Carpet Cleaning",
      description: "Carpet stain removal and deep cleaning services.",
      href: "/services/carpet-cleaning",
    },
    {
      title: "Curtain Cleaning",
      description: "Professional curtain and drape cleaning solutions.",
      href: "/services/curtain-cleaning",
    },
    {
      title: "House Cleaning",
      description: "Routine and deep house cleaning for occupied or vacant homes.",
      href: "/services/house-cleaning",
    },
    {
      title: "Cabro Cleaning",
      description: "Cabro cleaning, restoration, repainting, and sealing.",
      href: "/services/cabro-cleaning",
    },
    {
      title: "Residential Cleaning",
      description: "Complete home and apartment cleaning support.",
      href: "/services/residential-cleaning",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Residential Services"
          title="Cleaning services for homes and apartments"
          description="Explore our residential cleaning services designed for comfort, hygiene, and convenience."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              href={service.href}
            />
          ))}
        </div>
      </main>
      <WhatsappFloat />
      <Footer />
    </>
  );
}