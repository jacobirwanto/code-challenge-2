import heroImg2 from "../assets/hero2.jpg";
import ProductCard from "./ProductCard";
import GpuItems from "../utils/GpuItems";

function ProductList() {
  return (
    <div className="bg-gray-950 px-2 lg:px-14">
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

      <section className="py-8 mb-12">
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Gaming GPUs
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GpuItems.gamingGPUs.map((gpu) => (
            <ProductCard key={gpu.id} gpu={gpu} />
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Professional GPUs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {GpuItems.professionalGPUs.map((gpu) => (
            <ProductCard key={gpu.id} gpu={gpu} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Data Center GPUs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {GpuItems.dataCenterGPUs.map((gpu) => (
            <ProductCard key={gpu.id} gpu={gpu} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProductList;
