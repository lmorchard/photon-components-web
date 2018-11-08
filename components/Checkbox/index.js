import React from "react";
import classNames from "classnames";

import "./index.css";

export const Checkbox = ({ disabled, label, ...props }) => {
  return label ? (
    <label className={classNames("checkbox", { "checkbox--disabled": disabled })}>
      <input {...props} disabled={disabled} className="checkbox__field" type="checkbox" />
      <span className="checkbox__label">{label}</span>
    </label>
  ) : (
    <input {...props} disabled={disabled} type="checkbox" />
  );
};

export default Checkbox;
