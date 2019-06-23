import React from 'react';
import {
  Segment, Grid, Image, Message,
} from 'semantic-ui-react';
import ColorsChart from './ColorsChart';
import ColorsList from './ColorsList';

const prepareData = (data) => {
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
};

const Results = (props) => {
  const {
    imageUrl, colors, isLoadingResults, uploadedImageLocalUrl, errors,
  } = props;

  if (!imageUrl && colors.length < 1) {
    return null;
  }

  if (errors.length > 0) {
    return (
      <Segment style={{ marginBottom: '1rem' }}>
        <Message negative>
          <Message.Header>{errors}</Message.Header>
          <p>Please try again</p>
        </Message>
      </Segment>
    );
  }

  return (
    <Segment style={{ marginBottom: '1rem' }}>
      <Grid columns={2} stackable stretched>
        <Grid.Column width={10}>
          <Segment style={{ display: 'flex', alignItems: 'center', minHeight: '100px' }}>
            <Image alt="" src={uploadedImageLocalUrl || imageUrl} rounded fluid centered style={{ maxHeight: '450px', width: 'auto' }} />
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} stretched>
          <Segment style={{ height: '50%' }} loading={isLoadingResults}>
            <ColorsChart colors={prepareData(colors)} />
          </Segment>
          <Segment style={{ height: '50%' }} loading={isLoadingResults}>
            <ColorsList colors={colors} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Results;
