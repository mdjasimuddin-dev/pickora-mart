import BestSellers from '../../Components/Home/BestSellers';
import BrandTrust from '../../Components/Home/BrandTrust';
import FeaturedCategories from '../../Components/Home/FeaturedCategories';
import FlashSale from '../../Components/Home/FlashSale';
import HeroSection from '../../Components/Home/HeroSection';
import PromoBanner from '../../Components/Home/PromoBanner';
import { BrandLogosSection, TestimonialsSection } from '../../Components/Home/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <FeaturedCategories />
      <FlashSale />
      <PromoBanner />
      <BestSellers />
      <TestimonialsSection />
      <BrandLogosSection />
      <BrandTrust />
    </div>
  );
}
