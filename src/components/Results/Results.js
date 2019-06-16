import React, { Component } from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import ColorsChart from './ColorsChart';
import ColorsList from './ColorsList';

class Results extends Component {
  prepareData = (data) => {
    const preparedData = {
      labels: [],
      datasets: [{ data }],
    };

    preparedData.labels = data.map(color => `${color.w3c.name.replace(/([A-Z])/g, ' $1').trim()} (${color.raw_hex.toUpperCase()})`);

    preparedData.datasets[0].data = data.map(color => Math.round(color.value * 100));

    preparedData.datasets[0].backgroundColor = data.map(color => color.raw_hex);

    preparedData.datasets[0].hoverBackgroundColor = [...preparedData.datasets[0].backgroundColor];

    preparedData.datasets[0].label = 'Color';

    return preparedData;
  }

  render() {
    const { imageUrl, colorsArray, loading } = this.props;

    if (!imageUrl && colorsArray.length < 1) {
      return null;
    }

    return (
      <Segment style={{ marginBottom: '1rem' }}>
        <Grid columns={2} stackable stretched>
          <Grid.Column width={10}>
            <Segment style={{ display: 'flex', alignItems: 'center', minHeight: '100px' }} loading={loading}>
              <Image alt="" src={imageUrl} rounded fluid centered style={{ maxHeight: '450px', width: 'auto' }} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={6} stretched>
            <Segment style={{ height: '50%' }} loading={loading}>
              <ColorsChart data={this.prepareData(colorsArray)} />
            </Segment>
            <Segment style={{ height: '50%' }} loading={loading}>
              <ColorsList data={colorsArray} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    );
  }
}

export default Results;
