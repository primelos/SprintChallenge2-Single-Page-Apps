import React, { useState } from "react";
import styled from "styled-components";

const Form1 = styled.form`
  // background-color: red;
  text-align: center;
`;
const Input1 = styled.input`
  width: 25%;
`;
export default function SearchForm(props) {
  return (
    <section className="search-form">
      <Form1>
        <Input1
          type="text"
          placeholder="search "
          onChange={props.change}
          value={props.val}
          tableindex="0"
        />
        <button type="submit" onChange={props.change}>
          Send
        </button>
      </Form1>
    </section>
  );
}
