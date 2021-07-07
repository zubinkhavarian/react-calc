import React from "react";

import "./ObjectDebugger.css";

type Props = { object: {}; styles?: React.CSSProperties; controls?: () => React.ReactNode; disabled?: boolean };

const ObjectDebugger: React.FC<Props> = ({ object, controls, styles, disabled = false }) => {
  return !disabled ? (
    <div className="obj-debugger" style={{ ...styles }}>
      {controls && <div className="controls">{controls()}</div>}
      <pre>{JSON.stringify(object, null, 2)}</pre>
    </div>
  ) : null;
};

export default ObjectDebugger;
