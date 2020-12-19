import { Menu, Image, Container, Icon } from "semantic-ui-react";
import logo from "./logo.png";

const APP_NAME = "color-ui";

const Navbar = () => (
  <Menu borderless>
    <Container>
      <Menu.Item as="a" header>
        <Image src={logo} size="mini" style={{ marginRight: "1em" }} />
        {APP_NAME}
      </Menu.Item>
      <Menu.Item position="right" href="//github.com/mariczne/color-ui">
        <Icon name="github" size="large" fitted />
      </Menu.Item>
    </Container>
  </Menu>
);

export default Navbar;
