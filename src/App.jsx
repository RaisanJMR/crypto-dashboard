import { useState, useEffect } from "react";
const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&&order=market_cap_desc&per_page=10&page=1&sparkline=false'
const App = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error('Failed to fetch data')
        const data = await res.json()
        console.log(data)
        setCoins(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      } finally {
        setLoading(false)
      }
    }
    fetchCoins()
  }, [])

  return (
    <div>
      <h1>crypto dash</h1>
      {loading && <p>loading..</p>}
      {error && <div className="error">{error}</div>}
      {!loading && !error && (
        <main className="grid">
          {coins?.map((coin) => (
            <div className="coin-card" key={coin.id}>
              <div className="coin-header">
                <img src={coin.image} alt={coin.name} className="coin-image" />
              </div>
              <h2>{coin.name}</h2>
              <p className="symbol">{coin.symbol.toUpperCase()}</p>
              <p> {new Intl.NumberFormat("en-GB", { style: "currency", currency: "USD" }).format(
                coin.current_price,
              )}</p>
              <p className={coin.price_change_percentage_24h >= 0 ? 'positive' : 'negative'}>{coin.price_change_percentage_24h.toFixed(2)} %</p>
              <p>Market Cap: {coin.market_cap.toLocaleString()}</p>
            </div>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;