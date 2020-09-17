import React, { useState } from "react";
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

  const [hideDiv, setHideDiv] = useState(false);

  return (
    <Box className="cards">
      <h3>{props.item.name}</h3>
      <Pic src={props.item.image} />
      <div style={{textAlign:'center'}}>
        <a>
          See Specs
          <span className='downUp' onClick={() => setHideDiv(!hideDiv)} style={{ cursor: "pointer" }}>
            {!hideDiv ? (
              <i class="fas fa-caret-down"> </i>
            ) : (
              <i class="fas fa-caret-up"></i>
            )}
          </span>
        </a>
      </div>
      {hideDiv ? (
        <div id="hideIt" style={{textAlign:'center'}}>
          <p className="info-result">Species: {props.item.species}</p>
          <p className="info-result">Gender: {props.item.gender}</p>
          <p className="info-result">Status: {props.item.status}</p>
          <p className="info-result">Origin: {props.item.origin.name}</p>
        </div>
      ) : null}
    </Box>
  );
}
