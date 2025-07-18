const CoinCard = ({ coin }) => {
    return (
        <div className="coin-card">
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
    );
}

export default CoinCard;