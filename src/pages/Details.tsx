import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "../styles/details.css";

export default function Details() {
  let { id } = useParams<any>();
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://${process.env.REACT_APP_HOSTNAME}/faunadb/get-user/${id}`
      ).then(async (response) => await response.json());
      setUser(data["response"]);
    };
    fetchData();
  }, [id]);

  let data = user["data"];

  return user ? (
    <div className="container-user">
      <img src={`https://avatars.dicebear.com/api/open-peeps/${data.name + " " + data.lastname}-dnrm.svg?clothingColor[]=%23FFFFFF&skinColor=%23FFFFFF&mood[]=happy`} alt="" className="image-user" />
      <h1>
        {data.name} {data.lastname}
      </h1>
      <h3>{data.birthDate}</h3>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
