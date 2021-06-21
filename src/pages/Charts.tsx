import { useState, useEffect } from "react";
import CryptoChart from "../components/CryptoChart";

const Charts = () => {
    const [prices, setPrices] = useState<any>({});

    useEffect(() => {
        fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1")
            .then((r) => r.json())
            .then((r) => {
                let tenDayPrices = [];
                let labels = [];
                for (let i = r.data.length - 1; i >= r.data.length - 10; i--) {
                    console.log(r.data[i].priceUsd);
                    tenDayPrices.push(parseInt(r.data[i].priceUsd));
                    labels.push(new Date(r.data[i].date).toLocaleString());
                }
                console.log(tenDayPrices);
                setPrices({
                    labels: labels,
                    data: tenDayPrices,
                });
            });
    }, []);

    let data = {
        labels: prices.labels,
        datasets: [
            {
                label: "Bitcoin price",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: prices.data,
                fill: true,
            },
        ],
    };

    console.log(data);

    return (
        <>
            <h1 className="text-8xl font-black pb-4">ChartJs</h1>
            <hr />
            {/* { prices != null ? <ChartJs data={data} /> : null} */}
            <br />
            <CryptoChart asset="bitcoin" />
        </>
    );
};

export default Charts;
