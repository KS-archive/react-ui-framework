import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { Container, Hamburger, Arrow, Links, Item, Icon, Label } from './styles'

class Sidebar extends Component {
  // const { links } = this.props
  state = {
    links: [
      { icon: "far fa-calendar-alt", label: "calendar", href: "/calendar" },
      { icon: "far fa-envelope-open", label: "mail", href: "/mail" }
    ]
  };

  render() {
    return (
      <Container id="sidebar">
        <Hamburger id="hamburger">
          <i className="fas fa-bars"></i>
        </Hamburger>
        <Arrow id="arrow">
          <i className="fas fa-arrow-left"></i>
        </Arrow>
        <Router>
          <Links className="links">
            {
              this.state.links.map(link => {
                return (
                  <Item id="link" to={link.href}>
                    <Icon className={link.icon}></Icon>
                    <Label>{link.label}</Label>
                  </Item>
                )
              })
            }
          </Links>
        </Router>
      </Container>
    );
  }
}

Sidebar.propTypes = {
  // type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

Sidebar.defaultProps = {
  // type: 'button',
};

export default Sidebar;
