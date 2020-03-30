import React from "react";
import ErrorMessage from "./ErrorMessage";

const ErrorMessages = ({ errors }) => {
  return (
    <>
      {errors.map(error => (
        <ErrorMessage key={error} error={error} />
      ))}
    </>
  );
};

export default ErrorMessages;
