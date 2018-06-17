import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Card, Color, CopiedLabel, Content, ColorText, Value, Bold } from './styles';

class ColorCard extends PureComponent {
  state = {
    copied: false,
  }

  copy = () => this.setState({ copied: true }, () => {
    window.setTimeout(() => this.setState({ copied: false }), 600);
  });

  render() {
    const { colorName, colorValue, hex, rgb, hsl } = this.props;

    return (
      <Card>
        <CopyToClipboard text={hex} onCopy={this.copy}>
          <Color color={colorValue}>
            <CopiedLabel copied={this.state.copied}>Copied!</CopiedLabel>
          </Color>
        </CopyToClipboard>
        <Content>
          <ColorText>{colorName}</ColorText>
          <Value><Bold>HEX: </Bold>{hex}</Value>
          <Value><Bold>RGB: </Bold>{rgb}</Value>
          <Value><Bold>HSL: </Bold>{hsl}</Value>
        </Content>
      </Card>
    );
  }
}

ColorCard.propTypes = {
  colorName: PropTypes.string.isRequired,
  colorValue: PropTypes.string.isRequired,
  hex: PropTypes.string,
  rgb: PropTypes.string,
  hsl: PropTypes.string,
};

ColorCard.defaultProps = {
  hex: '#ffffff',
  rgb: '0, 23, 123',
  hsl: '234, 132, 322',
};

export default ColorCard;
