import React, { PureComponent } from 'react';
import { Sidebar } from 'react-ui-framework';
import { Container, Flexbox, Section, Header, StyledButton } from '../../../helpers/styles';

export default class ModalDocs extends PureComponent {
  state = {
    simple: false,
    second: false,
  };

  render() {
    return (
      <Container style={{ height: '500vh' }}>
        <Section>
          <Header>Sidebar</Header>
          <Flexbox>
            <Sidebar />
          </Flexbox>
        </Section>
      </Container>
    );
  }
}
