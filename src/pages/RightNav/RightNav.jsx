import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bg from '../../assets/bg.png'
const RightNav = () => {
    return (
        <div>
           <h4>Login with</h4>
           <div>
           <Button className='mb-3' variant="outline-primary"> <FaGoogle /> Login with google</Button>
      <Button variant="outline-secondary"> <FaGithub /> Login with github</Button>
           </div>
           <div>
            <h4 className='mb-3 mt-3'>Find us on</h4>
            <ListGroup>
      <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter></FaTwitter> Twitter</ListGroup.Item>
      <ListGroup.Item> <FaInstagram></FaInstagram> Instagram</ListGroup.Item>
     
    </ListGroup>
           </div>
           <Qzone></Qzone>
           <div>
            <img src={bg} alt="" />
           </div>
        </div>
    );
};

export default RightNav;