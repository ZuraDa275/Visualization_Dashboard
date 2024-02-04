import randomColor from "randomcolor";

export const useRandomColor = (lengthOfArray) => {
  let arrayWithRandomColors = [];
  for (let i = 0; i < lengthOfArray; i++) {
    arrayWithRandomColors.push(randomColor());
  }

  return arrayWithRandomColors;
};
