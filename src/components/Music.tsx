import { useRef, useState, useEffect } from "react";

interface TrackProps {
  src: string;
  name: string;
  artist: string;
  url: string;
  preview: string;
}

const Music = (props: TrackProps) => {
  const [playing, setPlaying] = useState(false);
  const audioRef: any = useRef();

  useEffect(() => {
    setPlaying(false);
  }, [props.name]);

  const handleClick = () => {
    if (props.preview) {
      if ("mediaSession" in navigator) {
        // @ts-ignore
        navigator.mediaSession.metadata = new MediaMetadata({
          title: props.name,
          artist: props.artist,
          artwork: [
            {
              src: props.src,
              type: "image/png",
            },
          ],
        });
      }
      audioRef.current.volume = 0.75;
      if (playing === false) {
        audioRef.current.play();
        setPlaying(true);
      } else {
        audioRef.current.pause();
        setPlaying(false);
      }
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded p-3 pb-2">
      <div className="group relative">
        <img
          className="w-full md:w-72 block rounded group-hover:opacity-50"
          src={props.src}
          alt=""
        />
        <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-50 w-full h-full top-0 flex flex-col items-center group-hover:opacity-100 transition justify-evenly">
          {!props.preview && (
            <h1 className="opacity-0 group-hover:opacity-100 absolute top-20">
              No Preview Available
            </h1>
          )}
          {!playing ? (
            <button
              className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          ) : (
            <button
              className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
        {props.preview && <audio src={props.preview} ref={audioRef} />}
      </div>
      <div className="p-5 w-full md:w-72">
        <h3 className="text-white text-lg">
          <a
            className="text-gray-300 hover:underline"
            href={props.url}
            title="Open in Spotify"
          >
            {props.name}
          </a>
        </h3>
        <p className="text-gray-400">{props.artist}</p>
        <a href={props.src} target="_blank" rel="noreferrer" className="mt-4">
          Download cover
        </a>
      </div>
    </div>
  );
};

export default Music;
