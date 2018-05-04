import React, { PureComponent } from 'react';
import ReactSVG from 'react-svg';
import enhanceWithClickOutside from 'react-click-outside';
import { Container, BigFab, Wrapper, SmallFab, Badge } from './styles';

@enhanceWithClickOutside
export default class Fab extends PureComponent {
  state = {
    open: false,
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.open && !nextState.open) {
      document.removeEventListener('mousemove', this.onMouseMove);
    } else if (!this.state.open && nextState.open) {
      document.addEventListener('mousemove', this.onMouseMove);
    }
  }

  onMouseMove = ({ pageX, pageY }) => {
    const { x, y } = this.calculateDistance(this.fab, pageX, pageY);
    if ((x > 75) || (y > (this.props.items.length * 64) + 91)) {
      this.setState({ open: false });
    }
  }

  calculateDistance = (elem, mouseX, mouseY) => {
    const { left, top } = elem.getBoundingClientRect();
    const x = mouseX - (left + document.body.scrollLeft + (elem.offsetWidth / 2));
    const y = mouseY - (top + document.body.scrollTop + (elem.offsetHeight / 2));
    return {
      x: Math.abs(x),
      y: Math.abs(y),
    };
  }

  handleClick = () => {
    if (!this.props.items || this.props.items.length === 0) {
      this.props.onClick();
    } else {
      this.setState({ open: !this.state.open });
    }
  }

  handleClickOutside() {
    this.setState({ open: false });
  }

  renderSmallFab = ({ title, icon, onClick }, i) => (
    <Wrapper pos={this.state.open && (i + 1)} onClick={onClick}>
      <SmallFab
        title={title}
        size="small"
        position="left"
      >
        <ReactSVG path={icon} />
      </SmallFab>
    </Wrapper>
  );

  render() {
    const { icon, title, items = [], count, iconOpen } = this.props;
    return (
      <Container
        onClick={this.handleClick}
        open={this.state.open}
        innerRef={(x) => { this.fab = x; }}
      >
        <Badge count={items.length === 0 ? count : null}>
          <BigFab disabled={this.state.open} title={title || ''} position="left" touchHold>
            <ReactSVG path={icon} />
            <ReactSVG path={iconOpen || icon} />
          </BigFab>
        </Badge>
        {items.map(this.renderSmallFab)}
      </Container>
    );
  }
}
