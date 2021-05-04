import { useState } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";

export default function Domains() {
    const [domain, setDomain] = useState("");

    const handleClick = (e: Event) => {
        console.log(e);
        try {
            fetch(
                `https://domain-availability-v2.p.rapidapi.com/api/v1?apiKey=undefined&domainName=${domain}&mode=DNS_ONLY&outputFormat=JSON`,
                {
                    method: "GET",
                    headers: {
                        "x-rapidapi-key":
                            "KEY",
                        "x-rapidapi-host": "domain-availability-v2.p.rapidapi.com",
                    },
                }
            ).then(response => response.json())
            .then(response => console.log(response))
            .catch(err => {
                console.error(err);
            });
        } catch (err) {
            console.error(err);
        }
    };

    const handleKeyPress = (e: any) => {
        setDomain(e.target.value);
    };

    return (
        <div>
            <Helmet>
                <title>Domains | Daniel Medina</title>
            </Helmet>
            <h1>Is the domain you want available?</h1>
            <InputGroup
                onClick={handleClick}
                value={domain}
                onChange={handleKeyPress}
            >
                Search
            </InputGroup>
        </div>
    );
}
