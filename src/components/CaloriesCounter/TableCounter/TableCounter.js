import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import {  Button, Container,  Table } from "react-bootstrap";
import img7 from '../../../assets/images/img7.jpg';
import img8 from '../../../assets/images/img8.jpg';
import AddProduct from '../AddProduct';
import TotalCount from '../TotalCount';

const TableCounter = (props) => {
  return (

    <S.Container
      fluid
      className="d-flex justify-content-center align-items-center jumbotronContainer"
    >
      <S.Main>

        <S.Title>CALMAC Counter</S.Title>
        <h4>Hello, {props.location.user}, now you can choose products from the list to detail your diet</h4>

        <S.Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>DESCRIPTION</th>
              <th>CALORIES</th>
              <th>FAT</th>
              <th>CARBS</th>
              <th>PROTEIN</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

           <AddProduct />
           <TotalCount/>
          </tbody>
        </S.Table>
        <S.Links>
                <S.Llink to='/login'>Logout</S.Llink>
              </S.Links>
      </S.Main>
    </S.Container>
  );
}
const S = {
  Container: styled(Container)`
    background-image: url(${img7});
    background-position: center;
    background-size: cover;
    @media (max-width: 992px) {
  background-image: url(${img8});
  }
    `,
  Main: styled.main`
    position: absolute;
    top: 17%;
    margin: auto;
    width: 80vw;
    height: 80vh;
    text-align: center;
    color: white;
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

  Title: styled.h1`
      font-size: 2rem;
      `,
  Table: styled(Table)`
      color: white;
      
      @media (max-width: 450px) {
        font-size: 0.6rem;
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

export default TableCounter;

