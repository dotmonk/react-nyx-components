import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLSpanElement>;

class Label extends Component<Props> {
  render() {
    const { children, className, color = "standard", ...props } = this.props;
    let nyxClassName = `nyx-label-${color}`;

    return (
      <span
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </span>
    );
  }
}

export default Label;
