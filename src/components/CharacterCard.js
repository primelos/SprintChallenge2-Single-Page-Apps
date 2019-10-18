import React from "react";
import styled from 'styled-components'

export default function CharacterCard (props) {
console.log(`CHAR`, props)
  // const {name} = props

  const Box = styled.div`
    border:red 1px dotted;
    width: 30%;
    margin: 10px;
    font-family: Bangers;
  `
  const Pic = styled.img`
  width:100%
  `

  return (

    <Box>

      <h3>Name: {props.item.name}</h3>
      <Pic src={props.item.image} />
      <p>Species: {props.item.species}</p>
      <p>Gender: {props.item.gender}</p>
      <p>Status: {props.item.status}</p>
      <p>Origin: {props.item.origin.name}</p>

    </Box>

  );
}
