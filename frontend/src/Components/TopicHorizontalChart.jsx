import { Bar } from "react-chartjs-2";
import { useUniqueLabels } from "../hooks/useUniqueLabels";
import ChartOptions from "../utils/ChartOptions";
import { useDataFilter } from "../hooks/useDataFilter";

export const TopicHorizontalChart = ({ filteredData }) => {
  const topicLabels = useUniqueLabels(filteredData, "topic");

  const eventPerTopicsCount = topicLabels.map((topic) => {
    return useDataFilter(filteredData, "topic", topic).length;
  });

  const scatterChartData = {
    labels: topicLabels,
    datasets: [
      {
        label: "Events Per Topic",
        data: eventPerTopicsCount,
        backgroundColor: "#FFCD56",
        borderColor: "#FFCD56",
      },
    ],
  };

  return (
    <div style={{ width: "50%" }} className="chart-card">
      <Bar data={scatterChartData} options={ChartOptions.options} />
    </div>
  );
};
