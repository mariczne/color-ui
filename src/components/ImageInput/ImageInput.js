import React, { Component } from 'react';
import { Row, Col, Input, Card, CardBody, InputGroup, InputGroupAddon, Button } from 'reactstrap';

class ImageInput extends Component {
  render() {
    return (
      <Row>
        <Col sm="10" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <InputGroup>
                <Input placeholder="Image URL"/>
                <InputGroupAddon addonType="append"><Button color="primary">Submit</Button></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default ImageInput;
