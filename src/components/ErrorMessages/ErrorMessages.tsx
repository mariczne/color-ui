import { ErrorMessage } from "./ErrorMessage";
import { ClarifaiError } from "types";

export type ErrorMessagesProps = {
  errors: ClarifaiError[];
};

const ErrorMessages = ({ errors }: ErrorMessagesProps) => {
  return (
    <>
      {errors.map((error, i) => (
        <ErrorMessage key={i} error={error} />
      ))}
    </>
  );
};

export { ErrorMessages };
