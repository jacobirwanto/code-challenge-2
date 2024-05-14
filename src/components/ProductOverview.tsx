import imgproduct from "../assets/overviewimg4.jpg";

function ProductOverview() {
  return (
    <div className="py-8 px-6 lg:px-24 grid grid-cols-1 lg:grid-cols-3 gap-4 text-gray-100 bg-gray-950">
      <div className="col-span-2 lg:col-span-2">
        <h2 className="text-lg lg:text-7xl font-semibold mb-8">What We Do?</h2>
        <img
          src={imgproduct}
          alt="Product Image"
          className="w-full h-auto lg:w-auto lg:h-auto"
          loading="lazy"
        />
      </div>
      <div className="col-span-1 lg:col-span-1 flex flex-col justify-center">
        <ul className="list-outside pl-4 lg:space-y-10 text-sm lg:text-2xl text-gray-300">
          <li>GPU Development</li>
          <li>Advanced Manufacturing</li>
          <li>Industry Partners</li>
        </ul>
      </div>
    </div>
  );
}

export default ProductOverview;
