import { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import { Navbar } from "components/Navbar";
import { Jumbotron } from "components/Jumbotron";
import { ImageInput } from "components/ImageInput";
import { Results } from "components/Results";
import { Footer } from "components/Footer";
import { ErrorMessages } from "components/ErrorMessages";
import { fetchColors, ImageSource } from "utilities/clarifai";
import { Color, ClarifaiError } from "types";

const EXAMPLE_IMAGE_PATH = `${process.env.PUBLIC_URL}/example.jpeg`;

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [colors, setColors] = useState<Color[]>([]);
  const [errors, setErrors] = useState<ClarifaiError[]>([]);

  const onUploadImage = ({ url, base64 }: ImageSource) => {
    setImageUrl(url);
    onImageSubmit({ url, base64 });
  };

  const onImageSubmit = async (imageSource: ImageSource) => {
    setIsLoadingResults(true);
    setColors([]);
    setErrors([]);

    try {
      const colors = await fetchColors(imageSource, setUploadProgress);
      setColors(colors);
    } catch (error) {
      setErrors([error]);
    }

    setIsLoadingResults(false);
  };

  const isAnyErrorPresent = errors.length > 0;

  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid container>
          <Grid.Row>
            <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Jumbotron
                submitExampleImage={() =>
                  onUploadImage({ url: EXAMPLE_IMAGE_PATH })
                }
              />
              {isAnyErrorPresent && <ErrorMessages errors={errors} />}
              <ImageInput
                onUploadImage={onUploadImage}
                uploadProgress={uploadProgress}
                setUploadProgress={setUploadProgress}
              />
              <Results
                imageUrl={imageUrl}
                colors={colors}
                isLoadingResults={isLoadingResults}
                isAnyErrorPresent={isAnyErrorPresent}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </Container>
    </>
  );
};

export { App };
