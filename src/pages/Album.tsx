import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Props {
  image: string;
  name: string;
}

export default function Album(props: Props) {
  const [image, setImage] = useState("");

  const { name } = useParams<any>();

  useEffect(() => {
    fetch(`https://api.medina.dev/v1/search/${name} coldplay`)
      .then((r) => r.json())
      .then((r) => setImage(r[0].image));
  });

  return (
    <div className="px-5 md:px-20 lg:px-64">
      <img src={image} alt="Album cover" className="w-52" />
      <h1 className="font-space-grotesk">{name}</h1>
    </div>
  );
}
