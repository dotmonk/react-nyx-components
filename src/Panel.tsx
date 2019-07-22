import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLDivElement>;

class Panel extends Component<Props> {
  render() {
    const { children, className, color = "standard", ...props } = this.props;
    let nyxClassName = `nyx-panel-${color}`;

    return (
      <div
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </div>
    );
  }
}

export default Panel;
