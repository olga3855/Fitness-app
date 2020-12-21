import React from "react";
import { Jumbotron, Button, Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import img2 from '../../../assets/images/img2.jpg';
import img5 from '../../../assets/images/img5.jpeg';

const Results = (props) => {
  return (
    <S.Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer"
    >
      <Jumbotron fluid className="text-white text-center">
        <S.Form>
          <h4 className="m-4">Results</h4>

          <Row className="mb-4 font-weight-light">
            <Col sm={12} md={12} lg={12} className="mx-auto">
              <Form.Label>What is your Goal? : </Form.Label>
            </Col>
            <Col sm={12} md={12} lg={12}>
              <S.Control
                as="select"
                name="activity"
                className="w-75 mx-auto text-left"
                value={props.selected}
                onChange={props.onChange}
              >
                <option value="select" disabled>- Select an Option -</option>
                <option value="lose">Lose Weight</option>
                <option value="maintain">Maintain Weight</option>
                <option value="gain">Gain Weight</option>
              </S.Control>
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 className="mb-4">
                {props.calculations.calories} Calories{" "}
                <i className="fas fa-bolt"></i>{" "}
              </h1>
            </Col>
          </Row>

          <Row className="w-50 mx-auto x-small-font-size">
            <Col >
              <Container fluid className="text-center">
                <i className="fas fa-drumstick-bite"></i>
                <p>Protein: {props.calculations.protein}g</p>
              </Container>
            </Col>
            <Col >
              <Container fluid className="text-center">
                <i className="fas fa-bread-slice"></i>
                <p>Carbs: {props.calculations.carbs}g</p>
              </Container>
            </Col>
            <Col>
              <Container fluid className="text-center">
                <i className="fas fa-cheese"></i>
                <p>Fats: {props.calculations.fats}g</p>
              </Container>
            </Col>
          </Row>

          <Row>
            <Container fluid className="text-center">
              <p>If you want to use Calories Counter, please </p>
              <S.Links>
                <S.Llink to='/register'>Sign Up</S.Llink>
              </S.Links>
            </Container>

          </Row>

          <Row>
            <Col>
              <Link to="/">
                <S.Button variant="outline-secondary" className="m-4">
                  Go Back to Home
                </S.Button>
              </Link>
            </Col>
          </Row>
        </S.Form>
      </Jumbotron>
    </S.Container>
  );
}

const S = {
  Container: styled(Container)`
  background-image: url(${img2});
  background-position: center;
  background-size: cover;
  @media (max-width: 992px) {
  background-image: url(${img5});
  }
  `,

  Form: styled(Form)`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  border: 1px white solid;
  padding: 5%;
  `,

  Control: styled(Form.Control)` 
  background: transparent;
  border: 0;
  color: white;
  border-radius: 0;
  border-bottom: 1px white solid;
  width: 350px;
  padding: 0;
  margin: 0;

  &::placeholder {
  color: white;
  }

  &:focus {
  background: transparent;
  border: 0;
  color: white;
  box-shadow: none;
  border-bottom: 1px white solid;
  }
  `,

  Button: styled(Button)`
  border: 1px white solid;
  border-radius: 360px;
  color: white;
  width: 10rem;
  transition: 300ms;

  &:hover {
  color: black;
  background-color: white;
  }
  `,
  Links: styled.div`
   text-align: center;
   `,

   Llink: styled(Link)`
   text-decoration: none;
   color: #068bbf;
   font-size: 1.5rem;
   `
 }

export default Results;