import {
  Navbar,
  Hero,
  Overview,
  ProductOverview,
  OurTeam,
} from "../components";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Overview />
      <ProductOverview />
      <OurTeam />
    </div>
  );
}

export default Home;
