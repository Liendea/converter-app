export const fetchExchangeRates = async (amount: number, from: string) => {
  try {
    // Vi tar bort &to-parametern helt för att få alla valutor
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from}`,
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // API:et returnerar ett objekt där 'rates' innehåller alla valutor
    return data.rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};
