import { CgClose } from "react-icons/cg";
import React, { useState } from "react";
import heroImg3 from "../assets/hero3.jpg";
import ProductCard from "./ProductCard";
import GpuItems from "../utils/GpuItems";

interface GPU {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

const ProductList: React.FC = () => {
  const [selectedGPU, setSelectedGPU] = useState<GPU | null>(null);

  const handleViewDetails = (gpu: GPU) => {
    setSelectedGPU(gpu);
  };

  const handleCloseModal = () => {
    setSelectedGPU(null);
  };

  return (
    <div className="bg-gray-950 px-2 lg:px-14">
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center px-4 lg:px-8 text-white">
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
        <img src={heroImg3} alt="company banner" className="w-full h-auto" />
      </div>

      <section className="py-8 mb-12">
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Gaming GPUs
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {GpuItems.gamingGPUs.map((gpu) => (
            <ProductCard
              key={gpu.id}
              gpu={gpu}
              onViewDetails={() => handleViewDetails(gpu)}
            />
          ))}
        </div>
      </section>
      <section className="mb-12">
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Professional GPUs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {GpuItems.professionalGPUs.map((gpu) => (
            <ProductCard
              key={gpu.id}
              gpu={gpu}
              onViewDetails={() => handleViewDetails(gpu)}
            />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-gray-100 text-center text-2xl lg:text-4xl font-bold mb-8">
          Data Center GPUs
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {GpuItems.dataCenterGPUs.map((gpu) => (
            <ProductCard
              key={gpu.id}
              gpu={gpu}
              onViewDetails={() => handleViewDetails(gpu)}
            />
          ))}
        </div>
      </section>

      {selectedGPU && (
        <div className="px-8 fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-gray-600 p-8 max-w-md rounded-lg shadow-lg">
            <h2 className="text-gray-300 text-xl font-semibold mb-4">
              {selectedGPU.name}
            </h2>
            <p className="text-gray-300 text-sm mb-4">
              {selectedGPU.description}
            </p>
            <p className="text-gray-300 text-lg font-semibold mb-4">
              {selectedGPU.price}
            </p>
            <img
              src={selectedGPU.image}
              alt={selectedGPU.name}
              className="w-full h-40 object-contain object-center mb-4"
            />
            <CgClose
              size={25}
              className="btn-anim hover:scale-150 text-white"
              onClick={handleCloseModal}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
