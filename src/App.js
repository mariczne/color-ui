import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Clarifai from 'clarifai';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ImageInput from './components/ImageInput/ImageInput';
import Results from './components/Results/Results';

const clarifaiApp = new Clarifai.App({
  apiKey: process.env.REACT_APP_API_KEY,
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      colors: [],
      loading: false,
    };
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    const { input } = this.state;
    this.setState({ imageUrl: input, colors: [], loading: true });
    clarifaiApp.models.predict(Clarifai.COLOR_MODEL, input)
      .then(response => this.passColors(response),
        // eslint-disable-next-line no-console
        err => console.error(err));
  };

  passColors = (response) => {
    const { colors } = response.outputs[0].data;
    colors.sort((a, b) => b.value - a.value);
    this.setState({ colors, loading: false });
  };

  render() {
    const { imageUrl, colors, loading } = this.state;
    return (
      <Container fluid>
        <Grid className="App" style={{ paddingLeft: '0', paddingRight: '0' }}>
          <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
            <AppNavbar />
            <Grid container style={{ marginTop: '2rem' }}>
              <Grid.Column style={{ paddingLeft: '0', paddingRight: '0' }}>
                <ImageInput
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit}
                />
                <Results imageUrl={imageUrl} colorsArray={colors} loading={loading} />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default App;
