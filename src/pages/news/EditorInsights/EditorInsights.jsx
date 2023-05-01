import React from 'react';
import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
import { Card, Col, Row } from 'react-bootstrap';

const EditorInsights = () => {
    return (
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
      
        <Col>
          <Card>
            <Card.Img variant="top" src={one} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={two} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={three} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
   
    </Row>
    );
};

export default EditorInsights;