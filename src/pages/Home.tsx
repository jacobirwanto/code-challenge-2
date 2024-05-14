import {
  Navbar,
  Hero,
  Overview,
  ProductOverview,
  OurTeam,
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
    </div>
  );
}

export default Home;
