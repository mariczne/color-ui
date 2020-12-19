import { Message, Icon } from "semantic-ui-react";

const ErrorMessage = ({ error }) => {
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

export default ErrorMessage;
