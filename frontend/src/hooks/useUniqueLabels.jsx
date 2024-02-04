export const regexMatch = (year) => {
  return year?.match(/[0-9]{4}/)[0];
};

export const useUniqueLabels = (filteredData, filterValue) => {
  const uniqueLabels = [
    ...new Set(
      filteredData.flatMap((item) =>
        item[filterValue]
          ? filterValue === "published"
            ? [regexMatch(item[filterValue])]
            : [item[filterValue]]
          : []
      )
    ),
  ];
  return uniqueLabels;
};
