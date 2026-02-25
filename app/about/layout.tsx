import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Karachi's premier aesthetic clinic in DHA Phase 8. Expert facials, Hydrafacial, PRP, laser treatments. Discover our story & commitment to luxury beauty.",
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
