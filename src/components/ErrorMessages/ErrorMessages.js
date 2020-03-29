import React from "react";
import ErrorMessage from "./ErrorMessage";

const ErrorMessages = ({ errors }) => {
  return (
    <>
      {errors.map(error => {
        return <ErrorMessage key={error} error={error} />;
      })}
    </>
  );
};

export default ErrorMessages;
