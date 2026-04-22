"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import WhatsappFloat from "../../components/WhatsappFloat";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const sendToWhatsApp = () => {
    const phoneNumber = "254759993502";

    const text = `
*NEW QUOTE REQUEST - GLANZ FACILITY SERVICES*

👤 Name: ${form.name}
📞 Phone: ${form.phone}
📧 Email: ${form.email}
🧼 Service: ${form.service}
📍 Location: ${form.location}

📝 Job Details:
${form.message}

---
Sent from Glanz Website
Response time: 10–30 minutes (working hours)
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Navbar />

      <main className="bg-white text-slate-900">

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">

          {/* HEADER */}
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Contact Glanz Facility Services
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Request Cleaning or Fumigation Quote
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              We respond fast to all cleaning and fumigation requests across Nairobi, Kiambu, Thika and surrounding areas.
              Send us your details or photos and we will give you a quick and accurate quote.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">

            {/* INFO SECTION */}
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">

              <h2 className="text-2xl font-bold">Contact Information</h2>

              <div className="mt-6 space-y-4 text-slate-700">

                <p><span className="font-semibold">Company:</span> Glanz Facility Services Limited</p>

                <p><span className="font-semibold">Phone:</span> 0759 993502</p>

                <p>
                  <span className="font-semibold">WhatsApp:</span>{" "}
                  <a href="https://wa.me/254759993502" className="underline font-semibold">
                    Click to Chat Instantly
                  </a>
                </p>

                <p><span className="font-semibold">Email:</span> info@glanzkenya.co.ke</p>

                <p><span className="font-semibold">Coverage:</span> Nairobi, Kiambu, Thika, Ruiru & nearby estates</p>

                <p><span className="font-semibold">Services:</span> Cleaning, Fumigation, Cabro Cleaning, Post-Construction Cleaning</p>

                <p><span className="font-semibold">Working Hours:</span> Mon – Sun (8:00 AM – 7:00 PM)</p>

                <p><span className="font-semibold">Response Time:</span> 10–30 minutes on WhatsApp</p>

              </div>

              <div className="mt-8 rounded-[1.5rem] bg-white p-6">
                <h3 className="text-lg font-semibold">Quick Tip</h3>
                <p className="mt-3 text-slate-600">
                  For faster quotation, send:
                  photos, location, size of area, and type of cleaning required.
                </p>
              </div>

            </div>

            {/* FORM */}
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold">Request a Quote</h2>

              <p className="mt-2 text-slate-600">
                Fill this form and we will respond instantly via WhatsApp with pricing and availability.
              </p>

              <form className="mt-8 space-y-6">

                <div className="grid gap-6 md:grid-cols-2">
                  <input id="name" onChange={handleChange} placeholder="Full Name" className="w-full rounded-2xl border px-4 py-3" />
                  <input id="phone" onChange={handleChange} placeholder="Phone Number" className="w-full rounded-2xl border px-4 py-3" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <input id="email" onChange={handleChange} placeholder="Email (optional)" className="w-full rounded-2xl border px-4 py-3" />

                  <select id="service" onChange={handleChange} className="w-full rounded-2xl border px-4 py-3">
                    <option value="">Select Service</option>
                    <option>House Cleaning</option>
                    <option>Sofa Cleaning</option>
                    <option>Carpet Cleaning</option>
                    <option>Mattress Cleaning</option>
                    <option>Cabro Cleaning</option>
                    <option>Post Construction Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Fumigation</option>
                  </select>
                </div>

                <input id="location" onChange={handleChange} placeholder="Location / Estate" className="w-full rounded-2xl border px-4 py-3" />

                <textarea
                  id="message"
                  onChange={handleChange}
                  rows={6}
                  placeholder="Describe your cleaning job (rooms, size, stains, urgency, etc.)"
                  className="w-full rounded-2xl border px-4 py-3"
                />

                <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                  Tip: You can also attach photos on WhatsApp after sending this request for more accurate pricing.
                </div>

                <button
                  type="button"
                  onClick={sendToWhatsApp}
                  className="w-full rounded-2xl bg-slate-900 px-6 py-4 text-white font-semibold hover:opacity-90"
                >
                  Send Request to WhatsApp
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

      <WhatsappFloat />
      <Footer />
    </>
  );
}