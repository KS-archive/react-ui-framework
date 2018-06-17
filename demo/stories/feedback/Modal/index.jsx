import React, { PureComponent } from 'react';
import { text, select, boolean, object, number } from '@storybook/addon-knobs';
import { Modal } from 'react-ui-framework';
import { WithFigma } from 'storybook-addon-figma';
import { Container, Flexbox, Section, Header, StyledButton } from '../../../helpers/styles';

const animations = {
  fade: 'fade',
  zoom: 'zoom',
  slideDown: 'slideDown',
  slideLeft: 'slideLeft',
  slideRight: 'slideRight',
  slideUp: 'slideUp',
  flip: 'flip',
  rotate: 'rotate',
  door: 'door',
};

export default class ModalDocs extends PureComponent {
  state = {
    simple: false,
    second: false,
  };

  show = (name) => {
    this.setState({ ...this.state, [name]: true });
  };

  hide = (name) => {
    this.setState({ ...this.state, [name]: false });
  };

  render() {
    return (
      <WithFigma url="https://www.figma.com/file/F9pUSx2OKC4KlQ7Gcfh9vvEI/Feedback?node-id=1%3A2">
        <Container style={{ height: '500vh' }}>
          <Section>
            <Header>Simple modal</Header>
            <Flexbox>
              <StyledButton onClick={() => this.show('simple')}>Simple modal</StyledButton>
              <Modal
                buttons={[
                  {
                    onClick: () => this.show('second'),
                    label: 'Submit',
                  },
                  {
                    onClick: () => this.hide('simple'),
                    label: 'Cancel',
                    kind: 'grey',
                  },
                ]}
                onClose={() => this.hide('simple')}
                visible={this.state.simple}
                className={text('className', 'ruf-modal')}
                color={text('color', 'var(--primary2)')}
                duration={number('duration', 300)}
                enterAnimation={select('enterAnimation', animations, 'fade')}
                icon={text('icon', 'icons/bookmark.svg')}
                leaveAnimation={select('leaveAnimation', animations, 'fade')}
                showCloseButton={boolean('showCloseButton', true)}
                style={object('style', {})}
                title={text('title', 'Simple modal')}
                width={number('width', 456)}
              >
                {text('children', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem.')}
              </Modal>
              <Modal
                visible={this.state.second}
                onClose={() => this.hide('second')}
                title="Simple modal 2"
                icon="icons/bookmark.svg"
                buttons={[
                  {
                    onClick: () => console.log(1),
                    label: 'Submit',
                  },
                  {
                    onClick: () => this.hide('second'),
                    label: 'Cancel',
                    kind: 'grey',
                  },
                ]}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem.
                Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.
              </Modal>
            </Flexbox>
          </Section>
        </Container>
      </WithFigma>
    );
  }
}
