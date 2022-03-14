import { ElementChartOptions, ScaleChartOptions, ScaleOptions } from 'chart.js';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const CryptoChart = (props: any) => {
    const [prices, setPrices] = useState<any>({});

    useEffect(() => {
        fetch(
            `https://api.coincap.io/v2/assets/${props.asset}/history?interval=d1`
        )
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
    }, [props.asset]);

    let data = {
        labels: prices.labels,
        datasets: [
            {
                label: 'Bitcoin',
                backgroundColor: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 99, 132)',
                data: prices.data,
                fill: false,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                title: {
                    display: false,
                },
                grid: {
                    display: true,
                    color: 'rgba(255, 255, 255, 0.1)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Bitcoin Price',
            },
        },
    };

    return <Line data={data} options={options} />;
};

export default CryptoChart;
