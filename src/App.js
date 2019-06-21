import React from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Clarifai from 'clarifai';
import axios from 'axios';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ImageInput from './components/ImageInput/ImageInput';
import Results from './components/Results/Results';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});

class App extends React.Component {
  state = {
    urlInput: '',
    imageUrl: '',
    uploadedImage: '',
    uploadingImage: false,
    loadingResults: false,
    colors: [],
  };

  onUrlInputChange = (event) => {
    this.setState({ urlInput: event.target.value });
  };

  onUploadImageChange = (event) => {
    if (event.target.files) {
      this.setState({ uploadedImage: event.target.files[0], uploadingImage: true }, this.uploadImage);
    }
  };

  uploadImage = () => {
    const data = new FormData();

    const { uploadedImage } = this.state;

    data.append('image', uploadedImage);

    axios.post('https://api.imgur.com/3/image', data, {
      headers: {
        "Authorization": `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
      }
    })
      .then((res) => {
        this.setState({ urlInput: res.data.data.link, uploadingImage: false }, this.onImageSubmit);

        // Delete uploaded image from the server after 3 minutes
        const sleep = waitTimeInMs => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

        sleep(240000).then(() => {
          axios.delete(`https://api.imgur.com/3/image/${res.data.data.deletehash}`, {
            headers: {
              "Authorization": `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT_ID}`,
            },
          });
        });
      });
  }

  onImageSubmit = () => {
    const { urlInput } = this.state;
    this.setState({ imageUrl: urlInput, colors: [], loadingResults: true });
    clarifaiApp.models.predict(Clarifai.COLOR_MODEL, urlInput)
      .then(response => this.passColors(response),
        () => console.error('Clarifai API error'));
    // Displaying error object inside console would compromise API key
  };

  // This will put the colors predicted by the model into state so it could
  // be used in components that visualize the results.
  passColors = (response) => {
    const { colors } = response.outputs[0].data;
    colors.sort((a, b) => b.value - a.value);
    this.setState({ colors, loadingResults: false });
  };

  render() {
    const {
      imageUrl, colors, loadingResults, uploadedImage, uploadingImage,
    } = this.state;

    return (
      <Container fluid>
        <Grid className="App" style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
            <AppNavbar />
            <Grid container style={{ marginTop: '3rem' }}>
              <Jumbotron />
              <Grid.Row>
                <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
                  <ImageInput
                    onUrlInputChange={this.onUrlInputChange}
                    onImageSubmit={this.onImageSubmit}
                    onUploadImageChange={this.onUploadImageChange}
                    uploadingImage={uploadingImage}
                  />
                  <Results
                    imageUrl={imageUrl}
                    colorsArray={colors}
                    loadingResults={loadingResults}
                    uploadedImage={uploadedImage}
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
