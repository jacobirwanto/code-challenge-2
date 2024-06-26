import heroImg2 from "../assets/hero2.png";

function AboutPage() {
  return (
    <div className="bg-gray-950">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 lg:px-8 text-white">
          <h1 className="text-md lg:text-5xl font-bold mb-4 font-maximus">
            Explore the SNSV Journey
          </h1>
          <p className="text-xs lg:text-lg lg:mb-4">
            Building Dreams, Crafting Tomorrow
          </p>
        </div>
        <img src={heroImg2} alt="company banner" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default AboutPage;
