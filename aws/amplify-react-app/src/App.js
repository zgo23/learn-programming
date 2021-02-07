import React, { useState, useEffect, useCallback } from "react";
import { API } from "aws-amplify";
import "./App.css";

function App() {
    const [input, updateInput] = useState({
        limit: 5,
        start: 0,
    });
    function updateInputValues(type, value) {
        updateInput({ ...input, [type]: value });
    }
    const [coins, updateCoins] = useState([]);
    const fetchCoins = useCallback(async () => {
        const { limit, start } = input;
        const data = await API.get(
            "cryptoapi",
            `/coins?limit=${limit}&start=${start}`
        );
        updateCoins(data.coins);
    }, [input]);
    useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="App">
            <div>
                <input
                    onChange={(e) => updateInputValues("limit", e.target.value)}
                    placeholder="limit"
                    value={input.limit}
                />
                <input
                    onChange={(e) => updateInputValues("start", e.target.value)}
                    placeholder="start"
                    value={input.start}
                />
                <button onClick={fetchCoins}>Fetch Coins</button>
            </div>
            <div>
                {coins.map((coin, index) => (
                    <div key={index}>
                        <h2>
                            {coin.name} - {coin.symbol}
                        </h2>
                        <h5>${coin.price_usd}</h5>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
