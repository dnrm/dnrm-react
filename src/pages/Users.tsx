import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Helmet } from "react-helmet";

const Users = (props: any) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://medina.dev/faunadb/get-users")
            .then((data) => data.json())
            .then((items) => setData(items["data"]));
    }, []);

    return (
        <>
            <Helmet>
                <title>Users | Daniel Medina</title>
            </Helmet>
            <header className="heading text-4xl font-bold pb-8">
                <h1 className="pb-4">Users</h1>
                <hr />
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4">
                <Card
                    title="John Doe"
                    image="https://source.unsplash.com/random?wallpaper"
                    link="generic-user"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Error nemo eaque beatae tenetur placeat. Iste repellendus
                    fugit ducimus veritatis. Aperiam rerum unde voluptatum
                    doloremque quis sapiente fugiat labore iure. Id?
                </Card>
                <Card
                    title="John Doe"
                    image="https://source.unsplash.com/random?wallpaper"
                    link="generic-user"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur libero autem vitae ex voluptas, cumque fuga
                    odit, eveniet blanditiis aut, quidem illum deserunt saepe
                    incidunt ipsa beatae quibusdam corporis perspiciatis?
                </Card>
                <Card
                    title="John Doe"
                    image="https://source.unsplash.com/random?wallpaper"
                    link="generic-user"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur libero autem vitae ex voluptas, cumque fuga
                    odit, eveniet blanditiis aut, quidem illum deserunt saepe
                    incidunt ipsa beatae quibusdam corporis perspiciatis?
                </Card>
                <Card
                    title="John Doe"
                    image="https://source.unsplash.com/random?wallpaper"
                    link="generic-user"
                >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Consequatur libero autem vitae ex voluptas, cumque fuga
                    odit, eveniet blanditiis aut, quidem illum deserunt saepe
                    incidunt ipsa beatae quibusdam corporis perspiciatis?
                </Card>
            </div>
        </>
    );
};

export default Users;
