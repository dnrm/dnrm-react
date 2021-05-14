import { useState } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";
import anime from "animejs";
import Icons from "../components/Icons";

export default function Domains() {
    const [asset, setAsset] = useState("");
    const [data, setData] = useState<any>();

    const handleClick = (e: Event) => {
        e.preventDefault();
        anime({
            targets: "#results",
            duration: 500,
            easing: "easeInOutBack",
            direction: "normal",
            keyframes: [
                { opacity: 0, scale: 0.5, skew: 60 },
                { opacity: 1, scale: 1, skew: 0 },
            ],
        });
        if (asset) {
            try {
                fetch(
                    `https://api.coincap.io/v2/assets/${asset.replaceAll(
                        " ",
                        "-"
                    )}`,
                    {
                        method: "GET",
                    }
                )
                    .then((response) => response.json())
                    .then((response) => setData(response.data))
                    .catch((err) => {
                        console.error(err);
                    });
            } catch (err) {
                console.error(err);
            }
        } else {
            anime({
                targets: "#results",
                duration: 500,
                easing: "easeInOutBack",
                direction: "normal",
                keyframes: [
                    { opacity: 1, scale: 1 },
                    { opacity: 0, scale: 0.5 },
                ],
            });
        }
    };

    const handleKeyPress = (e: any) => {
        setAsset(e.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>Crypto | Daniel Medina</title>
            </Helmet>
            <section id="content" className=" grid-cols-1 lg:grid-cols-2 grid">
                <section id="form">
                    <h1 className="text-4xl font-light">
                        Cryptocurrency prices
                    </h1>
                    <br />
                    <InputGroup
                        value={asset}
                        onChange={handleKeyPress}
                        onSubmit={handleClick}
                        className="w-full"
                    >
                        Search
                    </InputGroup>
                </section>
                <section
                    id="results"
                    className="p-0 flex justify-center items-center min-h-full"
                >
                    {data ? (
                        <section
                            id="content"
                            className="flex justify-center items-center flex-row md:pt-0 pt-10"
                        >
                            <div className="icon pr-4">
                                <Icons id={data.symbol.toLowerCase()} />
                            </div>
                            <div className="text">
                                <h1 className="text-6xl">
                                    <span>{data.symbol}</span> {data.name}
                                </h1>
                                <h2 className="text-2xl">
                                    {parseFloat(data.priceUsd).toFixed(5)} (USD)
                                </h2>
                            </div>
                        </section>
                    ) : null}
                </section>
            </section>
        </div>
    );
}
