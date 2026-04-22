import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glanz Facility Services",
  description: "Professional cleaning services in Nairobi Kenya",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}