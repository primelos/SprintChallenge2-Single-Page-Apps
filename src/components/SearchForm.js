import React, { useState } from "react";
import styled from "styled-components";

const Form1 = styled.form`
  // background-color: red;
  text-align: center;
  margin-top: 10px;
`;
const Input1 = styled.input`
  width: 25%;
  background-color: #d3cdcd;
  border: none;
  padding: 10px
  outline: none;
  margin-right: 3px
  font-family: 'Indie Flower',cursive;

`;
export default function SearchForm(props) {
  return (
    <section className="search-form">
      <Form1 onSubmit={props.watchChange}>
        <Input1
          type="text"
          placeholder="search "
          onChange={props.upDate}
          value={props.query}
          tableindex="0"
        />
        <button type="submit" >
          Send
        </button>
      </Form1>
    </section>
  );
}
