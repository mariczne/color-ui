import React, { Component } from 'react';
import { Segment, Grid, Image, Container } from 'semantic-ui-react';
import ColorsChart from './ColorsChart';
import ColorsList from './ColorsList';

class Results extends Component {
  prepareData = (data) => {
    const preparedData = {
      labels: [],
      datasets: [{data}]
    };

    preparedData.labels = data.map((color) => {
      return `${color.w3c.name.replace(/([A-Z])/g, ' $1').trim()} (${color.raw_hex.toUpperCase()})`;
    });

    preparedData.datasets[0].data = data.map((color) => {
      return Math.round(color.value * 100);
    });

    preparedData.datasets[0].backgroundColor = data.map((color) => {
      return color.raw_hex;
    });

    preparedData.datasets[0].label = 'Color';
    
    return preparedData;
  }

  render() {
    if (!this.props.imageUrl || this.props.colorsArray.length < 1) {
      return <div />;
    }
    
    return (
      <Segment>
      <Grid container divided="vertically">
        <Grid.Row>
          <Container>
            <Image alt='' src={this.props.imageUrl} rounded centered style={{maxHeight: '450px', width: 'auto'}}/>
          </Container>
        </Grid.Row>
        <Grid.Row centered>
          <Grid divided columns={2} container stackable>
            <Grid.Row stretched>
              <Grid.Column>
                <ColorsChart data={this.prepareData(this.props.colorsArray)} />
              </Grid.Column>
              <Grid.Column>
                <ColorsList data={this.props.colorsArray} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
      </Segment>
    );
  }
}

export default Results;