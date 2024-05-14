import {
  Navbar,
  Hero,
  Overview,
  ProductOverview,
  OurTeam,
  Footer,
  Testimonials,
} from "../components";

function Home() {
  return (
    <div className="lg:animate-fadeIn">
      <Navbar />
      <Hero />
      <Overview />
      <ProductOverview />
      <OurTeam />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
