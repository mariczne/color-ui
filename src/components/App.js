import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Clarifai from 'clarifai';
import Navbar from './Navbar/Navbar';
import Jumbotron from './Jumbotron/Jumbotron';
import ImageInput from './ImageInput/ImageInput';
import Results from './Results/Results';
import Footer from './Footer/Footer';

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});

class App extends React.Component {
  state = {
    imageUrl: '',
    isUploadingImage: false,
    isLoadingResults: false, // state of receiving results from the API; for loading spinners
    colors: [], // results received from the API - main colors
    errors: [],
  };

  // When the user submits the image external URL
  onUrlInputSubmit = (url) => {
    this.setState({
      imageUrl: url,
      colors: [],
      isLoadingResults: true,
      errors: [],
    }, () => {
      this.onImageSubmit(url);
    });
  }

  // When the user uploads image from their own device
  onUploadImage = (base64, localUrl) => {
    this.setState({
      imageUrl: localUrl,
      colors: [],
      isLoadingResults: true,
      isUploadingImage: true,
      errors: [],
    }, () => {
      this.onImageSubmit(null, base64);
    });
  }

  // Send external URL or base64 string to API
  onImageSubmit = (url, base64) => {
    const config = {};
    if (url) {
      config.url = url;
    } else if (base64) {
      config.base64 = base64;
    }

    clarifaiApp.models.predict(Clarifai.COLOR_MODEL, config)
      .then(response => this.handleResponse(response), (response) => {
        if (response.status.code !== 10000) {
          const errorDescription = response.data.outputs[0].status.description;
          this.setState(prevState => ({
            errors: [...prevState.errors, errorDescription || response.statusText],
            isLoadingResults: false,
            isUploadingImage: false,
          }));
        }
      });
  };

  handleResponse = (response) => {
    const { colors } = response.outputs[0].data;
    colors.sort((a, b) => b.value - a.value);
    this.setState({ colors, isLoadingResults: false, isUploadingImage: false });
  };

  render() {
    const {
      imageUrl, colors, isLoadingResults, isUploadingImage, errors,
    } = this.state;

    return (
      <>
        <Navbar />
        <Container fluid>
          <Grid container>
            <Grid.Row>
              <Grid.Column style={{ paddingLeft: 0, paddingRight: 0 }}>
                <Jumbotron />
                <ImageInput
                  onUrlInputSubmit={this.onUrlInputSubmit}
                  onUploadImage={this.onUploadImage}
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
  }
}

export default App;
