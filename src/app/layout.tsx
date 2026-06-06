import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "St. Joseph's High School",
    template: "%s | St. Joseph's High School",
  },
  description:
    "St. Joseph's High School, Mapusa, Goa — Nurturing young minds with quality education, strong values, and a vibrant school community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,400&family=Nunito:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
