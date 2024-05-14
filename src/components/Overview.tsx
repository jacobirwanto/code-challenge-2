import overviewItem from "../utils/OverviewItem";

function Overview() {
  return (
    <div className="px-10 lg:px-36 py-8 text-white bg-gray-950">
      {overviewItem.map((item, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 gap-4 pb-4 lg:pb-0 lg:grid-cols-2 ${
            index === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-xs lg:text-lg">{item.description}</p>
          </div>
          <img
            src={item.image}
            alt={item.alt}
            className={`w-auto h-auto ${index === 1 ? "lg:order-first" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

export default Overview;
