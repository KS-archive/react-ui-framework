import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle, Rectangle } from './styles';

class Steps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: this.props.amount,
      step: this.props.step,
    };
  }
  renderSth = (step) => {
    const fig = [];
    for (let i = 0; i < this.state.amount; i++) {
      fig.push(<Circle index={i + 1} step={step}>{i}</Circle>);
      if (i < this.state.amount - 1) {
        fig.push(<Rectangle index={i + 1} step={step} />);
      }
    }
    return fig.map(el => el);
  }

  render() {
    return (
      <Wrapper>
        {this.renderSth(this.state.step)}
      </Wrapper>
    );
  }
}

Steps.propTypes = {
  amount: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
};

export default Steps;
