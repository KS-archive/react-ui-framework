import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tooltip as TippyTooltip } from 'react-tippy';

const sizes = {
  lg: 'big',
  md: 'regular',
  sm: 'small',
};

class Tooltip extends Component {
  state = {
    updated: false,
  }

  componentWillReceiveProps(np) {
    if (np !== this.props) {
      this.setState({ updated: true }, () => {
        window.setTimeout(() => {
          this.setState({ updated: false });
        }, 1);
      });
    }
  }

  render() {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        {!this.state.updated
          ? (
            <TippyTooltip
              animation={this.props.animation}
              arrow={this.props.arrow}
              arrowSize={sizes[this.props.arrowSize]}
              className={this.props.className}
              delay={this.props.delay}
              disabled={this.props.disabled}
              distance={this.props.distance}
              duration={this.props.duration}
              hideDelay={this.props.hideDelay}
              hideOnClick={this.props.hideOnClick}
              html={this.props.html}
              interactive={this.props.interactive}
              offset={this.props.offset}
              open={this.props.open}
              position={this.props.position}
              size={sizes[this.props.size]}
              style={this.props.style}
              theme={this.props.theme}
              title={this.props.title}
              touchHold={this.props.touchHold}
              trigger={this.props.trigger}
            >
              {this.props.children}
            </TippyTooltip>
          ) : this.props.children
        }
      </span>
    );
  }
};

Tooltip.propTypes = {
  animation: PropTypes.oneOf(['shift', 'perspective', 'fade', 'scale', 'none']),
  arrow: PropTypes.bool,
  arrowSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.number,
  disabled: PropTypes.bool,
  distance: PropTypes.number,
  duration: PropTypes.number,
  hideDelay: PropTypes.number,
  hideOnClick: PropTypes.bool,
  html: PropTypes.node,
  interactive: PropTypes.bool,
  offset: PropTypes.number,
  open: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  style: PropTypes.object,
  theme: PropTypes.oneOf(['dark', 'light', 'transparent']),
  title: PropTypes.string.isRequired,
  touchHold: PropTypes.bool,
  trigger: PropTypes.string,
};

Tooltip.defaultProps = {
  animation: 'shift',
  arrow: false,
  arrowSize: 'md',
  className: '',
  delay: 0,
  disabled: false,
  distance: 8,
  duration: 300,
  hideDelay: 0,
  hideOnClick: true,
  html: null,
  interactive: false,
  offset: 0,
  open: undefined,
  position: 'top',
  size: 'md',
  style: {},
  theme: 'dark',
  touchHold: false,
  trigger: 'mouseenter focus',
};

export default Tooltip;
