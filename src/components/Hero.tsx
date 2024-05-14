import heroImg from "../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 text-white">
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 font-maximus">
          SNSVTeK Computer Inc.
        </h1>
        <p className="text-lg mb-4">World-Leading GPU Manufacturer</p>
        <Link
          to="/products"
          className="btn-anim px-4 py-2 bg-blue-600 text-white font-bold rounded hover:bg-blue-700"
        >
          Explore Products
        </Link>
      </div>

      <img src={heroImg} alt="company banner" className="w-full h-auto" />
    </div>
  );
}

export default Hero;
