import { ErrorMessage } from "./ErrorMessage";
import { ClarifaiError } from "types/ClarifaiError";

export interface ErrorMessagesProps {
  errors: ClarifaiError[];
}

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
