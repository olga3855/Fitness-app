import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginIn, loginOut } from '../../store/actions/loginActions';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from "react-bootstrap";
import img1 from '../../assets/images/img1.jpg';
import img4 from '../../assets/images/img4.jpeg';
import { Link } from 'react-router-dom';

const Register = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const loggingIn = useSelector(state => state.authReducer.loggingIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginOut());
  });
  const history = useHistory();

  const handleChange = ({ target: { name, value } }) => {
    setUser(user => ({ ...user, [name]: value }));
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!validEmail.test(user.email)) {
      alert('Email must be valid');
    } else if (user.password.length < 6) {
      alert('Password must be at least 6 characters');
    } else if (user.username.length < 4) {
      alert('Username must be at least 4 characters');
    } else if (user.username && user.email && user.password) {
      dispatch(loginIn(user));
      history.push('/login');
    }
  }

  return (
    <>
      <S.Container
        fluid
        className="d-flex justify-content-center align-items-center jumbotronContainer"
      >
        <S.Main>
          <form onSubmit={handleSubmit}>
            <S.Input
              type='text'
              name="username"
              value={user.username}
              placeholder='Enter your name'
              onChange={handleChange}
              className={'form-control' + (submitted && !user.username ? ' is-invalid' : '')} />

            {submitted && !user.username &&
              <div className="invalid-feedback">Username is required</div>
            }

            <S.Input type='text'
              name="email"
              value={user.email}
              placeholder='Enter your email'
              onChange={handleChange}
              className={'form-control' + (submitted && !user.email ? ' is-invalid' : '')} />

            {submitted && !user.email &&
              <div className="invalid-feedback">Useremail is required</div>
            }

            <S.Input type='text'
              name="password"
              value={user.password}
              placeholder='Enter your password'
              onChange={handleChange}
              className={'form-control' + (submitted && !user.password ? ' is-invalid' : '')} />

            {submitted && !user.password &&
              <div className="invalid-feedback">Password is required</div>
            }

            {/* <div className="form-group"> */}
            <S.Button >{loggingIn}
              {/* {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>} */}
                       Sign Up
                    </S.Button>
            {/* </div> */}
            <S.Links>
              <S.Llink to="/login">Login</S.Llink>
            </S.Links>
          </form>
        </S.Main>
      </S.Container>
    </>
  )
}

const S = {

  Container: styled(Container)`
  justify-content: center;
  background-image: url(${img1});
  background-position: center;
  background-size: cover;
  @media (max-width: 992px) {
  background-image: url(${img4});
  }
  `,

  Main: styled.main`
  position: absolute;
  top: 5rem;
  margin: auto;
  width: 80vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  `,

  Input: styled.input`
  width: 80vw;
  max-width: 55rem;
  border: none;
  outline: none;
  background: none;
  font-size: 1.5rem;
  padding: 2rem 2rem;
  color: inherit;
  margin-bottom: 1.8rem;
  border-radius: 3rem;
  box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;

  &::placeholder {
    color: #068bbf;
  }
  `,

  Button: styled.button`
  margin-top: 1rem;
  margin-bottom: 3rem;
  border: none;
  outline: none;
  cursor: pointer;
  width: 80vw;
  max-width: 55rem;
  height: 4.5rem;
  border-radius: 3rem;
  font-size: 2rem;
  font-family: inherit;
  color: #044d8c;
  background-color: #f3f3f3;
  box-shadow: 3px 3px 8px #b1b1b1, -3px -3px 8px #fff;
  transition: 0.5s;

  &:focus {
    outline: none;
}
  &:hover {
    box-shadow: 2px 2px 5px #b1b1b1, -2px -2px 5px #fff;
  }
  &:active {
    box-shadow: inset 1px 1px 3px #cbced1, inset -1px -1px 3px #fff;
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

export default Register;