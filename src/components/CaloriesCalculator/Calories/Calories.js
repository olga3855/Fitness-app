import React from "react";
import { Jumbotron, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import img3 from '../../../assets/images/img3.jpg';
import img6 from '../../../assets/images/img6.jpeg';

const Calories = (props) => {
  return (
    <S.Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer"
    >
      <Jumbotron fluid className="text-white text-center font-weight-light">
        <S.Form>
          <S.Title className="m-4 ">CALMAC Calculator</S.Title>

          <Container className="d-flex">
            <Form.Label className="mr-3" name="age">
              Age:
                </Form.Label>
            <S.Control
              className="w-100"
              placeholder="Years"
              size="sm"
              type="numbers"
              name="age"
              required
              onChange={props.onChange}
            />
          </Container>

          <Container className="d-flex">
            <Form.Label className="mr-3">Sex:</Form.Label>
            <Form.Check
              inline
              id="male"
              label="Male"
              type="radio"
              name="sex"
              value="male"
              defaultChecked
              onChange={props.onChange}
            />
            <Form.Check
              inline
              id="female"
              label="Female"
              type="radio"
              name="sex"
              value="female"
              onChange={props.onChange}
            />
          </Container>

          <Container className="d-flex">
            <Form.Label className="mr-3">Units:</Form.Label>
            <Form.Check
              inline
              id="us"
              label="US"
              type="radio"
              name="unit"
              value="us"
              defaultChecked
              onChange={props.onChange}
            />
            <Form.Check
              inline
              id="us"
              label="Metric"
              type="radio"
              name="unit"
              value="metric"
              onChange={props.onChange}
            />
          </Container>

          <Container className="d-flex">
            <Form.Label className="mr-3" name="weight">
              Weight:
                </Form.Label>
            <S.Control
              placeholder={props.weightPlaceholder}
              className="w-100"
              size="sm"
              type="numbers"
              name="weight"
              required
              onChange={props.onChange}
            />
          </Container>

          <Container className="d-flex">
            <Form.Label className="mr-3" name="height">
              Height:
                </Form.Label>
            <S.Control
              placeholder={props.heightPlaceholder}
              className="w-100"
              size="sm"
              type="numbers"
              name="height"
              required
              onChange={props.onChange}
            />
          </Container>

          <Container className="d-flex">
            <Form.Label className="mr-3">Activity:</Form.Label>
            <S.Control
              as="select"
              name="activity"
              value={props.select}
              className="w-75"
              onChange={props.onChange}
            >
              <option value="select" disabled>
                - Select an Option -
                  </option>
              <option value="sedentary">
                Sedentary: Little to no exercise and Sedentary Job
                  </option>
              <option value="light">
                Light: Walks and Jogs and Sedentary Job
                  </option>
              <option value="moderate">
                Moderate: Moderate exercise and Sedentary Job
                  </option>
              <option value="active">
                Active: Moderate exercise and Active Job
                  </option>
              <option value="veryActive">
                Very Active: Heavy exercise and Active Job
                  </option>
            </S.Control>
          </Container>

          <Link
            to="/results"
            className={props.isValid ? "show-button" : "hide-button"}
          >
            <S.Button onClick={props.onClick} variant="outline-secondary">
              Submit
                </S.Button>
          </Link>
        </S.Form>
      </Jumbotron>
    </S.Container>
  );
}

const S = {
  Container: styled(Container)`
  background-image: url(${img3});
  background-position: center;
  background-size: cover;
  @media (max-width: 992px) {
  background-image: url(${img6});
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
   margin-top: 1.8rem;

 &:hover {
   color: black;
   background-color: white;
 }
   `,

  Title: styled.h1`
    font-size: 2.7rem;
    padding-top: 4%;
    `,
}

export default Calories;