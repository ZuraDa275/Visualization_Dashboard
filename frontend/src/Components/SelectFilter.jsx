import Select from "react-select";
import { useMainFilter } from "../hooks/useMainFilter";
import { useEffect, useRef, useState } from "react";

const mainFilterOptions = [
  {
    value: "end_year",
    label: "End Year",
  },
  {
    value: "topic",
    label: "Topic",
  },
  {
    value: "sector",
    label: "Sector",
  },
  {
    value: "region",
    label: "Region",
  },
  {
    value: "pestle",
    label: "Pestle",
  },
  {
    value: "source",
    label: "Source",
  },
  {
    value: "country",
    label: "Country",
  },
];

export const SelectFilter = ({
  setChosenFilterOption,
  setMainFilter,
  mainFilter,
}) => {
  const chosenFilterOptions = useMainFilter();
  const [options, setOptions] = useState([]);
  const selectFilterRef = useRef(null);

  useEffect(() => {
    if (mainFilter) {
      const chosenData = chosenFilterOptions(mainFilter.value);
      setOptions(
        mainFilter.value === "end_year"
          ? chosenData.sort((a, b) => a.value - b.value)
          : chosenData
      );
    }
  }, [mainFilter]);

  const handleMainFilterChange = (data) => {
    setMainFilter(data);
    if (selectFilterRef.current) {
      selectFilterRef.current.clearValue();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        marginBottom: "2em",
      }}
    >
      <Select
        options={options}
        onChange={setChosenFilterOption}
        placeholder={
          mainFilter ? `Select ${mainFilter.value}` : "No Filter Selected"
        }
        ref={selectFilterRef}
      />
      <Select
        options={mainFilterOptions}
        onChange={handleMainFilterChange}
        placeholder="Filter By"
      />
    </div>
  );
};
