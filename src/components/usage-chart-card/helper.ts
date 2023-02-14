import numbro from "numbro";


export const averageNumber = (number: number) => {
  if (number < 10000) return number;
  return numbro(number).format({ average: true,
    spaceSeparated: false,
    totalLength: 2 });
};
