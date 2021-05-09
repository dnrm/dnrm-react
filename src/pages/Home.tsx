import React from "react";
import { Helmet } from "react-helmet";
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <Helmet>
                <title>Home | Daniel Medina</title>
            </Helmet>
            <section id="main">
                <h1 className="text-4xl py-4 font-black">dnrm</h1>
                <hr />
                <h3 className="text-2xl py-2 font-bold">Web Developer</h3>
                <p>I am a web developer who likes working with JavaScript</p>
                <p>
                    I'm a web developer from Mexico. I like to work the most
                    with javascript. I am really passionate about my coding
                    projcets. I started back in January of 2020.
                </p>
                <br />
                <p>
                    Hello, my name is Daniel Medina and I am a full stack web
                    developer. I work the most with JavaScript, primarily with
                    Angular and NodeJs. I started my career in web development
                    on January of 2020 before the coronavirus pandemic. The
                    pandemic gave a lot of time to invest in learning
                    technologies that would allow me to create a lot of content
                    and digital media.
                </p>
                <br />
                <p>
                    I am a web developer from Mexico. I love programming and
                    creating things. My JavaScript framework of choice is
                    Angular. I started my journey in web development in January
                    of 2020. I started learningHTML. After that I went and
                    learned CSS and SASS. I also learned JavaScript. Now I am
                    currently working on Angular.
                </p>
            </section>
        </Layout>
    );
}
