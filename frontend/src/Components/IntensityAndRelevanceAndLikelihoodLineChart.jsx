import { Line } from "react-chartjs-2";
import { useUniqueLabels } from "../hooks/useUniqueLabels";
import ChartOptions from "../utils/ChartOptions";
import { useDataFilter } from "../hooks/useDataFilter";

export const IntensityAndRelevanceAndLikelihoodLineChart = ({
  filteredData,
}) => {
  const pestleLabels = useUniqueLabels(filteredData, "pestle");

  const averageLikelihoodAndRelevance = pestleLabels.map((pestle) => {
    const pestleData = useDataFilter(filteredData, "pestle", pestle);
    const dataLength = pestleData.length;

    const { intensitySum, relevanceSum, likelihoodSum } = pestleData.reduce(
      (sum, data) => {
        sum.intensitySum += data.intensity;
        sum.relevanceSum += data.relevance;
        sum.likelihoodSum += data.likelihood;
        return sum;
      },
      { intensitySum: 0, relevanceSum: 0, likelihoodSum: 0 }
    );
    return {
      intensitySum: intensitySum / dataLength,
      relevanceSum: relevanceSum / dataLength,
      likelihoodSum: likelihoodSum / dataLength,
    };
  });
  const lineChartData = {
    labels: pestleLabels,
    datasets: [
      {
        label: "Average Intensity",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132)",
        data: averageLikelihoodAndRelevance.map((item) => item.intensitySum),
      },
      {
        label: "Average Relevance",
        backgroundColor: "#FFCD56",
        borderColor: "#FFCD56",
        borderWidth: 1,
        data: averageLikelihoodAndRelevance.map((item) => item.relevanceSum),
      },
      {
        label: "Average Likelihood",
        backgroundColor: "#36A2EB",
        borderColor: "#36A2EB",
        borderWidth: 1,
        data: averageLikelihoodAndRelevance.map((item) => item.likelihoodSum),
      },
    ],
  };

  return (
    <div style={{ width: "60%" }} className="chart-card">
      <Line data={lineChartData} options={ChartOptions.options} />
    </div>
  );
};
