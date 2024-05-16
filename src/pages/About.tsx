import {
  AboutPage,
  Footer,
  Navbar,
  OurTeam,
  Statistic,
  VisionMission,
} from "../components";
import HistoryAbout from "../components/HistoryAbout";

function About() {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <HistoryAbout />
      <VisionMission />
      <OurTeam />
      <Statistic />
      <Footer />
    </div>
  );
}

export default About;
