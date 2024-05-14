import profile1 from "../assets/profile1.jpeg";
import profile2 from "../assets/profile2.jpeg";
import profile3 from "../assets/profile3.jpeg";
import profile4 from "../assets/profile4.jpeg";
import profile5 from "../assets/profile5.jpeg";

interface TeamMember {
  name: string;
  position: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: "Dan Cook", position: "CTO", image: profile3 },
  { name: "Yu Ho", position: "COO", image: profile2 },
  { name: "Ho Li Shet", position: "CEO", image: profile1 },
  { name: "Moe Lester", position: "CMO", image: profile4 },
  { name: "F. You", position: "CFO", image: profile5 },
];

export default teamMembers;
