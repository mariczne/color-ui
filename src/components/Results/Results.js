import React from 'react';
import { Segment, Grid, Image, Container } from 'semantic-ui-react';
import ColorsChart from './ColorsChart'
import ColorsList from './ColorsList'

const Results = ({ imageUrl, colorsArray }) => {
  if (!imageUrl || colorsArray.length < 1) {
    return <div />
  }

  const prepareData = (data) => {
    const preparedData = {
      labels: [],
      datasets: [{data}]
    }

    preparedData.labels = data.map((color) => {
      return `${color.w3c.name.replace(/([A-Z])/g, ' $1').trim()} (${color.raw_hex.toUpperCase()})`;
    })
    preparedData.datasets[0].data = data.map((color) => {
      return Math.round(color.value * 100);
    })
    preparedData.datasets[0].backgroundColor = data.map((color) => {
      return color.raw_hex;
    })
    preparedData.datasets[0].label = 'Color';
    
    return preparedData;
  }

  return ( 
    <Segment>
      <Grid container divided="vertically">
        <Grid.Row>
          <Container>
            <Image alt='' src={imageUrl} rounded fluid/>
          </Container>
        </Grid.Row>
        <Grid.Row centered>
          <Grid divided columns={2} container stackable>
            <Grid.Row stretched>
              <Grid.Column>
                <ColorsChart data={prepareData(colorsArray)} />
              </Grid.Column>
              <Grid.Column>
                <ColorsList data={colorsArray} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default Results;