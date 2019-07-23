import React from 'react';
import {
  Segment, Grid, Image, Message, Icon,
} from 'semantic-ui-react';
import ColorsChart from './ColorsChart';
import ColorsList from './ColorsList';

const Results = (props) => {
  const {
    imageUrl, colors, isLoadingResults, uploadedImageLocalUrl, errors,
  } = props;

  if (!imageUrl && colors.length < 1 && errors.length < 1) {
    return null;
  }

  if (errors.length > 0) {
    return (
      <Segment style={{ marginBottom: '1rem' }}>
        <Message negative icon>
          <Icon name="x" />
          <Message.Content>
            <Message.Header>{errors}</Message.Header>
            Please try again
          </Message.Content>
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
            <ColorsChart colors={colors} />
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
