import "./switch.css";
import React, { useEffect, useState } from "react";

export default function Switch({ onToggle, children }) {
  const [check, setChecked] = useState(false);
  const updateChecked = () => {
    setChecked(!check);
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          on: check,
          updateChecked: updateChecked,
        });
      })}
    </>
  );
}

Switch.CheckBox = ({ on, updateChecked }) => {
  return (
    <div className="toggle-switch">
      <label className="toggle-label">
        <input type="checkbox" checked={on} onChange={updateChecked} />
        <div className="toggle-track">
          <div className="toggle-thumb"></div>
        </div>
      </label>
    </div>
  );
};

Switch.On = ({ on, children }) => {
  return on ? <h1>{children}</h1> : null;
};

Switch.Off = ({ on, children }) => {
  return on ? null : <h1>{children}</h1>;
};
