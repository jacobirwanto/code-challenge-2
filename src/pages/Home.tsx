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
    <div>
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
