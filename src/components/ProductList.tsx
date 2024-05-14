import heroImg2 from "../assets/hero2.jpg";

function ProductList() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center px-8 text-white">
        <h1 className="text-xl lg:text-5xl font-bold mb-4 font-maximus">
          #1 Best-Selling GPU
        </h1>
        <p className="text-xs lg:text-sm lg:mb-4">
          Discover SNSV's Next-Generation GPU Technology
        </p>
        <p className="text-xs lg:text-lg lg:mb-4 italic">
          Gaming GPUs | Professional GPUs | Data Center GPUs
        </p>
      </div>

      <img src={heroImg2} alt="company banner" className="w-full h-auto" />
    </div>
  );
}

export default ProductList;
