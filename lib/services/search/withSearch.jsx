import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';
import queryString from 'query-string';
import { setSearch } from './actions';

export default (WrappedComponent) => {

  @withRouter
  @connect(({ search }) => ({ search }), { setSearch })
  class WithSearch extends PureComponent {
    componentWillMount() {
      if (this.props.location.search) {
        this.setSearch(queryString.parse(this.props.location.search));
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
        console.log(nextProps.location);
      }
    }

    setSearch = (queryObj) => {
      this.props.setSearch(queryObj, this.props.history);
    }

    render() {
      return (
        <WrappedComponent {...this.props} setSearch={this.setSearch} />
      );
    }
  }

  return WithSearch;
};
