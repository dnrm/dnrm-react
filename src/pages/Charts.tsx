import React, { useRef } from "react";
import { Line } from "react-chartjs-2";

const Charts = () => {
    const canvasRef = useRef<any>();
    console.log(canvasRef);

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const data = {
        labels,
        datasets: [
            {
                label: "Other Things",
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgb(255, 99, 132)",
                data: [1, 1.2, 3, 1.9, 5, 2, 6.5, 5.8, 15, 12.5, 20, 25],
                fill: true,
            },
            {
                label: "Things",
                backgroundColor: "#34a8eb",
                borderColor: "#34a8eb",
                data: [25, 4.7, 12.5, 8.5, 10, 4.2, 8, 2.4, 20, 1.5, 12, 28],
                fill: true,
            },
        ],
    };

    return (
        <Line
            type="line"
            data={data}
            options={{
                scales: {
                    y: {
                        max: 30,
                        step: 1
                    }
                },
                animations: {
                    y: {
                        easing: "easeInOutElastic",
                        // @ts-ignore
                        from: (ctx: any) => {
                            if (ctx.type === "data") {
                                if (ctx.mode === "default" && !ctx.dropped) {
                                    ctx.dropped = true;
                                    return 0;
                                }
                            }
                        },
                    },
                },
            }}
        />
    );
};

export default Charts;
