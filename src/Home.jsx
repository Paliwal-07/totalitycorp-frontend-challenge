import HeroSection from "./components/HeroSection";
import FeatureProduct from "./components/FeatureProduct";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {

  const herodata = {
    name: "tech mart",
  };

  return (
    <>
      <HeroSection data={herodata} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
    
  )
};

export default Home;