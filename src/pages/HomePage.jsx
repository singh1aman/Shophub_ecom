import HeroBanner from "../components/banner/HeroBanner";
import BrandAnthem from "../components/banner/BrandAnthem";
import ShopByCategory from "../components/heropagecomps/ShopByCategory";
import FeatureSpotlight from "../components/heropagecomps/FeatureSpotlight";
import WhyShop from "../components/heropagecomps/WhyShop";
import ReviewsSection from "../components/heropagecomps/ReviewsSection";
import TrendingProducts from "@/components/heropagecomps/TrendingProducts";
import Newsletter from "../components/heropagecomps/Newsletter";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      {/* <BrandAnthem /> */}
      <HeroBanner />
      <ShopByCategory />
      <TrendingProducts />
      <FeatureSpotlight />
      <WhyShop />
      <ReviewsSection />
      <Newsletter />
    </div>
  );
};
export default HomePage;
