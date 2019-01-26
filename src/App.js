import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar/AppNavbar';
import ImageInput from './components/ImageInput/ImageInput';
import Results from './components/Results/Results';
import { Container, Grid } from 'semantic-ui-react'
import Clarifai from 'clarifai';

const clarifaiApp = new Clarifai.App({
  apiKey: '1e134ae8b9894180bfffd13aa9498509' //do zmiany na zmienna srodowiskowa
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      colors: [],
      route: 'landing'
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    clarifaiApp.models.predict(
      Clarifai.COLOR_MODEL,
      this.state.input)
    .then(response => this.passColors(response),
      (err) => console.log(err));
  }

  passColors = (response) => {
    const colors = response.outputs[0].data.colors;
    colors.sort((a, b) => b.value - a.value);
    this.setState({colors: colors});
  }

  render() {
    return (
      <Grid container className="App">
      <AppNavbar />
        <Container text style={{ marginTop: '6em' }}>
            <ImageInput onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
            <Results imageUrl={this.state.imageUrl} colorsArray={this.state.colors}/>
        </Container>
      </Grid>
    );
  }
}

export default App;