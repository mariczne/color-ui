import React from 'react';
import { Row, Col, Card, CardBody, ListGroup } from 'reactstrap';
import Color from './Color.js';

const Results = ({ imageUrl, colorsArray }) => {
    if (!imageUrl || colorsArray.length < 1) {
      return <div />
    }

    return (
      <Row>
        <Col sm="10" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <img alt='' src={imageUrl} className="img-fluid mx-auto d-block"/>
              <p>W3 colors describing the image:</p>
              <ListGroup>
                {colorsArray.map((color, index) => (
                  <Color key={index} data={color} />
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default Results;