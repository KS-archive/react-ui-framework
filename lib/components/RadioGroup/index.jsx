import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import Container from './styles';

class RadioGroup extends PureComponent {
  state = {
    value: this.props.value,
  };

  onChange = (name) => {
    if (this.state.value !== name) {
      this.setState({ value: name });
      this.props.onChange(name);
    }
  }

  render() {
    return (
      <Container>
        {this.props.items.map(item => (
          <Radio
            key={item.name}
            onClick={() => this.onChange(item.name)}
            checked={this.state.value === item.name}
            {...item}
          />
        ))}
      </Container>
    );
  }
}

RadioGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

RadioGroup.defaultProps = {
  label: '',
  onChange: () => { },
};

export default RadioGroup;
