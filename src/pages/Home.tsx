import {
  Navbar,
  Hero,
  Overview,
  ProductOverview,
  OurTeam,
  Footer,
} from "../components";
import Testimonials from "../components/Testimonials";

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
