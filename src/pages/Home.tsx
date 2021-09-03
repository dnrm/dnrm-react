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
        <h1 className="text-4xl py-2 relative font-space-grotesk">Daniel Medina</h1>
        <hr className="relative" />
        <div className="about mt-2 relative">
          <p className="relative font-sans">
            My name is Daniel Medina. I am a high school student at Tecnológico de Monterrey. I started my journey as a web developer in January of 2020. During the COVID-19 pandemic I had a lot of free time therefore I was able to really bump up my skills. I started experimenting with all kinds of technologies and projects. As of August 2021 I have made 6 big projects which are listed below. I have also done some small projects which can be found in my Github a profile.
          </p>
          <p className="relative">
          I spend my free time listening and composing music, taking photos, sailing, and coding. I also love collecting vinyl records. I currently have a small collection of them, but plan to expand it indefinitely. Check out my collection here.
          </p>
        </div>
      </section>
    </Layout>
  );
}
