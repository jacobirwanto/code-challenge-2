import statisticsData from "../utils/StatisticData";
import { IconType } from "react-icons";

interface Statistic {
  id: number;
  label: string;
  value: string;
  icon: IconType;
}

function Statistics() {
  const renderCard = (stat: Statistic) => {
    const IconComponent = stat.icon;
    return (
      <div
        key={stat.id}
        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center text-center min-w-[150px] max-w-[200px]"
      >
        <IconComponent className="w-12 h-12 mb-4 text-blue-500" />
        <p className="text-xl font-semibold text-blue-500">{stat.label}</p>
        <p className="text-lg font-light text-gray-300">{stat.value}</p>
      </div>
    );
  };

  return (
    <div className="overflow-x-auto bg-gray-950 py-8">
      <div className="px-8 lg:px-8">
        <div className="flex flex-nowrap lg:flex-wrap justify-start gap-4 lg:justify-center">
          {statisticsData.map(renderCard)}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
