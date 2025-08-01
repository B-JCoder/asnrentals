import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASN Car Rentals - Convenient Auto Rentals in Georgia",
  description:
    "Experience comfort, flexibility, and affordability with ASN Car Rentals. No credit check required, flexible terms, and competitive rates for all your transportation needs in Georgia.",
  keywords: [
    "ASN Car Rentals",
    "Georgia car rentals",
    "Affordable auto rental",
    "No credit check car rental",
    "Flexible car rental",
    "Cheap car rental Georgia",
    "Convenient vehicle rental",
    "Car hire Atlanta",
  ],
  authors: [{ name: "The Linkage Digital", url: "https://thelinkagedigital.com/" }],
  creator: "ASN Car Rentals",
  metadataBase: new URL("https://asnrentals.com/"),
  openGraph: {
    title: "ASN Car Rentals - Convenient Auto Rentals in Georgia",
    description:
      "Rent with ease. Affordable, flexible, and no credit check required. Serving Georgia with top-tier customer service and vehicles.",
    url: "https://asnrentals.com/",
    siteName: "ASN Car Rentals",
    images: [
      {
        url: "/images/asn-logo.jpg", 
        width: 800,
        height: 600,
        alt: "ASN Car Rentals Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/asn-logo.jpg",
    shortcut: "/images/asn-logo.jpg",
    apple: "/images/asn-logo.jpg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
