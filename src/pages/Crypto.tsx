import { useState } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";
import Cryptocurrencies from '../components/Cryptocurrencies';

export default function Domains() {
    const [asset, setAsset] = useState("");

    const handleClick = (e: Event) => {
        e.preventDefault();
        if (asset) {
            try {
                fetch(`https://api.coincap.io/v2/assets/${asset}`, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((response) => console.log(response))
                    .catch((err) => {
                        console.error(err);
                    });
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
            <Cryptocurrencies />
        </div>
    );
}
