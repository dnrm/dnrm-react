import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

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

  return (
    <Layout>
      {user ? (
        <div className="grid place-items-center">
          <img
            src={`https://avatars.dicebear.com/api/open-peeps/${
              data.name + " " + data.lastname
            }-dnrm.svg?clothingColor[]=%23FFFFFF&skinColor=%23FFFFFF&mood[]=happy`}
            alt=""
            className="h-64 w-64 object-cover rounded-full border-8 border-white"
          />
          <h1 className="mt-2 font-space-grotesk text-4xl">
            {data.name} {data.lastname}
          </h1>
          <h3>{data.birthDate}</h3>
        </div>
      ) : null}
    </Layout>
  );
}
