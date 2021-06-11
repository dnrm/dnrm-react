import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout img="https://images.unsplash.com/photo-1501785888041-af3ef285b470">
      <Helmet>
        <title>Home | Daniel Medina</title>
      </Helmet>
      <section id="main">
        <img
          src="https://danielmedina.dev/assets/v.jpg"
          alt="Daniel Medina"
          className="w-36 h-36 mb-px relative -top-24 ml-6 object-cover rounded-full mr-4 border-white border-4"
        />
        <br />
        <br />
        <h1 className="text-4xl py-2 relative -top-24">Daniel Medina</h1>
        <hr className="relative -top-24" />
        <div className="about mt-2 relative -top-24">
          <h3 className="text-2xl py-2 font-bold relative -top-24">Web Developer</h3>
          <p className="relative -top-12">
            I'm a web developer from Mexico. I like to work the most with
            javascript. I am really passionate about my coding projcets. I
            started back in January of 2020.
          </p>
          <p className="relative -top-12">
            Hello, my name is Daniel Medina and I am a full stack web developer.
            I work the most with JavaScript, primarily with Angular and NodeJs.
            I started my career in web development on January of 2020 before the
            coronavirus pandemic. The pandemic gave a lot of time to invest in
            learning technologies that would allow me to create a lot of content
            and digital media.
          </p>
          <p className="relative -top-12">
            I am a web developer from Mexico. I love programming and creating
            things. My JavaScript framework of choice is Angular. I started my
            journey in web development in January of 2020. I started
            learningHTML. After that I went and learned CSS and SASS. I also
            learned JavaScript. Now I am currently working on Angular.
          </p>
        </div>
      </section>
    </Layout>
  );
}
