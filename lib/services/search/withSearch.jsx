import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import withRouter from 'react-router/withRouter';
import queryString from 'query-string';
import { setSearch } from './actions';
import { objRemove } from '../../utils/immutable';

export default (WrappedComponent) => {

  @withRouter
  @connect(({ search }) => ({ search }), { setSearch })
  class WithSearch extends PureComponent {
    componentWillMount() {
      if (this.props.location.search) {
        this.setSearch(queryString.parse(this.props.location.search));
      }
    }

    componentWillReceiveProps(np) {
      if (np.location.search !== this.props.location.search) {
        this.setSearch(queryString.parse(np.location.search));
      }
      if (np.search !== this.props.search) {
        const urlNewParams = np.search.query ? np.search : objRemove(np.search, 'query');
        np.history.push({
          pathname: np.history.location.pathname,
          search: queryString.stringify(urlNewParams),
        });
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
