import { useState, useEffect } from "react";
import Helmet from "react-helmet";
import InputGroup from "../components/InputGroup";
import anime from "animejs";
import Icons from "../components/Icons";

export default function Domains() {
  const [asset, setAsset] = useState("");
  const [data, setData] = useState<any>();
  const [status, setStatus] = useState<number>();

  useEffect(() => {
    document.addEventListener("keypress", () => {
      let element = document.getElementById("crypto-input");
      element?.focus();
    });

    return document.addEventListener("keypress", () => {
      let element = document.getElementById("crypto-input");
      element?.focus();
    });
  });

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
          `https://api.coincap.io/v2/assets/${asset.replaceAll(" ", "-")}`,
          {
            method: "GET",
          }
        )
          .then((response) => {
            if (response.ok) {
              setStatus(200);
              console.log("ok");
              return response;
            } else {
              setStatus(404);
              setData({});
              throw new Error("404");
            }
          })
          .then((response) => response.json())
          .then((response) => {
            console.log(response);
            setData(response.data);
          })
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
      <section id="content" className="grid-cols-1 lg:grid-cols-2 grid">
        <section id="form">
          <h1 className="text-4xl font-light font-space-grotesk">Cryptocurrency prices</h1>
          <br />
          <InputGroup
            value={asset}
            onChange={handleKeyPress}
            onSubmit={handleClick}
            className="w-full crypto-input"
            id="crypto-input"
          >
            Search
          </InputGroup>
          <p className="text-gray-300 py-1 text-sm">
            Example: bitcoin, dogecoin, ethereum...
          </p>
        </section>
        <section
          id="results"
          className="p-0 flex justify-center items-center min-h-full"
        >
          <section
            id="content"
            className="flex justify-center items-center flex-row md:pt-0 pt-10"
          >
            {data &&
              (status === 200 ? (
                <>
                  <div className="icon pr-4">
                    <Icons
                      id={data.symbol ? data.symbol.toLowerCase() : null}
                    />
                  </div>
                  <div className="text">
                    <h1 className="text-6xl font-space-grotesk">
                      <span className="font-space-grotesk">{data.symbol}</span> {data.name}
                    </h1>
                    <h2 className="text-2xl font-space-grotesk">
                      {parseFloat(data.priceUsd).toFixed(5)} (USD)
                    </h2>
                  </div>
                </>
              ) : (
                <div className="mt-2 flex justify-center items-center font-space-grotesk">
                  <i className="fas fa-ban text-5xl pr-4"></i>
                  <h1 className="text-5xl">Coin not found</h1>
                </div>
              ))}
          </section>
        </section>
      </section>
    </div>
  );
}
