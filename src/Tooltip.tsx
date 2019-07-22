import React, { Component } from "react";

const defaultWidth = 200;

type Props = {
  color?: string;
  width?: number;
  tooltip: any;
  className?: string;
};

class Tooltip extends Component<Props> {
  render() {
    const { tooltip, color = "standard", width, children } = this.props;

    return (
      <span className={`nyx-tooltip-${color}`}>
        {children}
        <span
          className="nyx-tooltip-bubble"
          style={{
            width: `${width || defaultWidth}px`,
            marginLeft: `-${(width || defaultWidth) / 2}px`
          }}
        >
          {tooltip}
        </span>
      </span>
    );
  }
}

export default Tooltip;
