import { useEffect, useState } from "react";
import { getBitcoinPrice } from "../services/api";

function KPICards() {
  const [bitcoinPrice, setBitcoinPrice] = useState("Loading...");

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getBitcoinPrice();
        setBitcoinPrice(data.bitcoin.usd);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
        setBitcoinPrice("Error");
      }
    }

    fetchData();
  }, []);

  return (
    <section>
      <h2>📊 KPI Cards</h2>

      <div>
        <div>
          <h3>Bitcoin</h3>
          <p>${bitcoinPrice}</p>
        </div>

        <div>
          <h3>Weather</h3>
          <p>Loading...</p>
        </div>

        <div>
          <h3>Currency</h3>
          <p>Loading...</p>
        </div>

        <div>
          <h3>Air Quality</h3>
          <p>Loading...</p>
        </div>
      </div>
    </section>
  );
}

export default KPICards;