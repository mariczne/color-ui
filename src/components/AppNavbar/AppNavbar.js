import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import logo from './logo.png';

export default class AppNavbar extends Component {
  state = { activeItem: 'main' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    
    return (
      <Menu stackable>
        <Menu.Item
          name='main' 
          active={activeItem === 'main'} 
          onClick={this.handleItemClick}
        >
            <Image src={logo}
            size='mini'/>
            color-ui
        </Menu.Item>

        <Menu.Item 
          name='sign-in' 
          active={activeItem === 'sign-in'} 
          onClick={this.handleItemClick}
        >
          Sign-in
        </Menu.Item>
      </Menu>
    );
  }
}