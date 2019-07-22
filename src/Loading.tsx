import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLSpanElement>;

class Loading extends Component<Props> {
  render() {
    const { children, className, color = "standard", ...props } = this.props;
    let nyxClassName = `nyx-loading-${color}`;

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

export default Loading;
