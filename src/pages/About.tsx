import { AboutPage, Footer, Navbar, VisionMission } from "../components";
import HistoryAbout from "../components/HistoryAbout";

function About() {
  return (
    <div>
      <Navbar />
      <AboutPage />
      <HistoryAbout />
      <VisionMission />
      <Footer />
    </div>
  );
}

export default About;
