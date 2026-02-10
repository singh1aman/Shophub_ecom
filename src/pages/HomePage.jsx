import HeroBanner from "../components/banner/HeroBanner";
import ShopByCategory from "../components/heropagecomps/ShopByCategory";
import WhyShop from "../components/heropagecomps/WhyShop";
import ReviewsSection from "../components/heropagecomps/ReviewsSection";

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <HeroBanner />
      <ShopByCategory />
      <WhyShop />
      <ReviewsSection />
    </div>
  );
};
export default HomePage;
