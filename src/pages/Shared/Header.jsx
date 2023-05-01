import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <p>{moment().format("dddd, MMMM d, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="success">Latest</Button>
        <Marquee>
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
  
    </Container>
  );
};

export default Header;