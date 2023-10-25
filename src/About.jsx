import HeroSection from "./components/HeroSection";

const About = () => {

  const herodata = {
    name: "Tech Store",
  };

  return (
    <>
      <HeroSection data={herodata} />
    </>
  )
}

export default About;