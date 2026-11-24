import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Field Guide | Open-source tools for search and content",
    template: "%s | Field Guide",
  },
  description:
    "A practical, beginner-friendly guide to open-source tools for SEO, publishing, analytics, and content work.",
  applicationName: "Field Guide",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="dark" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
