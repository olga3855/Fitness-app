import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { loginIn, loginOut } from '../../store/actions/loginActions';
import { Container } from "react-bootstrap";
import styled from 'styled-components';
import img1 from '../../assets/images/img1.jpg';
import img4 from '../../assets/images/img4.jpeg';

const Login = () => {

  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const { username, password } = user;
  const loggedIn = useSelector(state => state.authReducer.loggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginOut());
  });

  const history = useHistory();

  function handleChange({ target: { name, value } }) {
    setUser(user => ({ ...user, [name]: value }));
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setSubmitted(!submitted);
    if (user.password.length < 6) {
      alert('Password must be at least 6 characters');
    } else if (user.username.length < 4) {
      alert('Username must be at least 4 characters');
    } else if (username && password) {
      dispatch(loginIn(username, password));
      history.push({ pathname: '/table', user: username });
    }
    if (loggedIn) {
      return <Redirect to="/table" />
    }
  }

  return (<>
    <S.Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer"
    >
      <S.Main>
        <form onSubmit={handleLogin}>
          <S.Input
            type='text'
            name="username"
            value={username}
            placeholder='Enter your name'
            onChange={handleChange}
            className={'form-control' + (submitted && !username ? ' is-invalid' : '')} />
          {submitted && !username &&
            <div className="invalid-feedback">Username is required</div>
          }
          <S.Input
            type='text'
            name="password"
            value={password}
            placeholder='Enter your password'
            onChange={handleChange}
            className={'form-control' + (submitted && !password ? ' is-invalid' : '')} />
          {submitted && !password &&
            <div className="invalid-feedback">Password is required</div>
          }
          <S.Button>Login</S.Button><br />
          <S.Links>
            <S.Llink to='/register'>Register</S.Llink>
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

export default Login;