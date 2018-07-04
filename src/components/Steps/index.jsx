import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle, Rectangle } from './styles';

class Steps extends Component {
  state = {
    amount: this.props.amount,
    step: this.props.step,
  };

  renderSteps = (step) => {
    const figure = [];
    for (let i = 0; i < this.state.amount; i++) {
      figure.push(<Circle index={i + 1} step={step}>{i + 1}</Circle>);
      if (i < this.state.amount - 1) {
        figure.push(<Rectangle index={i + 1} step={step} />);
      }
    }
    return figure;
  }

  render() {
    return (
      <Wrapper>
        {this.renderSteps(this.state.step)}
      </Wrapper>
    );
  }
}

Steps.propTypes = {
  amount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Steps;
