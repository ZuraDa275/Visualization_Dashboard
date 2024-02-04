import React from "react";
import { Chart } from "react-google-charts";
import { useUniqueLabels } from "../hooks/useUniqueLabels";
import { useDataFilter } from "../hooks/useDataFilter";

export const CountryGeoChart = ({ filteredData }) => {
  const countryLabels = useUniqueLabels(filteredData, "country");

  const arrangedCountryList = countryLabels.map((country) => {
    const filterPerCountry = useDataFilter(filteredData, "country", country);
    return [country, filterPerCountry.length];
  });

  const data = [["Country", "Events"], ...arrangedCountryList];

  return (
    <>
      <Chart
        chartEvents={[
          {
            eventName: "select",
            callback: ({ chartWrapper }) => {
              const chart = chartWrapper.getChart();
              const selection = chart.getSelection();
              if (selection.length === 0) return;
              const region = data[selection[0].row + 1];
              console.log("Selected : " + region);
            },
          },
        ]}
        chartType="GeoChart"
        width="100%"
        height="800px"
        data={data}
      />
    </>
  );
};
