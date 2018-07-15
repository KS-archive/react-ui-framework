import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    // const { value, pristine } = this.props;

    this.state = {
      // pristine,
    };
  }

  render() {
    return (
      <div>Sidebar</div>
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
