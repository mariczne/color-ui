import React, { Component } from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
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
      <Segment style={{marginBottom: '1rem'}}>
        <Grid columns={2} stackable stretched>
          <Grid.Column width={10}>
            <Segment>
              <Image alt='' src={this.props.imageUrl} rounded fluid centered style={{maxHeight: '450px', width: 'auto'}}/>
            </Segment> 
          </Grid.Column>
          <Grid.Column width={6} stretched>
            <Segment style={{height: '50%'}}>
              <ColorsList data={this.props.colorsArray} />    
            </Segment>
            <Segment style={{height: '50%'}}>
              <ColorsChart data={this.prepareData(this.props.colorsArray)} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Results;