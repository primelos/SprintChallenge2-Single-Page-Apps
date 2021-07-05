import React from "react";
import { Route, NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import styled from "styled-components";

const Title = styled.h1`
font-family: 'Indie Flower', cursive;
padding-top: 50px
color: #e6e6ff;
font-size: 4.5rem
`;
const Img1 = styled.div`
  
  height: 30vh;
  background-image: url("https://cdn.mos.cms.futurecdn.net/Ytokbc8Jrd92ycSUrtXEjJ-1024-80.jpg");
`;

export default function Header() {
  return (
    <div>
    <Img1 className="ui centered">

      <div className='img-nav'>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      
      <NavLink className="navs" to="/">
        Home
      </NavLink>
      <NavLink className="navs" to="/characterlist">
        Characters
      </NavLink>
  </div>
        <Title className="ui center welcome-text">Rick & Morty Fan Page</Title>
    </Img1>
      <div>
      </div>
      <Route exact path="/" render={(props) => <WelcomePage {...props} />} />
      <Route
        path="/characterlist"
        render={(props) => <CharacterList {...props} />}
      />
    </div>
  );
}
