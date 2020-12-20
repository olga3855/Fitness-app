import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from 'styled-components';

const Contact = () => {
  return (
    <S.Footer className="text-center">
      <Row className="mr-0 py-2 w-75 mx-auto">
        <Col sm={12} lg={4} >
          <S.Link
            href="mailto: helga.88@inbox.ru"
            className="font-weight-light"
          >
            <i className="far fa-envelope px-1"></i>{" "}
           helga.88@inbox.ru
          </S.Link>
        </Col>
        <Col sm={12} lg={4} >
          <S.Link
            href="https://www.facebook.com/profile.php?id=100000710129207"
            rel="noopener noreferrer"
            target="_blank"
            className="px-5 font-weight-light"
          >
            <i className="fab fa-facebook px-1"></i> Olya_Shkuratova
          </S.Link>
        </Col>
        <Col sm={12} lg={4} >
          <S.Link
            href="https://www.linkedin.com/in/%D0%BE%D0%BB%D1%8C%D0%B3%D0%B0-%D1%88%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BE%D0%B2%D0%B0-1576451b5/"
            rel="noopener noreferrer"
            target="_blank"
            className="font-weight-light"
          >
            <i className="fab fa-linkedin px-1 "></i> Olga Shkuratova
          </S.Link>
        </Col>
      </Row>
      <p className="font-weight-light my-0">
        Copyright &copy; 2020 Some Rights Reserved
      </p>
    </S.Footer>
  );
}

const S = {
  Link: styled.a`
  color: white;

&:hover {
  color: white;
}
  `,
  Footer: styled.footer`
   background-color: black;
  color: white;
  `
}

export default Contact;