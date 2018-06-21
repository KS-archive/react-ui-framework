import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Wrapper, Circle, Rectangle } from './styles';

class Steps extends Component {
  constructor(props) {
    super(props);

    // const { amount } = this.props;

    this.state = {
      amount: 3,
    };
  }
  renderCircle() {
    return <Circle />;
  }

  render() {
    return (
      <Wrapper>
        {_.times(this.state.amount, this.renderCircle)}
      </Wrapper>
    );
  }
}

Steps.propTypes = {
  // className: PropTypes.string,
};

export default Steps;
