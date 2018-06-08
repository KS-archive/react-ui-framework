import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import enhanceWithClickOutside from 'react-click-outside';
import { Container, BigFab, Wrapper, SmallFab, Badge } from './styles';

const getTooltipPosition = position => do {
  if (position.includes('right')) 'left';
  else if (position.includes('left')) 'right';
  else if (position.includes('top')) 'bottom';
  else 'top';
};

const calculateDistance = (elem, mouseX, mouseY) => {
  const { left, top } = elem.getBoundingClientRect();
  const x = mouseX - (left + document.body.scrollLeft + elem.offsetWidth / 2);
  const y = mouseY - (top + document.body.scrollTop + elem.offsetHeight / 2);
  return {
    x: Math.abs(x),
    y: Math.abs(y),
  };
};

const renderSmallFab = ({ title, icon, onClick }, i, position, isOpen) => (
  <Wrapper pos={isOpen && i + 1} onClick={onClick} position={position}>
    <SmallFab title={title} size="small" position={getTooltipPosition(position)}>
      <ReactSVG path={icon} />
    </SmallFab>
  </Wrapper>
);

@enhanceWithClickOutside
class Fab extends PureComponent {
  state = {
    open: false,
  };

  componentWillUpdate(nextProps, nextState) {
    if (this.state.open && !nextState.open) {
      document.removeEventListener('mousemove', this.onMouseMove);
    } else if (!this.state.open && nextState.open) {
      document.addEventListener('mousemove', this.onMouseMove);
    }
  }

  onMouseMove = ({ pageX, pageY }) => {
    const { x, y } = calculateDistance(this.fab, pageX, pageY);
    const { position } = this.props;
    if (position === 'right center' || position === 'left center') {
      if (x > this.props.items.length * 64 + 91 || y > 96) {
        this.setState({ open: false });
      }
    } else if (x > 96 || y > this.props.items.length * 64 + 91) {
      this.setState({ open: false });
    }
  };

  handleClick = () => {
    const {
      props: { items, onClick },
      state: { open },
    } = this;
    if (items.length === 0) {
      onClick();
    } else {
      this.setState({ open: !open });
    }
  };

  handleClickOutside() {
    this.setState({ open: false });
  }

  render() {
    const {
      props: { className, icon, title, items, count, iconOpen, position, offset },
      state: { open },
    } = this;
    return (
      <Container
        className={className}
        onClick={this.handleClick}
        open={open}
        innerRef={(x) => {
          this.fab = x;
        }}
        position={position}
        offset={offset}
      >
        <Badge count={count}>
          <BigFab disabled={open} title={title} position={getTooltipPosition(position)} touchHold>
            <ReactSVG path={icon} />
            <ReactSVG path={iconOpen || icon} />
          </BigFab>
        </Badge>
        {items.map((p, i) => renderSmallFab(p, i, position, open))}
      </Container>
    );
  }
}

Fab.propTypes = {
  className: PropTypes.string,
  count: PropTypes.number,
  icon: PropTypes.string.isRequired,
  iconOpen: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string,
  })),
  offset: PropTypes.arrayOf(PropTypes.number),
  onClick: PropTypes.func,
  position: PropTypes.oneOf([
    'left top',
    'left center',
    'left bottom',
    'center top',
    'center bottom',
    'right top',
    'right center',
    'right bottom',
  ]),
  title: PropTypes.string,
};

Fab.defaultProps = {
  className: '',
  count: null,
  iconOpen: '',
  items: [],
  offset: [0, 0],
  onClick: () => {},
  position: 'right bottom',
  title: '',
};

export default Fab;
