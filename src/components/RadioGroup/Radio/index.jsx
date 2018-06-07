import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { Container, Input, Label, Check } from './styles';

class Radio extends PureComponent {
  id = uuid();

  render() {
    const { className, checked, error, label, name, onClick, style } = this.props;

    return (
      <Container className={className} onClick={onClick} style={style}>
        <Input type="radio" checked={checked} name={name} id={this.id} />
        <Check error={error} />
        <Label for={this.id} onClick={onClick}>{label}</Label>
      </Container>
    );
  }
}

Radio.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

Radio.defaultProps = {
  checked: false,
  className: '',
  error: '',
  onClick: () => {},
  style: {},
};

export default Radio;
