import { useState } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";
import anime from 'animejs';

export default function Domains() {
    const [asset, setAsset] = useState("");
    const [data, setData] = useState<any>();

    const handleClick = (e: Event) => {
        e.preventDefault();
        anime({
            targets: '#results',
            duration: 500,
            easing: 'linear',
            direction: 'normal',
            keyframes: [
                { opacity: 0 },
                { opacity: 1 }
            ]
        })
        if (asset) {
            try {
                fetch(`https://api.coincap.io/v2/assets/${asset}`, {
                    method: "GET",
                })
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
                targets: '#results',
                duration: 500,
                easing: 'linear',
                direction: 'normal',
                keyframes: [
                    { opacity: 0 }
                ]
            })
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
                    className="p-0 flex justify-center items-center min-h-full flex-col"
                >
                    {data ? (
                        <section id="content">
                            <h1 className="text-6xl">
                                <span>{data.symbol}</span> {data.name}
                            </h1>
                            <h2 className="text-2xl">
                                {parseFloat(data.priceUsd).toFixed(5)} (USD)
                            </h2>
                        </section>
                    ) : null}
                </section>
            </section>
        </div>
    );
}
