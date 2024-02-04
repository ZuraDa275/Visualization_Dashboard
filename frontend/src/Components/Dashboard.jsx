import { useState } from "react";
import Chart from "chart.js/auto";
import { SelectFilter } from "./SelectFilter.jsx";
import { useChosenFilter } from "../hooks/useChosenFIlter.jsx";
import { IntensityAndRelevanceAndLikelihoodLineChart } from "./IntensityAndRelevanceAndLikelihoodLineChart.jsx";
import { YearPieChart } from "./YearPieChart.jsx";
import { TopicHorizontalChart } from "./TopicHorizontalChart.jsx";
import "../App.css";
import { CountryGeoChart } from "./CountryGeoChart.jsx";
import { RegionTreeMap } from "./RegionTreeMap.jsx";

const Dashboard = () => {
  const [chosenFilterOption, setChosenFilterOption] = useState(null);
  const [mainFilter, setMainFilter] = useState(null);
  const filteredData = useChosenFilter(chosenFilterOption, mainFilter);

  return (
    <div className="dashboard-container">
      <SelectFilter
        setChosenFilterOption={(data) => setChosenFilterOption(data)}
        setMainFilter={(data) => setMainFilter(data)}
        mainFilter={mainFilter}
      />
      <div className="charts-container">
        <IntensityAndRelevanceAndLikelihoodLineChart
          filteredData={filteredData}
        />
        <YearPieChart filteredData={filteredData} />
        <CountryGeoChart filteredData={filteredData} />
        <TopicHorizontalChart filteredData={filteredData} />
        <RegionTreeMap filteredData={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
