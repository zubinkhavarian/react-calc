import React from 'react';
import PropTypes from 'prop-types';

import './ObjectDebugger.css';

const ObjectDebugger = React.memo(({ object, controls = null, styles = {}, disabled = false }) => {
  return !disabled ? (
    <div className="obj-debugger" style={{ ...styles }}>
      {controls && <div className="controls">{controls()}</div>}
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </div>
  ) : null;
});

ObjectDebugger.propTypes = {
  object: PropTypes.object.isRequired,
  controls: PropTypes.func,
  styles: PropTypes.object,
  disabled: PropTypes.bool,
};

export default ObjectDebugger;
