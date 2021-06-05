import ChartJs from '../components/ChartJs';
import Layout from '../components/Layout';
import Line from '../components/Line';

const Charts = () => {

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
    }

    return (
        <Layout>
            <h1 className="text-4xl pb-4">ChartJs</h1>
            <hr />
            <ChartJs data={data} />
            <br />
            <Line />
        </Layout>
    )
};

export default Charts;
