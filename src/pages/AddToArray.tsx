import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import InputGroup from "../components/InputGroup";
import Layout from "../components/Layout";

const Item = styled.li`
  padding: 10px;
  background-color: gray;
  margin: 5px;
  list-style: none;
  border-radius: 15px;
  color: white;
  display: inline-block;
`;

export default function AddToArray() {
  const [text, setText] = useState("");
  const [messages, setMessage] = useState<Array<any>>([]);

  const handleChange = (e: any) => {
    setText(e.target.value);
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    if (text.trim() !== "") {
      setMessage([...messages, text]);
    }
    setText("");
  };

  return (
    <div>
        <Helmet>
          <title>Add To Array | Daniel Medina</title>
        </Helmet>
        <h1 className="font-space-grotesk text-6xl pb-8">Add element to array</h1>
        <InputGroup value={text} onChange={handleChange} onSubmit={handleClick}>
          Send
        </InputGroup>
        <ul>
          {messages.map((i, index) => (
            <Item>{i}</Item>
          ))}
        </ul>
      </div>
  );
}
