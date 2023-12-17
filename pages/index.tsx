import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Companies />
        <Footer />
      </div>
    </main>
  );
}
