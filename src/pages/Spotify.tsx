import { useState, useEffect } from "react";
import InputGroup from "../components/InputGroup";
import Music from "../components/Music";
import anime from "animejs";
import Layout from "../components/Layout";

const Spotify = () => {
  const [data, setData] = useState<any>();
  const [song, setSong] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    document.addEventListener("keypress", () => {
      let element = document.getElementById("spotify-input");
      element?.focus();
    });

    return document.addEventListener("keypress", () => {
      let element = document.getElementById("spotify-input");
      element?.focus();
    });
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    try {
      fetch(`https://${process.env.REACT_APP_SPOTIFY}/search/${song}`)
        .then((r) => {
          if (r.ok) {
            setStatus("success");
            return r;
          } else {
            setData(null);
            setStatus("error");
            throw new Error("nope");
          }
        })
        .then((r) => r.json())
        .then((r) => {
          setData(r);
          anime({
            targets: "#results",
            duration: 500,
            easing: "easeInOutBack",
            direction: "normal",
            keyframes: [
              { opacity: 0, scale: 0.5 },
              { opacity: 1, scale: 1 },
            ],
          });
          return r;
        })
        .then((r) => console.log(r))
        .catch((e) => {
          console.log("error lol", e);
        });
    } catch (e) {
      console.log("error lololol");
    }
  };

  const handleChange = (e: any) => {
    setSong(e.target.value);
  };

  return (
    <Layout>
      <div className="grid-cols-1 xl:grid-cols-2 grid gap-8 p-0">
        <section id="search">
          <h1 className="text-4xl font-space-grotesk">Spotify Search</h1>
          <br />
          <InputGroup
            onSubmit={handleSubmit}
            onChange={handleChange}
            value={song}
            id="spotify-input"
          >
            Search
          </InputGroup>
          <br />
          <p>
            Search for your favourite songs! Use the Spotify API to search songs
            and view their album cover. No login required.
          </p>
          <br />
          <br />
          {data ? (
            <>
              <p>Raw data</p>
              <br />
              <pre className="bg-secondary p-4 rounded-xl overflow-x-scroll">
                <code className="text-sm leading-none language-json">
                    {JSON.stringify(data[0], null, 2)}
                </code>
              </pre>
            </>
          ) : null}
        </section>
        {data && data[0] && status === "success" ? (
          <section
            id="results"
            className="flex justify-center items-center flex-col mt-8 lg:mt-0"
          >
            <Music
              src={data[0].image ? data[0].image : null}
              name={data[0].name ? data[0].name : null}
              artist={data[0].artist ? data[0].artist : null}
              url={data[0].song_url ? data[0].song_url : null}
              preview={data[0].preview_url ? data[0].preview_url : null}
            />
          </section>
        ) : status === "error" ? (
          <div className="bg-secondary flex justify-center items-center">
            <h1 className="text-4xl font-bold">Not found :(</h1>
          </div>
        ) : null}
      </div>
    </Layout>
  );
};

export default Spotify;
