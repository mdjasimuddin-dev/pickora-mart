import AwardWinnerProduct from '../../Components/Home/AwardWinnerProduct';
import BestSelling from '../../Components/Home/BestSelling';
import BrandPartners from '../../Components/Home/brandPartners';
import BrandTrust from '../../Components/Home/BrandTrust';
import CategoryTab from '../../Components/Home/CategoryTab';
import DailyFlashSale from '../../Components/Home/DailyFlashSale';
import FeaturedCategories from '../../Components/Home/FeaturedCategories';
import FlashSaleProducts from '../../Components/Home/FlashSaleProducts';
import HeroSection from '../../Components/Home/HeroSection';
import PromoBanner from '../../Components/Home/PromoBanner';
import { TestimonialsSection } from '../../Components/Home/TestimonialsSection';

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Featured Categories (2 Columns on Large Screens) */}
          <div className="lg:col-span-2">
            <FeaturedCategories />
          </div>

          {/* Daily Flash Sale (1 Column on Large Screens) */}
          <div className="lg:col-span-1">
            <DailyFlashSale />
          </div>
        </div>
      </div>
      <FlashSaleProducts />
      <AwardWinnerProduct />
      <BestSelling />
      <PromoBanner />
      <CategoryTab />
      <BrandPartners />
      <TestimonialsSection />
      <BrandTrust />
    </div>
  );
}
