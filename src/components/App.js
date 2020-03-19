import React, { useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import Clarifai from "clarifai";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import ImageInput from "./ImageInput/ImageInput";
import Results from "./Results/Results";
import Footer from "./Footer/Footer";

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY
});

const App = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const [colors, setColors] = useState([]);
  const [errors, setErrors] = useState([]);

  // When the user submits the image external URL
  const onUrlInputSubmit = url => {
    setImageUrl(url);
    setIsLoadingResults(true);
    setColors([]);
    setErrors([]);
    onImageSubmit(url);
  };

  // When the user uploads image from their own device
  const onUploadImage = (base64, localUrl) => {
    setImageUrl(localUrl);
    setColors([]);
    setIsLoadingResults([true]);
    setIsUploadingImage([true]);
    setErrors([]);
    onImageSubmit(null, base64);
  };

  // Send external URL or base64 string to API
  const onImageSubmit = (url, base64) => {
    const config = {};
    if (url) {
      config.url = url;
    } else if (base64) {
      config.base64 = base64;
    }

    clarifaiApp.models.predict(Clarifai.COLOR_MODEL, config).then(
      response => handleResponse(response),
      error => {
        if (error.status.code !== 10000) {
          const errorDescription = error.data.outputs[0].status.description;
          setErrors([...errors, errorDescription || error.statusText]);
          setIsLoadingResults(false);
          setIsUploadingImage(false);
        }
      }
    );
  };

  const handleResponse = response => {
    const { colors } = response.outputs[0].data;
    colors.sort((a, b) => b.value - a.value);
    setColors(colors);
    setIsLoadingResults(false);
    setIsUploadingImage(false);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Grid container>
          <Grid.Row>
            <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
              <Jumbotron />
              <ImageInput
                onUrlInputSubmit={onUrlInputSubmit}
                onUploadImage={onUploadImage}
                isUploadingImage={isUploadingImage}
              />
              <Results
                imageUrl={imageUrl}
                colors={colors}
                isLoadingResults={isLoadingResults}
                errors={errors}
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
