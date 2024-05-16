import historyData from "../utils/HistoryData";
import milestones from "../assets/milestones.svg";

function HistoryAbout() {
  return (
    <div className="bg-gray-950 py-16 px-4 lg:px-48">
      <h2 className="text-gray-300 text-center text-2xl lg:text-4xl font-bold mb-12">
        Our History
      </h2>
      <div className="overflow-x-auto">
        <div className="flex lg:grid lg:grid-cols-2 gap-8 min-w-[1200px] lg:min-w-0">
          {historyData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-80 lg:w-auto flex-shrink-0"
            >
              <img
                src={item.image}
                alt={`History ${index + 1}`}
                className="w-full h-auto rounded-lg"
              />
              <p className="text-gray-300 mt-4 text-xs lg:text-md">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <img
        src={milestones}
        alt="company-milestones"
        className="pt-12 lg:px-24 lg:pt-24 w-full h-auto"
      />
    </div>
  );
}

export default HistoryAbout;
