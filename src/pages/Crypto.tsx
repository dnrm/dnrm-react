import { useState } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";

export default function Domains() {
    const [asset, setAsset] = useState("");
    const [data, setData] = useState<any>();

    const handleClick = (e: Event) => {
        e.preventDefault();
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

                    console.log(data)
            } catch (err) {
                console.error(err);
            }
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
            <h1>Cryptocurrency prices</h1>
            <br />
            <InputGroup
                value={asset}
                onChange={handleKeyPress}
                onSubmit={handleClick}
            >
                Search
            </InputGroup>
            <br/>
            { data ? (
                <section id="content">
                <h1><span>{data.symbol}</span> {data.name}</h1>
                <h2>{Math.floor(data.priceUsd)} (USD)</h2>
            </section>
            ) : null}
        </div>
    );
}
