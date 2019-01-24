import React from 'react';
import { Row, Col, Input, Card, CardBody, InputGroup, InputGroupAddon, Button } from 'reactstrap';

const ImageInput = ({ onInputChange, onButtonSubmit }) => {
    return (
      <Row>
        <Col sm="10" md={{ size: 8, offset: 2 }}>
          <Card>
            <CardBody>
              <InputGroup>
                <Input placeholder="Image URL" onChange={ onInputChange }/>
                <InputGroupAddon addonType="append"><Button color="primary" onClick={ onButtonSubmit }>Submit</Button></InputGroupAddon>
              </InputGroup>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
}

export default ImageInput;
