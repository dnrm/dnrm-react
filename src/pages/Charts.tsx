import ChartJs from "../components/ChartJs";
import Layout from "../components/Layout";
import Line from "../components/Line";

const Charts = () => {
    let line = [
        {
            id: "japan",
            color: "hsl(91, 70%, 50%)",
            data: [
                {
                    x: "plane",
                    y: 262,
                },
                {
                    x: "helicopter",
                    y: 93,
                },
                {
                    x: "boat",
                    y: 232,
                },
                {
                    x: "train",
                    y: 125,
                },
                {
                    x: "subway",
                    y: 114,
                },
                {
                    x: "bus",
                    y: 37,
                },
                {
                    x: "car",
                    y: 258,
                },
                {
                    x: "moto",
                    y: 30,
                },
                {
                    x: "bicycle",
                    y: 153,
                },
                {
                    x: "horse",
                    y: 120,
                },
                {
                    x: "skateboard",
                    y: 258,
                },
                {
                    x: "others",
                    y: 93,
                },
            ],
        },
    ];

    let data = {
        labels: [
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
        ],
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
        <Layout>
            <h1 className="text-4xl pb-4">ChartJs</h1>
            <hr />
            <Line data={line} />
            <ChartJs data={data} />
            <br />
        </Layout>
    );
};

export default Charts;
