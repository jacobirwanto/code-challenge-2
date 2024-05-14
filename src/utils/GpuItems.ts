import ggpu1 from "../assets/ggpu1.png";
import ggpu2 from "../assets/ggpu2.png";
import ggpu3 from "../assets/ggpu3.png";
import ggpu4 from "../assets/ggpu4.png";
import ggpu5 from "../assets/ggpu5.png";
import ggpu6 from "../assets/ggpu6.png";
import pgpu1 from "../assets/pgpu1.png";
import pgpu2 from "../assets/pgpu2.png";
import dgpu1 from "../assets/dgpu1.png";

const gamingGPUs = [
  {
    id: 1,
    name: "SNSV G-Force XTX™ 4090",
    description:
      "Super OC Edition with DLSS 3 and chart-topping thermal performance.",
    price: "$1499",
    image: ggpu1,
  },
  {
    id: 2,
    name: "SNSV G-Force XTX™ 4070",
    description:
      "OC Edition with lower temps, and enhanced durability and longevity",
    price: "$649",
    image: ggpu2,
  },
  {
    id: 3,
    name: "SNSV G-Force XTX™ 4060",
    description:
      "Two powerful Axial-tech fans and a 2-slot design for broad compatibility",
    price: "$309",
    image: ggpu3,
  },
  {
    id: 4,
    name: "SNSV Radion™ XR 7900",
    description:
      "Armed to dish out frame rates and advanced cooling to keep your system's vitals in check.",
    price: "$799",
    image: ggpu4,
  },
  {
    id: 5,
    name: "SNSV Radion™ XR 7800",
    description:
      "Optimized inside and out for lower temps and maximize durability",
    price: "$499",
    image: ggpu5,
  },
  {
    id: 6,
    name: "SNSV Radion™ XR 7600",
    description:
      "Brings ultra high frame rates for today's most popular titles for immersive and seamless gaming",
    price: "$339",
    image: ggpu6,
  },
];

const professionalGPUs = [
  {
    id: 1,
    name: "SNSV ProDesign G-Force XTX™ 4070",
    description:
      "Brings elegant and minimalist style to empower creator PC builds with full-scale",
    price: "$749",
    image: pgpu1,
  },
  {
    id: 2,
    name: "SNSV LowProDesign G-Force XTX™ 4060",
    description:
      "Big productivity in a compact design, offering exceptional performance and efficiency",
    price: "$349",
    image: pgpu2,
  },
];

const dataCenterGPUs = [
  {
    id: 1,
    name: "SNSV XTX™ 6000",
    description:
      "Provide what you need to succeed in today's ultra-challenging business environment.",
    price: "$9929",
    image: dgpu1,
  },
];

export default { gamingGPUs, professionalGPUs, dataCenterGPUs };
