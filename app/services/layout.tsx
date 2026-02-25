import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description: "Facial treatments in DHA Karachi. Hydrafacial, PRP, laser hair removal, BB glow, dermaplaning, hair & nail services. View our full menu & book.",
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
