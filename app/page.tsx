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
      <main className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 min-h-screen">
        <Hero />
        <Projects />
        <Focus />
        <Writing />
        <Footer />
      </main>
    </>
  );
}