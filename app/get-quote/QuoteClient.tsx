"use client";

import { useState } from "react";
import type { ChangeEvent, SyntheticEvent } from "react";
import { useSearchParams } from "next/navigation";

export default function QuoteClient() {
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    service: searchParams.get("service") ?? "Sofa Cleaning",
    message: "",
  });

  const services = [
    "Sofa Cleaning",
    "House Cleaning",
    "Carpet Cleaning",
    "Cabro Cleaning",
    "Tile Cleaning",
    "Window Cleaning",
    "Mattress Cleaning",
    "Office Cleaning",
    "Fumigation",
    "Post Construction Cleaning",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = `
*GLANZ FACILITY SERVICES - QUOTE REQUEST*

Name: ${form.name}
Phone: ${form.phone}
Location: ${form.location}
Service: ${form.service}

Details:
${form.message}

(Website Lead - Reply Fast)
    `;

    const url = `https://wa.me/254759993502?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-2">

      {/* FORM */}
      <div className="rounded-2xl border bg-slate-50 p-8 shadow-sm">

        <h2 className="text-xl font-bold mb-6">
          Request Quote Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input name="name" value={form.name} placeholder="Full Name" required onChange={handleChange} className="w-full rounded-xl border p-3" />
          <input name="phone" value={form.phone} placeholder="Phone Number" required onChange={handleChange} className="w-full rounded-xl border p-3" />
          <input name="location" value={form.location} placeholder="Location (e.g. Westlands, Nairobi)" required onChange={handleChange} className="w-full rounded-xl border p-3" />

          <select name="service" value={form.service} onChange={handleChange} className="w-full rounded-xl border p-3">
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>

          <textarea name="message" value={form.message} rows={4} placeholder="Describe your cleaning needs..." onChange={handleChange} className="w-full rounded-xl border p-3" />

          <button type="submit" className="w-full rounded-xl bg-slate-900 py-4 font-semibold text-white hover:bg-slate-800">
            Send via WhatsApp
          </button>

        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="space-y-6">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">What You Get</h2>
          <div className="grid gap-3">
            <div className="rounded-xl bg-slate-50 p-4">Fast WhatsApp response</div>
            <div className="rounded-xl bg-slate-50 p-4">On-site inspection</div>
            <div className="rounded-xl bg-slate-50 p-4">Custom pricing</div>
            <div className="rounded-xl bg-slate-50 p-4">Professional cleaners</div>
          </div>
        </div>

        <div className="rounded-2xl border bg-slate-900 text-white p-6">
          <h2 className="text-xl font-bold mb-4">Top Services</h2>
          <div className="grid grid-cols-2 gap-3 text-sm">
            {services.slice(0, 8).map((s) => (
              <div key={s} className="rounded-lg bg-slate-800 p-2">{s}</div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
