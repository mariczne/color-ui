import { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import ImageInput from "./ImageInput/ImageInput";
import Results from "./Results/Results";
import Footer from "./Footer/Footer";
import ErrorMessages from "./ErrorMessages/ErrorMessages";

import { fetchColors } from "../utilities/clarifai.js";

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(() => null);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [colors, setColors] = useState([]);
  const [errors, setErrors] = useState([]);

  const onUploadImage = ({ base64, imageUrl }) => {
    setImageUrl(imageUrl);

    if (base64) {
      onImageSubmit({ base64 });
    } else {
      onImageSubmit({ url: imageUrl });
    }
  };

  const onImageSubmit = async imageSource => {
    setIsLoadingResults(true);
    setColors([]);
    setErrors([]);

    try {
      const colors = await fetchColors(imageSource, setUploadProgress);
      setColors(colors);
    } catch (error) {
      handleError(error);
    }

    setIsLoadingResults(false);
  };

  const handleError = error => {
    setErrors([error]);
  };

  const isAnyErrorPresent = errors.length > 0;

  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid container>
          <Grid.Row>
            <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Jumbotron />
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

export default App;
