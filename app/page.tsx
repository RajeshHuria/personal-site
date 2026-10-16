import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Focus from "@/components/Focus";
import Writing from "@/components/Writing";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: "#0f172a", color: "#f1f5f9" }} className="min-h-screen">
        <Hero />
        <Projects />
        <Focus />
        <Writing />
        <Footer />
      </main>
    </>
  );
}