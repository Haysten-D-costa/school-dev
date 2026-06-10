import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  SchoolStats,
  PrincipalMessage,
  Events,
  AcademicsPreview,
  GalleryStrip,
  Testimonials,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SchoolStats />
        <PrincipalMessage />
        <Events />
        <AcademicsPreview />
        <Testimonials />
        <GalleryStrip />
      </main>
      <Footer />
    </>
  );
}
