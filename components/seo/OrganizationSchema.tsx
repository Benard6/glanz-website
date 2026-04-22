export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Glanz Facility Services Limited",
    url: "https://www.glanzkenya.co.ke",
    logo: "https://www.glanzkenya.co.ke/images/hero/Logo/glanz_facility_services_logo-removebg-preview.png",
    image: "https://www.glanzkenya.co.ke/images/hero/Profile/2.jpg",
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
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}