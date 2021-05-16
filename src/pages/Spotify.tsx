import { useState } from "react";
import InputGroup from "../components/InputGroup";
import anime from 'animejs';

const Spotify = () => {
    const [data, setData] = useState<any>();
    const [song, setSong] = useState("");

    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            fetch(`https://medina.dev/spotify/search/${song}`)
            .then(r => {
                if (r.ok) {
                    return r
                } else {
                    setData(null);
                    throw new Error('nope')
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
            .catch(e => {
                console.log('error lol', e)
            })
        } catch (e) {
            console.log('error lololol')
        }
    };

    const handleChange = (e: any) => {
        setSong(e.target.value);
    };

    // const animate = () => {
    //     anime({
    //         targets: '.album-img',
    //         duration: 2000,
    //         rotate: 360,
    //         easing: 'easeInOutBack',
    //         direction: 'normal'
    //     })
    // }

    return (
        <div className="grid grid-cols-2 w-full">
            <section id="search">
                <h1 className="text-4xl">Spotify Search</h1>
                <br />
                <InputGroup
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                    value={song}
                >
                    Search
                </InputGroup>
                <br />
                <p>Search for your favourite songs! Use the Spotify API to search songs and view their album cover. No login required.</p>
            </section>
            {data && data[0] ? (
                <section
                    id="results"
                    className="flex justify-center items-center flex-col"
                >
                    <img src={data[0].image ? data[0].image : null} alt="Cover" className="max-w-xs album-img" />
                    <h1 className="text-3xl">{data[0].name ? data[0].name : null}</h1>
                    <h3 className="text-md">{data[0].album.name ? data[0].album.name : null}</h3>
                </section>
            ) : (
                song ? (
                    <h1>not found</h1>
                ) : null
            )}
        </div>
    );
};

export default Spotify;
