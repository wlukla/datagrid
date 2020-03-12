import React from 'react';
import { connect } from 'react-redux';

import { toggleVirtualization } from '../../actions';

interface VirtualizationTogglerProps {
  toggle: typeof toggleVirtualization;
}

const VirtualizationToggler: React.FC<VirtualizationTogglerProps> = ({ toggle }) => (
  <div>
    <h4>Virtualization State</h4>
    <button
      type="button"
      className="btn btn-secondary"
      onClick={() => toggle()}
    >
      On
    </button>
  </div>
);

const mapDispatchToProps = {
  toggle: toggleVirtualization,
};

export default connect(
  null,
  mapDispatchToProps,
)(VirtualizationToggler);
