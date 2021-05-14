/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import useIsAdmin from "../hooks/useIsAdmin";
import CreateUser from "../components/CreateUser";

import "../styles/users.scss";

export default function Effect() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("https://faunadb.herokuapp.com/get-users")
            .then((data) => data.json())
            .then((items) => setData(items["data"]));
    }, []);

    const deleteUser = (e: any) => {
        let id = e.target.parentNode.value;
        return fetch("https://faunadb.herokuapp.com/delete-user/" + id, {
            method: "delete",
        }).then((response) => response.json());
    };

    const isAdmin = useIsAdmin();

    return (
        <div className="container">
            <Helmet>
                <title>useEffect | Daniel Medina</title>
            </Helmet>
            {data ? (
                <>
                    <h1 style={{ fontSize: "3em" }} className="title">
                        Users
                    </h1>
                    <p>
                        From{" "}
                        <a
                            href="https://fauna.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            FaunaDB
                        </a>{" "}
                        API
                    </p>
                    <br />
                    <hr />
                    <br />
                    {
                        // @ts-ignore
                        data.map((i: any) => {
                            let name =
                                i["data"]["name"] + " " + i["data"]["lastname"];
                            let ref = i["ref"]["@ref"]["id"];

                            return (
                                <>
                                    <div className="user" key={ref}>
                                        <div className="image">
                                            <img
                                                src={i["data"]["img"]}
                                                alt={`${name}'s profile picture.`}
                                                className="profile-pic"
                                            />
                                        </div>
                                        <div className="text">
                                            <h1>
                                                <Link
                                                    to={`/details/${ref}`}
                                                    className="details"
                                                >
                                                    {name}
                                                </Link>
                                            </h1>
                                            <h3>{i["data"]["birthDate"]}</h3>
                                        </div>
                                        {isAdmin && (
                                            <button
                                                className="delete-button p-0"
                                                value={ref}
                                                onClick={(e) => deleteUser(e)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ionicon bg-transparent text-white h-5"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <path
                                                        fill="none"
                                                        stroke="currentColor"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="50"
                                                        d="M368 368L144 144M368 144L144 368"
                                                    />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <br />
                                </>
                            );
                        })
                    }
                </>
            ) : (
                <h1>Loading...</h1>
            )}
            {isAdmin && <CreateUser />}
        </div>
    );
}
