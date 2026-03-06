import { useEffect, useState } from "react";
import { fetchExchangeRates } from "../api/CurrencyApi";

export function useCurrencyConversion(
  amount: string,
  fromUnit: string,
  toUnit: string,
) {
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isActive = true;

    const getConversion = async () => {
      let sanitized = amount.replace(",", ".");

      // Validering
      if (!sanitized || sanitized.trim() === "" || sanitized.endsWith(".")) {
        setResult(null);
        return;
      }

      if (sanitized.startsWith(".")) {
        sanitized = "0" + sanitized;
      }

      const num = parseFloat(sanitized);

      if (isNaN(num) || num <= 0) {
        setResult(null);
        return;
      }

      // Samma valuta check
      if (fromUnit === toUnit) {
        setResult(num.toFixed(2));
        return;
      }

      setLoading(true);
      try {
        const res = await fetchExchangeRates(num, fromUnit);

        if (isActive && res) {
          const rates = res as Record<string, number>;
          const val = rates[toUnit.toUpperCase()];

          if (val !== undefined) {
            setResult(val.toFixed(2));
          } else {
            setResult("N/A");
          }
        }
      } catch (error) {
        if (isActive) {
          console.error("Konverteringsfel:", error);
          setResult("Error");
        }
      } finally {
        if (isActive) setLoading(false);
      }
    };

    getConversion();

    return () => {
      isActive = false;
    };
  }, [amount, fromUnit, toUnit]);

  return { result, loading };
}
