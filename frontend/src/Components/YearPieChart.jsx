import { Pie } from "react-chartjs-2";
import { useUniqueLabels } from "../hooks/useUniqueLabels";
import { useRandomColor } from "../hooks/useRandomColor";
import { useDataFilter } from "../hooks/useDataFilter";

export const YearPieChart = ({ filteredData }) => {
  const publishedYearLabels = useUniqueLabels(filteredData, "published").sort(
    (a, b) => a - b
  );

  const eventPublishedCountPerYear = publishedYearLabels.map((pYear) => {
    return useDataFilter(filteredData, "published", pYear).length;
  });

  const arrayWithRandomColors = useRandomColor(publishedYearLabels.length);

  const pieChartData = {
    labels: publishedYearLabels,
    datasets: [
      {
        label: "Events Published Per Year",
        data: eventPublishedCountPerYear,
        backgroundColor: arrayWithRandomColors,
        borderColor: arrayWithRandomColors,
      },
    ],
  };
  const options = {
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            font: {
              size: 10,
            },
          },
        },
        title: {
          display: true,
          text: "Events Per Year",
        },
      },
    },
  };

  return (
    <div style={{ width: "30%" }} className="chart-card">
      <Pie data={pieChartData} options={options.options} />
    </div>
  );
};
