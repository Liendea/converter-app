export const fetchExchangeRates = async (amount: number, from: string) => {
  try {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
