import { UNIT_RATIOS } from "./unitRatios";

export const convertUnits = (
  value: string,
  category: keyof typeof UNIT_RATIOS,
  fromUnit: string,
  toUnit: string,
) => {
  const numValue = parseFloat(value.replace(",", ".")); // Byt ut komma tecken till punkt för att hantera decimaler korrekt
  if (!value || isNaN(numValue)) return "";

  const ratios = UNIT_RATIOS[category];

  const fromRatio = (ratios as any)[fromUnit];
  const toRatio = (ratios as any)[toUnit];

  if (!fromRatio || !toRatio) return "";

  const result = numValue * (fromRatio / toRatio);

  // Om resultatet är väldigt litet (t.ex. miles), visa fler decimaler
  if (result < 0.01 && result > 0) {
    return result.toFixed(5);
  }

  return Number(result.toFixed(2)).toString();
};
