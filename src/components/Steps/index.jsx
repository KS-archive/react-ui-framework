import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Circle, Rectangle } from './styles';

class Steps extends Component {
  constructor(props) {
    super(props);

    // const { amount } = this.props;

    this.state = {
      amount: 4,
    };
  }
  renderSth = () => {
    let fig = [];
    for (let i = 0; i < this.state.amount; i++) {
      fig.push(<Circle>{i}</Circle>);
      if (i < this.state.amount - 1) {
        fig.push(<Rectangle />);
      }
    }
    return fig.map(el => el);
  }

  render() {
    return (
      <Wrapper>
        {this.renderSth()}
      </Wrapper>
    );
  }
}

Steps.propTypes = {
  // className: PropTypes.string,
};

export default Steps;
