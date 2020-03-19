import React from "react";
import { Segment, Grid, Image } from "semantic-ui-react";
import ColorsChart from "./ColorsChart";
import ColorsList from "./ColorsList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";

const Results = ({ imageUrl, colors, isLoadingResults, errors }) => {
  if (!imageUrl && colors.length < 1 && errors.length < 1) {
    return null;
  }

  if (errors.length > 0) {
    return errors.map(error => <ErrorMessage key={error} error={error} />);
  }

  return (
    <Segment>
      <Grid columns={2} stackable stretched>
        <Grid.Column width={10}>
          <Segment
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "100px"
            }}
          >
            <Image
              alt="Image supplied by the user"
              src={imageUrl}
              rounded
              fluid
              centered
              style={{ maxHeight: "450px", width: "auto" }}
            />
          </Segment>
        </Grid.Column>
        <Grid.Column width={6} stretched>
          <Segment style={{ height: "50%" }} loading={isLoadingResults}>
            <ColorsChart colors={colors} />
          </Segment>
          <Segment
            style={{ height: "50%", textAlign: "center" }}
            loading={isLoadingResults}
          >
            <ColorsList colors={colors} />
            <small>
              <i>tip: click on color to copy it to clipboard!</i>
            </small>
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Results;
