import { Message, Icon } from "semantic-ui-react";
import { ClarifaiError } from "types";

export type ErrorMessageProps = {
  error: ClarifaiError;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <Message negative icon>
      <Icon name="x" />
      <Message.Content>
        <Message.Header>{error.toString()}</Message.Header>
        <p style={{ wordBreak: "break-word" }}>
          {error.response?.data?.outputs?.[0]?.status?.details}
        </p>
        <p style={{ wordBreak: "break-word" }}>
          {error.response?.data?.outputs?.[0]?.status?.description}
        </p>
      </Message.Content>
    </Message>
  );
};

export { ErrorMessage };
