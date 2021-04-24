import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import '../styles/details.css';

export default function Details() {
  let { id } = useParams();
  const [user, setUser] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `https://faunadb.herokuapp.com/get-user/${id}`
      ).then(async (response) => await response.json());
      setUser(data["response"]);
    };
    fetchData();
  }, [id]);

  let data = user["data"];

  return user ? (
    <div className="container-user">
      <img src={data.img} alt="" className="image-user" />
      <h1>
        {data.name} {data.lastname}
      </h1>
      <h3>{data.birthDate}</h3>
    </div>
  ) : (
    <h1>Loading</h1>
  );
}
