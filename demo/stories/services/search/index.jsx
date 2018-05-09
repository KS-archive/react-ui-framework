import React, { PureComponent } from 'react';
import { Input, Button } from 'react-ui-framework';
import { withSearch } from 'react-ui-framework/services/search';
import { Container, Section, Flexbox, Header } from '../../../helpers/styles';

const StyledFlexbox = Flexbox.extend`
  align-items: center;
`;

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
          <StyledFlexbox>
            <Input value={this.state.query} onChange={this.onChange} />
            <Button onClick={this.search}>Search</Button>
          </StyledFlexbox>
        </Section>
      </Container>
    );
  }
}
