import React from "react";
import { Segment, Message, Icon } from "semantic-ui-react";

const ErrorMessage = ({ error }) => {
  return (
    <Segment>
      <Message negative icon>
        <Icon name="x" />
        <Message.Content>
          <Message.Header>{error}</Message.Header>
          Please try again
        </Message.Content>
      </Message>
    </Segment>
  );
};

export default ErrorMessage;
