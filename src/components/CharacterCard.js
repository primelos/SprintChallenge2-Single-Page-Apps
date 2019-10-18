import React from "react";


export default function CharacterCard (props) {
console.log(`CHAR`, props)
  // const {name} = props


  return (
    <div >
      <h3>Name: {props.name}</h3>
      <img src={props.image} />
      <p>Species{props.species}</p>
      <p>Gender: {props.gender}</p>
      <p>Status: {props.status}</p>
      {/* <p>{props.origin.name}</p> */}
    </div>
  );
}
