import React from "react";
import styled from "styled-components";
// import './CharacterCard.css';
export default function CharacterCard(props) {
  console.log(`CHAR`, props);
  // const {name} = props

  const Box = styled.div`
  background-color: #ff6666;
  border: 2px solid #ff6666;
  box-shadow: 0 0 5px 5px #ff6666;
  border-radius: 10px;
    width: 30%;
    margin: 10px;
    font-family: Bangers;
    padding: 20px;
    color: #e6e6ff;
  `;
  const Pic = styled.img`
    width: 100%;
  `;
  return (
    <Box className="cards">
      <h3>Name: {props.item.name}</h3>
      <Pic src={props.item.image} />
      <div>
        <p style={{ textAlign: "center", cursor:'pointer' }}>Drop down</p>
      </div>
      <div>
        <p>Species: {props.item.species}</p>
        <p>Gender: {props.item.gender}</p>
        <p>Status: {props.item.status}</p>
        <p>Origin: {props.item.origin.name}</p>
      </div>
    </Box>
  );
}
