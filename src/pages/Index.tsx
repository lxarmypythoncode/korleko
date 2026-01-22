import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProfileSection from '@/components/ProfileSection';
import ServicesSection from '@/components/ServicesSection';
import NewsSection from '@/components/NewsSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSection />
        <ServicesSection />
        <NewsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
