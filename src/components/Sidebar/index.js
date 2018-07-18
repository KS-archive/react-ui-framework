import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Hamburger, Arrow, Links, Link, Icon, Label } from './styles'

class Sidebar extends Component {
  // const { links } = this.props
  state = {
    links: [
      { icon: "far fa-calendar-alt", label: "calendar" },
      { icon: "far fa-envelope-open", label: "mail" }
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
        <Links className="links">
          {
            this.state.links.map(link => {
              return (
                <Link id="link">
                  <Icon className={link.icon}></Icon>
                  <Label>{link.label}</Label>
                </Link>
              )
            })
          }
        </Links>
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
