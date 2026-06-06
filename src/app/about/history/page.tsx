import { Navbar, Footer } from "@/components/layout";

export default function HistoryPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-cream flex items-center justify-center pt-20">
        <div className="text-center px-6">
          <p className="font-body text-[11px] tracking-[0.35em] uppercase text-primary/50 mb-3">Coming Soon</p>
          <h1 className="font-heading font-bold text-primary text-4xl mb-4">Our History</h1>
          <p className="font-body text-neutral/60 max-w-md mx-auto">This page is under construction. Please check back soon.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
