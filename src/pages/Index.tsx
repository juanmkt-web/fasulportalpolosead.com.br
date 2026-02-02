import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ObjectionsSection from "@/components/ObjectionsSection";
import CoursesSection from "@/components/CoursesSection";
import SocialProofSection from "@/components/SocialProofSection";
import OfferSection from "@/components/OfferSection";
import Footer from "@/components/Footer";
import Faculty from "@/components/Faculty";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
const Index = () => {
  return <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ObjectionsSection />
        <CoursesSection />
        <SocialProofSection />
        <OfferSection />
        <Faculty />
        <Blog />
        <FAQ />
      </main>
      <Footer />
    </div>;
};
export default Index;
