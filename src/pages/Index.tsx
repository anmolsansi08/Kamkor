import { FallingPetals } from '@/components/valentine/FallingPetals';
import { HeroSection } from '@/components/valentine/HeroSection';
import { PersonalMessageSection } from '@/components/valentine/PersonalMessageSection';
import { PhotoGallery } from '@/components/valentine/PhotoGallery';
import { SurpriseSection } from '@/components/valentine/SurpriseSection';
import { Footer } from '@/components/valentine/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Falling rose petals throughout */}
      <FallingPetals />
      
      {/* Background texture overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+CjxyZWN0IHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0idHJhbnNwYXJlbnQiPjwvcmVjdD4KPGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMC41IiBmaWxsPSIjOTk4ODc3IiBvcGFjaXR5PSIwLjMiPjwvY2lyY2xlPgo8L3N2Zz4=')]" />

      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <PersonalMessageSection />
        <PhotoGallery />
        <SurpriseSection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
