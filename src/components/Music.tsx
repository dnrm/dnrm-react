import React from "react";

interface TrackProps {
    src: string,
    name: string,
    artist: string
}

const Music = (props: TrackProps) => {
    return (
        <div className="bg-gray-700 shadow-lg rounded p-3">
            <div className="group relative">
                <img
                    className="w-full md:w-72 block rounded"
                    src={props.src}
                    alt=""
                />
            </div>
            <div className="p-5 w-full md:w-72">
                <h3 className="text-white text-lg">{props.name}</h3>
                <p className="text-gray-400">{props.artist}</p>
            </div>
        </div>
    );
};

export default Music;