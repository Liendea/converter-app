export const UNIT_RATIOS = {
  baking: {
    ml: 1,
    cl: 10,
    dl: 100,
    liter: 1000,
    teaspoon: 5, // tsk
    tablespoon: 15, // msk
    cup: 236.59, // US Cup (Standard)
    oz: 29.57, // Fluid Ounce
    pint: 473.18, // US Pint
    quarts: 946.35, // US Quart
    gallon: 3785.41, // US Gallon
  },
  weight: {
    gram: 1, // Basenhet
    hg: 100, // Hektogram
    kg: 1000, // Kilogram
    lbs: 453.592, // Pound
    ounce: 28.3495, // Ounce
    stone: 6350.29, // Stone (1 stone = 14 lbs)
  },
  length: {
    meter: 1, // Basenhet
    cm: 0.01, // Centimeter
    km: 1000, // Kilometer
    inches: 0.0254, // Inch (1 inch = 2.54 cm)
    feet: 0.3048, // Feet (1 foot = 12 inches)
    yards: 0.9144, // Yard (1 yard = 3 feet)
    miles: 1609.344, // Mile
  },
};
