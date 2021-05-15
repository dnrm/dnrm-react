import React from "react";
import { Brb } from "react-brb";
import Helmet from 'react-helmet'

import Layout from "../components/Layout";

const Package = () => (
    <Layout img="https://images.unsplash.com/photo-1433190152045-5a94184895da">
        <Helmet>
            <title>Package | Daniel Medina</title>
        </Helmet>
        <div>
            <h1 className="text-4xl font-medium">Hi</h1>
            <Brb />
            <p>ola</p>
            <p>
                This page uses my own npm package which is just really a line
                break with extra steps. I wanted to try to make my own package
            </p>
            <a
                href="https://www.npmjs.com/package/react-brb"
                target="_blank"
                rel="noreferrer"
            >
                https://www.npmjs.com/package/react-brb
            </a>
        </div>
    </Layout>
);

export default Package;
