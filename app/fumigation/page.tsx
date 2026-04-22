import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";
import SectionHeader from "../../components/SectionHeader";
import ServiceCard from "../../components/ServiceCard";

export default function FumigationPage() {
  const services = [
    {
      title: "Cockroach Control",
      description: "Professional cockroach fumigation for homes and businesses.",
      href: "/fumigation/cockroach-control",
    },
    {
      title: "Bedbug Control",
      description: "Targeted bedbug treatment and fumigation services.",
      href: "/fumigation/bedbug-control",
    },
    {
      title: "Mosquito Control",
      description: "Mosquito treatment for homes, compounds, and facilities.",
      href: "/fumigation/mosquito-control",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeader
          eyebrow="Fumigation Services"
          title="Professional pest control and fumigation services"
          description="Reliable pest control services for homes, apartments, offices, and commercial properties."
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