import React, { PureComponent } from 'react';
import { Input } from 'react-ui-framework';
import { withSearch } from 'react-ui-framework/services/search';
import { Container, Section, Flexbox, Header, StyledButton } from '../../../helpers/styles';

@withSearch
export default class Notifications extends PureComponent {
  state = {
    query: this.props.query,
  }

  onChange = (value) => {
    this.setState({ query: value });
  }

  search = () => {
    this.props.setSearch({ query: this.state.query });
  }

  render() {
    return (
      <Container>
        <Section>
          <Header>Basic search</Header>
          <Flexbox>
            <Input value={this.state.query} onChange={this.onChange} />
            <StyledButton onClick={this.search}>Search</StyledButton>
          </Flexbox>
        </Section>
      </Container>
    );
  }
}
