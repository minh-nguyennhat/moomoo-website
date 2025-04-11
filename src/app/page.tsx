import { HeroSection } from '@/components/hero-section';
import { AppSection } from '@/components/app-section';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />
      <AppSection />
    </div>
  );
}
