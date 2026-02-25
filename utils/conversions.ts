export type ConversionResults = {
  [key: string]: string;
};

// VOLUME / BAKING CONVERSIONS
export const convertFromDl = (dl: number): ConversionResults => {
  const cup = dl / 2.37;
  return {
    cup: cup.toFixed(2),
    gallon: (cup * 0.0625).toFixed(2),
    quarts: (cup * 0.25).toFixed(2),
    pint: (cup * 0.5).toFixed(2),
    oz: (cup * 8).toFixed(2),
  };
};

export const convertFromCups = (cups: number): ConversionResults => {
  const dl = cups * 2.37;
  return {
    dl: dl.toFixed(3),
    liter: (dl / 10).toFixed(2),
    cl: (dl * 10).toFixed(2),
    ml: (dl * 100).toFixed(2),
    tablespoon: (dl * 6.67).toFixed(2),
    teaspoon: (dl * 20).toFixed(2),
  };
};

// WEIGHT CONVERSIONS
export const convertFromLbs = (lbs: number): ConversionResults => {
  if (!lbs || isNaN(lbs)) return {};

  const kg = lbs / 2.20462;
  return {
    kg: kg.toFixed(2),
    gram: (kg * 1000).toFixed(2),
    hg: (lbs * 16).toFixed(2),
    stone: (lbs / 14).toFixed(2),
    ounce: (lbs * 16).toFixed(2),
  };
};

export const convertFromKg = (kg: number): ConversionResults => {
  if (!kg || isNaN(kg)) return {};

  const lbs = kg * 2.20462;
  return {
    lbs: lbs.toFixed(2),
    stone: (lbs * 0.0714286).toFixed(2),
    ounce: (lbs * 16).toFixed(2),
    gram: (kg * 1000).toFixed(0),
    hg: (kg * 10).toFixed(1),
  };
};

// LENGTH CONVERSIONS

// utils/lengthConversions.ts

export const convertFromMeter = (meter: number): ConversionResults => {
  if (!meter || isNaN(meter)) return {};

  return {
    inches: (meter * 39.3701).toFixed(2),
    feet: (meter * 3.28084).toFixed(2),
    yards: (meter * 1.09361).toFixed(2),
    miles: (meter * 0.000621371).toFixed(4), // Miles kräver ofta fler decimaler
    cm: (meter * 100).toFixed(0),
    km: (meter / 1000).toFixed(3),
  };
};

export const convertFromFeet = (feet: number): ConversionResults => {
  if (!feet || isNaN(feet)) return {};

  const meter = feet / 3.28084;
  return {
    meter: meter.toFixed(2),
    cm: (meter * 100).toFixed(0),
    inches: (feet * 12).toFixed(2),
    yards: (feet / 3).toFixed(2),
    miles: (feet / 5280).toFixed(4),
  };
};
