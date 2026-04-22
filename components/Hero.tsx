import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 flex flex-col lg:flex-row items-center gap-10">

      {/* TEXT */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl">
          Professional Cleaning Services in Nairobi, Ruiru, Thika & Kiambu
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-slate-600">
          Sofa cleaning, house cleaning, cabro cleaning, office cleaning and fumigation services.
          Trusted across residential estates and commercial buildings.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://wa.me/254759993502"
            className="rounded-xl bg-blue-950 px-6 py-4 text-white font-semibold"
          >
            Request Quote
          </a>

          <a
            href="#services"
            className="rounded-xl border px-6 py-4 font-semibold"
          >
            View Services
          </a>
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative flex-1 w-full h-80 lg:h-[420px]">
        <Image
          src="/images/cleaning-hero.jpg"
          alt="Professional cleaning services Nairobi"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-2xl shadow-xl object-cover"
        />
      </div>

    </section>
  );
}
