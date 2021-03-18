import React, { useEffect, useState } from "react";

export default function Effect() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((data) => data.json())
      .then((items) => setData(items["data"]));
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>Users</h1>
          <br />
          <hr />
          <br />
          {data.map((i) => (
            <>
              <div>
                <h1>
                  {i.first_name} {i.last_name}
                </h1>
                <h3>{i.email}</h3>
              </div>
              <br />
            </>
          ))}
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
