import { regexMatch } from "./useUniqueLabels";

export const useDataFilter = (data, filterValue, labelValue) => {
  const filterPerCountry = data.filter(
    (data) =>
      (filterValue === "published"
        ? regexMatch(data[filterValue])
        : data[filterValue]) === labelValue
  );
  return filterPerCountry;
};
