
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import MoneyTypesSection from "@/components/MoneyTypesSection";
import HistoricalMoneySection from "@/components/HistoricalMoneySection";
import StorageSection from "@/components/StorageSection";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <MoneyTypesSection />
        <HistoricalMoneySection />
        <StorageSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
