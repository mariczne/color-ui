import { useState, ReactNode } from "react";
import { Message, Header } from "semantic-ui-react";
import cls from "./TextButton.module.css";

export type JumbotronProps = {
  submitExampleImage: () => void;
};

const Jumbotron = ({ submitExampleImage }: JumbotronProps) => {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
  };

  if (visible) {
    return (
      <Message color="teal" onDismiss={handleDismiss}>
        <Header as="h1">Hello!</Header>
        <p style={{ fontSize: "16px" }}>
          This is color-ui, a simple web type which analyzes the color
          composition of an image for you. To begin, you can either paste the
          URL of the image in the box below and click &apos;Send&apos;, upload
          one from your device or{" "}
          <TextButton onClick={submitExampleImage}>use the example</TextButton>.
        </p>
      </Message>
    );
  }

  return null;
};

type TextButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const TextButton = ({ onClick, children }: TextButtonProps) => {
  return (
    <button className={cls.textButton} onClick={onClick}>
      {children}
    </button>
  );
};

export { Jumbotron };
