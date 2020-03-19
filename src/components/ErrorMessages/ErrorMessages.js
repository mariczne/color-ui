import React from "react";
import { Segment } from "semantic-ui-react";
import ErrorMessage from "./ErrorMessage";

const ErrorMessages = ({ errors }) => {
  return (
    <Segment>
      {errors.map(error => {
        return <ErrorMessage key={error} error={error} />;
      })}
    </Segment>
  );
};

export default ErrorMessages;
