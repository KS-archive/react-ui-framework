import React, { PureComponent } from 'react';
import { Modal } from 'react-ui-framework';
import { Container, Flexbox, Section, Header, StyledButton } from '../../../helpers/styles';

export default class ModalDocs extends PureComponent {
  state = {
    simple: false,
    second: false,
  }

  show = (name) => {
    this.setState({ ...this.state, [name]: true });
  }

  hide = (name) => {
    this.setState({ ...this.state, [name]: false });
  }

  render() {
    return (
      <Container style={{ height: '500vh' }}>
        <Section>
          <Header>Simple modal</Header>
          <Flexbox>
            <StyledButton onClick={() => this.show('simple')}>Simple modal</StyledButton>
            <Modal
              visible={this.state.simple}
              onClose={this.hide}
              title="Simple modal"
              icon="icons/bookmark.svg"
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
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.
            </Modal>
            <Modal
              visible={this.state.second}
              onClose={this.hide}
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis placerat lorem. Duis fringilla luctus augue, et laoreet nisi sagittis sit amet.
            </Modal>
          </Flexbox>
        </Section>
      </Container>
    );
  }
}
