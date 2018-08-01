import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PropTypes from 'prop-types';
import { Container, Hamburger, HidingArrow, Links, Item, Icon, Label } from './styles'

class Sidebar extends Component {
  // const { links } = this.props
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { icon: "far fa-calendar-alt", label: "calendar", href: "/calendar" },
        { icon: "far fa-envelope-open", label: "mail", href: "/mail" }
      ],
      sidebar: "",
      labels: "",
      hamburger: "",
      hidingArrow: "",
      items: "",
    };
  }

  componentDidMount() {
    this.setState({sidebar: document.getElementById("sidebar")});
    this.setState({labels: document.getElementsByClassName("label")});
    this.setState({hamburger: document.getElementById("hamburger")});
    this.setState({hidingArrow: document.getElementById("hidingArrow")});
    this.setState({items: document.getElementsByClassName("item")});
  }
  //instead of these two functions use two styled components - look at stack overflow from zakladki
  show = () => {
    const { sidebar, labels, hamburger, hidingArrow, items } = this.state
    sidebar.style.width = 200 + 'px'
    hamburger.style.display = 'none';
    hidingArrow.style.display = 'block';
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.display = 'inline';
      items[i].style.width = 200 + 'px';
    }
  }

  hide = () => {
    const { sidebar, labels, hamburger, hidingArrow, items } = this.state
    sidebar.style.width = 48 + 'px'
    hamburger.style.display = 'block';
    hidingArrow.style.display = 'none';
    for (let i = 0; i < labels.length; i++) {
      labels[i].style.display = 'none';
      items[i].style.width = 48 + 'px';
    }
  }

  render() {
    return (
      <Container id="sidebar">
    {console.log("el", this.state.sidebar)}
        <Hamburger id="hamburger" onClick={this.show}>
          <i className="fas fa-bars"></i>
        </Hamburger>
        <HidingArrow id="hidingArrow" onClick={this.hide}>
          <i className="fas fa-arrow-left"></i>
        </HidingArrow>
        <Router>
          <Links>
            {
              this.state.links.map(link => {
                return (
                  <Item to={link.href} className="item">
                    <Icon className={link.icon}></Icon>
                    <Label className="label">{link.label}</Label>
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
