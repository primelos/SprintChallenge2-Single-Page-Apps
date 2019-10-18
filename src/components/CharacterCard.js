import React from "react";


export default function CharacterCard (props) {
console.log(`CHAR`, props)
  // const {name} = props


  return (

    <div >

      <h3>Name: {props.item.name}</h3>
      <img src={props.item.image} />
      <p>Species: {props.item.species}</p>
      <p>Gender: {props.item.gender}</p>
      <p>Status: {props.item.status}</p>
      <p>Origin: {props.item.origin.name}</p>

    </div>

  );
}
