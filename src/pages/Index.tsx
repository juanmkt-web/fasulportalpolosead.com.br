import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import CoursesSection from "@/components/CoursesSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
const Index = () => {
  return <div className="min-h-screen">
      <Header className="bg-gray-900 bg-[0C2039]" />
      <main>
        <HeroSection />
        <ObjectionsSection />
        <CoursesSection />
        <SocialProofSection />
        <OfferSection />
        <FAQSection />
      </main>
      <Footer />
    </div>;
};
export default Index;