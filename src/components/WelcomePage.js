import React from "react";
import styled from 'styled-components'

const Img2 = styled.div`
height: 50vh;
background-image: url('https://rickandmorty-prod.s3.amazonaws.com/uploads/1562092058484_M94.jpg');
background-repeat: no-repeat;
background-position: center;

`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header className='welcome-header'>

        <h1 className='welcome-text'>Welcome to the ultimate fan site!</h1>
        <Img2>     
        
        </Img2>
      </header>
    </section>
  );
}
