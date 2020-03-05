import React from 'react';
import { connect } from 'react-redux';
import { filterByAll } from '../../actions/index';

interface SearchBarProps {
  filterAll: typeof filterByAll;
}

const SearchBar: React.FC<SearchBarProps> = ({ filterAll }) => (
  <input
    type="text"
    onChange={(e) => filterAll(e.target.value)}
  />
);

const mapDispatchToProps = {
  filterAll: filterByAll,
};

export default connect(
  null,
  mapDispatchToProps,
)(SearchBar);
