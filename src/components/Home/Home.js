import React from "react";
import { Jumbotron, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import img1 from '../../assets/images/img1.jpg';
import img4 from '../../assets/images/img4.jpeg';

const Home = (props) => {
  return (
    <S.Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer"
    >
      <Jumbotron fluid className="text-white text-center">
        <S.Title>EasyFit Calculator</S.Title>
        <p>
          A simple Macronutrients Calculator/Counter!
          </p>
        <Link to="/calories">
          <S.Button
            variant="outline-secondary"
            className="mx-2"
            onClick={props.onClick}
          >
            Calculate Now
            </S.Button>
        </Link>
      </Jumbotron>
    </S.Container>
  );
}

const S = {
  Container: styled(Container)`
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  @media (max-width: 992px) {
  background-image: url(${img4});
  }
  `,

  Title: styled.h1`
  font-size: 2rem;
  `,

  Button: styled(Button)`
  border: 1px white solid;
  border-radius: 360px;
  color: white;
  width: 12rem;
  transition: 300ms;

&:hover {
  color: black;
  background-color: white;
}
  `
}

export default Home;