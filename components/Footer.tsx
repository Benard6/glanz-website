export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">

      {/* SCHEMA MARKUP (GOOGLE SEO BOOST) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Glanz Facility Services Limited",
            url: "https://www.glanzkenya.co.ke",
            image: "https://www.glanzkenya.co.ke/images/hero/Profile/2.jpg",
            telephone: "+254759993502",
            email: "info@glanzkenya.co.ke",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Nairobi",
              addressCountry: "KE",
            },
            areaServed: ["Nairobi", "Kiambu", "Thika", "Ruiru", "Kenya"],
            sameAs: [
              "https://www.facebook.com/profile.php?id=61562113449202",
              "https://www.instagram.com/p/DWqayreCCFI/",
              "https://www.tiktok.com/@glanzkenya"
            ],
            description:
              "Professional cleaning services in Nairobi including sofa cleaning, carpet cleaning, mattress cleaning, cabro cleaning, terrazzo cleaning, tile cleaning, window cleaning, office cleaning, janitorial services, and fumigation services across Kenya."
          }),
        }}
      />

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-4 lg:px-8">

        {/* COMPANY INFO */}
        <div>
          <h3 className="text-lg font-bold">
            Glanz Facility Services Limited
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-300">
            Professional cleaning, post-construction cleaning, cabro restoration,
            fumigation, and commercial cleaning services in Nairobi and surrounding areas.
          </p>

          <p className="mt-6 text-xs text-slate-400">
            © 2026 Glanz Facility Services. All rights reserved.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Contact
          </h4>

          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p>Phone: 0759 993502</p>
            <p>WhatsApp: 0759 993502</p>
            <p>Email: info@glanzkenya.co.ke</p>
            <p>Website: www.glanzkenya.co.ke</p>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Quick Links
          </h4>

          <div className="mt-4 space-y-2 text-sm text-slate-300">
            <p><a href="/about" className="hover:text-white">About</a></p>
            <p><a href="/services" className="hover:text-white">Services</a></p>
            <p><a href="/areas-we-serve" className="hover:text-white">Areas We Serve</a></p>
            <p><a href="/contact" className="hover:text-white">Contact</a></p>
            <p>
              <a href="https://wa.me/254759993502" className="hover:text-white">
                WhatsApp Us
              </a>
            </p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Follow Us
          </h4>

          <div className="mt-4 space-y-3 text-sm text-slate-300">

            <a
              href="https://www.facebook.com/profile.php?id=61562113449202"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/p/DWqayreCCFI/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@glanzkenya"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:text-white"
            >
              TikTok
            </a>

          </div>
        </div>

      </div>

      {/* 🔥 NEW SEO SECTION */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-slate-300">

          <h4 className="text-white font-semibold mb-3">
            Areas We Serve
          </h4>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <a href="/areas-we-serve" className="hover:text-white">Nairobi</a>
            <a href="/areas-we-serve" className="hover:text-white">Kiambu</a>
            <a href="/areas-we-serve" className="hover:text-white">Thika Road</a>
            <a href="/areas-we-serve" className="hover:text-white">Ruiru</a>
            <a href="/areas-we-serve" className="hover:text-white">Kilimani</a>
            <a href="/areas-we-serve" className="hover:text-white">Westlands</a>
            <a href="/areas-we-serve" className="hover:text-white">Kahawa West</a>
            <a href="/areas-we-serve" className="hover:text-white">Zimmerman</a>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-400">
          Built with care for clean spaces across Kenya — Glanz Facility Services Ltd © 2026
        </div>
      </div>

    </footer>
  );
}