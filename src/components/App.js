import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Clarifai from 'clarifai';
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron';
import ImageInput from './ImageInput/ImageInput';
import Results from './Results/Results';
import Footer from './Footer';

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});

class App extends React.Component {
  state = {
    imageUrl: '',
    imageBase64: null,
    uploadedImageLocalUrl: '',
    isUploadingImage: false,
    isLoadingResults: false,
    colors: [],
    errors: {},
  };

  onUrlInputSubmit = (url) => {
    this.setState({
      imageUrl: url,
      imageBase64: null,
      uploadedImageLocalUrl: '',
      colors: [],
      isLoadingResults: true,
      errors: {},
    }, this.onImageSubmit);
  }

  onUploadImage = (base64, localUrl) => {
    this.setState({
      imageUrl: '',
      imageBase64: base64,
      uploadedImageLocalUrl: localUrl,
      colors: [],
      isLoadingResults: true,
      isUploadingImage: true,
      errors: {},
    }, this.onImageSubmit);
  }

  onImageSubmit = () => {
    const { imageBase64, imageUrl } = this.state;
    const config = {};
    if (imageUrl) {
      config.url = imageUrl;
    } else if (imageBase64) {
      config.base64 = imageBase64;
    }

    clarifaiApp.models.predict(Clarifai.COLOR_MODEL, config)
      .then(response => this.handleResponse(response), () => {
        this.setState({ errors: 'Error connecting to the API  ' });
      });
  };

  // This will put the colors predicted by the model into state so it could
  // be used in components that visualize the results.
  handleResponse = (response) => {
    const { colors } = response.outputs[0].data;
    colors.sort((a, b) => b.value - a.value);
    this.setState({ colors, isLoadingResults: false, isUploadingImage: false });
  };

  render() {
    const {
      imageUrl, colors, isLoadingResults, uploadedImageLocalUrl, isUploadingImage, errors,
    } = this.state;

    return (
      <Container fluid>
        <Grid className="App" style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Navbar />
            <Grid container style={{ marginTop: '3rem' }}>
              <Jumbotron />
              <Grid.Row>
                <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
                  <ImageInput
                    onUrlInputSubmit={this.onUrlInputSubmit}
                    onUploadImage={this.onUploadImage}
                    isUploadingImage={isUploadingImage}
                  />
                  <Results
                    imageUrl={imageUrl}
                    colors={colors}
                    isLoadingResults={isLoadingResults}
                    uploadedImageLocalUrl={uploadedImageLocalUrl}
                    errors={errors}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid>
        <Footer />
      </Container>
    );
  }
}

export default App;