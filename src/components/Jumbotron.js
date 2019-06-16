import React, { Component } from 'react'
import { Message, Header } from 'semantic-ui-react'

class Jumbotron extends Component {
  state = { visible: true }

  handleDismiss = () => {
    this.setState({ visible: false });
  }

  onExampleInput = () => {
    this.props.onExampleInput();
  }

  render() {
    if (this.state.visible) {
      return (
        <Message color='teal' onDismiss={this.handleDismiss} style={{ margin: '0 auto' }}>
          <Header as='h1'>Hello!</Header>
          <p style={{ fontSize: "16px" }}>
            This is color-ui, a simple web interface which analyzes the color composition of an image for you. To begin, either paste the URL of the image in the box below and click 'Send' or upload one from your device.
          </p>
        </Message>
      )
    }

    return null;
  }
}

export default Jumbotron;