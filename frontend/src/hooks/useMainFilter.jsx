import { useDashboardContext } from "../DashboardContext";
import { useUniqueLabels } from "./useUniqueLabels";

export const useMainFilter = () => {
  const { data } = useDashboardContext();

  return (mainFilter) =>
    [...useUniqueLabels(data, mainFilter)].map((option) => ({
      value: option,
      label: option,
    }));
};
