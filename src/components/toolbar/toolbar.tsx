import React from 'react';

import SearchBar from '../search-bar';
import VisibilityBar from '../visibility-bar';
import VirtualizationToggler from '../virtualization-toggler';
import CSVButton from '../csv-button';

const Toolbar: React.FC = () => (
  <div className="d-flex justify-content-around align-items-center mb-2 mt-4">
    <SearchBar />
    <VisibilityBar />
    <VirtualizationToggler />
    <CSVButton />
  </div>
);

export default Toolbar;
