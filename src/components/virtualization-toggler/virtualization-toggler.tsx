import React from 'react';
import { connect } from 'react-redux';

import { toggleVirtualization } from '../../actions';
import { StateModel } from '../../reducer/types';

interface VirtualizationTogglerProps {
  toggle: typeof toggleVirtualization;
  virtualized: boolean;
}

const VirtualizationToggler: React.FC<VirtualizationTogglerProps> = (props) => {
  const { toggle, virtualized } = props;

  return (
    <div>
      <h4>Virtualization State</h4>
      <button
        type="button"
        className={virtualized ? 'btn btn-success' : 'btn btn-danger'}
        onClick={() => toggle()}
      >
        { virtualized ? 'On' : 'Off' }
      </button>
    </div>
  );
};

const mapStateToProps = (state: StateModel) => ({
  virtualized: state.virtualized,
});

const mapDispatchToProps = {
  toggle: toggleVirtualization,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VirtualizationToggler);
