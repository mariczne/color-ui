import React from 'react';
import { Segment, Grid, Image } from 'semantic-ui-react';
import ColorsChart from './ColorsChart'

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
        <Image alt='' src={imageUrl} rounded style={{maxHeight: '75vh', padding: '20px'}} />
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
            <ColorsChart data={prepareData(colorsArray)}/>
          </Grid.Column>
          <Grid.Column>

          </Grid.Column>
        </Grid>
      </Segment>
    );
}

export default Results;