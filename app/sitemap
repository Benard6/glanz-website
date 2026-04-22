import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappFloat from "@/components/WhatsappFloat";
import QuoteClient from "./QuoteClient";

export default function GetQuotePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Get a Fast Cleaning Quote
            </h1>
            <p className="mt-3 text-slate-600">
              Fill in your details and receive instant pricing on WhatsApp
            </p>
          </div>

          {/* ✅ FIX HERE */}
          <Suspense fallback={<p className="mt-10">Loading form...</p>}>
            <QuoteClient />
          </Suspense>

        </section>
      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}