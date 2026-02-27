import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const siteUrl = "https://auracontour.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Salon in DHA Karachi | Aesthetic Clinic | Aura Contour",
    template: "%s | Aura Contour DHA Karachi",
  },
  description: "Karachi's premier aesthetic clinic in DHA Phase 8. Hydrafacial, PRP, laser hair removal, BB glow, facials & more. Luxury beauty salon near you. Book now.",
  keywords: [
    "best salon in DHA Karachi",
    "aesthetic clinic in Karachi",
    "Hydrafacial in Karachi",
    "PRP treatment in Karachi",
    "laser hair removal in Karachi",
    "facial treatments in DHA",
    "beauty salon near me Karachi",
    "BB glow Karachi",
    "dermaplaning Karachi",
    "hair treatment Karachi",
    "luxury salon DHA Phase 8",
  ],
  authors: [{ name: "Aura Contour", url: siteUrl }],
  creator: "Aura Contour",
  publisher: "Aura Contour",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Aura Contour",
    title: "Best Salon in DHA Karachi | Aesthetic Clinic | Aura Contour",
    description: "Karachi's premier aesthetic clinic in DHA Phase 8. Hydrafacial, PRP, laser hair removal, facials & luxury beauty services. Book your appointment.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Salon in DHA Karachi | Aura Contour Aesthetic Clinic",
    description: "Luxury beauty & aesthetic clinic in DHA Phase 8, Karachi. Hydrafacial, PRP, laser treatments & more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/aura-contour.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/favicon.ico"],
    apple: ["/favicon.ico"],
  },
  alternates: { canonical: siteUrl },
  category: "Beauty & Aesthetic",
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Aura Contour Aesthetic & Beauty Salon",
  description: "Karachi's premier luxury aesthetic clinic in DHA Phase 8. Hydrafacial, PRP, laser hair removal, BB glow, facials, hair treatments & advanced aesthetic procedures.",
  url: "https://auracontour.com",
  telephone: "+923373248248",
  email: "auracontour999@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Suit 203 2nd floor, Phot 126 C lane 1 A, Al Murtaza Commercial Phase VIII",
    addressLocality: "DHA Phase 8",
    addressRegion: "Karachi",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "24.8172",
    longitude: "67.0690",
  },
  openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], opens: "10:00", closes: "20:00" },
  priceRange: "$$",
  areaServed: { "@type": "City", name: "Karachi" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
