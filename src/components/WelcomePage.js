import React from "react";
import styled from 'styled-components'

const Img2 = styled.div`
background-image: url('https://rickandmorty-prod.s3.amazonaws.com/uploads/1562092058484_M94.jpg')
`


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header className='welcome-header'>

        <h1>Welcome to the ultimate fan site!</h1>
        <Img2>     
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Img2>
      </header>
    </section>
  );
}
