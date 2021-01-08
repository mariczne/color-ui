import { Segment, Item, Progress, Button } from "semantic-ui-react";
import { ImageInputProps } from "./ImageInput";

export type FileInfoProps = {
  imageName: File["name"];
  uploadProgress: ImageInputProps["uploadProgress"];
};

const FileInfo = ({ imageName, uploadProgress }: FileInfoProps) => {
  return (
    <Segment compact style={{ margin: "0px auto 14px" }}>
      <Item.Group>
        <Item style={{ margin: "0px" }}>
          <Item.Content>
            <Item.Header style={{ wordBreak: "break-all" }}>
              {imageName}
            </Item.Header>
            <Item.Extra>
              {uploadProgress ? (
                <Progress
                  percent={uploadProgress}
                  indicating={uploadProgress > 100}
                  autoSuccess
                />
              ) : null}
              <Button
                type="submit"
                content="Upload"
                icon="upload"
                labelPosition="left"
                color="teal"
                autoFocus
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  );
};

export { FileInfo };
