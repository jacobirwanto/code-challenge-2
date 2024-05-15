interface ProductCardProps {
  gpu: {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
  };
  onViewDetails: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ gpu, onViewDetails }) => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
      <img
        src={gpu.image}
        alt={gpu.name}
        className="w-full h-40 object-contain object-center"
      />
      <div className="p-4">
        <h3 className="text-gray-300 text-xl font-semibold mb-2">{gpu.name}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">
          {gpu.description}
        </p>
        <p className="text-gray-300 text-lg font-semibold mb-2">{gpu.price}</p>
        <button
          onClick={onViewDetails}
          className="btn-anim bg-blue-500 hover:bg-blue-600 text-gray-100 text-xs py-2 px-2 rounded-full focus:outline-none"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
