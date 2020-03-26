import React from 'react';
import { connect } from 'react-redux';
import { filterByAll } from '../../actions/index';
import { StateModel } from '../../reducer/types';

import './search-bar.scss';

interface SearchBarProps {
  filterAll: typeof filterByAll;
  query: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterAll, query }) => (
  <input
    className="input"
    type="text"
    placeholder="Start typing your search..."
    onChange={(e) => filterAll(e.target.value)}
    value={query}
  />
);

const mapStateToProps = (state: StateModel) => ({
  query: state.query,
});

const mapDispatchToProps = {
  filterAll: filterByAll,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar);
