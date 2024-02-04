import { useDashboardContext } from "../DashboardContext";

export const useChosenFilter = (chosenFilterOption, mainFilter) => {
  const { data } = useDashboardContext();
  if (!chosenFilterOption) return data;
  return data.filter(
    (item) => item[mainFilter.value] === chosenFilterOption.value
  );
};
