import ReactApexChart from "react-apexcharts";
import { useUniqueLabels } from "../hooks/useUniqueLabels";
import { useDataFilter } from "../hooks/useDataFilter";

export const RegionTreeMap = ({ filteredData }) => {
  const regionLabels = useUniqueLabels(filteredData, "region");

  const arrangedRegionList = regionLabels.map((region) => {
    const filterPerRegion = useDataFilter(filteredData, "region", region);
    return { x: region, y: filterPerRegion.length };
  });

  const series = [
    {
      data: [...arrangedRegionList],
    },
  ];
  const options = {
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
      },
      title: {
        text: "Events Per Region",
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px",
        },
        formatter: function (text, op) {
          return [text, op.value];
        },
        offsetY: -4,
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#CD363A",
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C",
              },
            ],
          },
        },
      },
    },
  };

  return (
    <div className="chart-card">
      <ReactApexChart
        options={options.options}
        series={series}
        type="treemap"
        height={500}
        width={800}
      />
    </div>
  );
};
