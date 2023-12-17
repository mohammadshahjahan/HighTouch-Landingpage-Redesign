import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SecurityCertifications from "@/components/SecurityCertifications";
import Services from "@/components/Services";
import Services2 from "@/components/Services2";

export default function Home() {
  return (
    <main>
      <div>
        <Navbar />
        <Hero />
        <Companies />
        <Services
          key={"1"}
          blockQuote="COMPOSABLE CUSTOMER DATA PLATFORM"
          heading="Fast, flexible, affordable CDP alternative"
          content="Distribute customer audiences anywhere you need them with a no-code interface built for marketers. Hightouch is warehouse-first, making it more flexible, more powerful, and easier to set up than a legacy CDP."
          linkText="Learn more about Customer Studio"
          videoSrc="defineAudience.webm"
        />
        <Services2
          blockQuote="REVERSE ETL PLATFORM"
          heading="Sync data to any app without engineering tickets or APIs"
          content="Tell us what data you want and where you want it. Hightouch automatically does the rest while providing version control, observability, alerting, and more."
          linkText="Learn more about Reverse ETL"
          videoSrc="syncdata.webm"
        />
        <Services
          key={"3"}
          blockQuote="COMPOSABLE CUSTOMER DATA PLATFORM"
          heading="Fast, flexible, affordable CDP alternative"
          content="Distribute customer audiences anywhere you need them with a no-code interface built for marketers. Hightouch is warehouse-first, making it more flexible, more powerful, and easier to set up than a legacy CDP."
          linkText="Learn more about Customer Studio"
          videoSrc="toolkit.webm"
        />
        <SecurityCertifications />
        <Footer />
      </div>
    </main>
  );
}
