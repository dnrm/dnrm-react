import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2';

const CryptoChart = (props: any) => {

    const [prices, setPrices] = useState<any>({});

    useEffect(() => {
        fetch(`https://api.coincap.io/v2/assets/${props.asset}/history?interval=d1`)
            .then((r) => r.json())
            .then((r) => {
                let tenDayPrices = [];
                let labels = [];
                for (let i = r.data.length - 1; i >= r.data.length - 10; i--) {
                    console.log(r.data[i].priceUsd)
                    tenDayPrices.push(parseInt(r.data[i].priceUsd))
                    labels.push(new Date(r.data[i].date).toLocaleString())
                }
                console.log(tenDayPrices)
                setPrices({
                    labels: labels,
                    data: tenDayPrices
                })
            })
    }, []);

    let data = {
        labels: prices.labels,
        datasets: [
            {
                label: `${props.asset} price`,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: prices.data,
                fill: true,
            },
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    type: "linear",
                    display: true,
                    position: "left",
                    id: "y-axis-1",
                },
            ],
        },
        legend: {
            display: false
        },
    };

    return (
        <Line data={data} options={options} type="line" />
    )
}

export default CryptoChart;