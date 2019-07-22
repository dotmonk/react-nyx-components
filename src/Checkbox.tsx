import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLInputElement>;

class Checkbox extends Component<Props> {
  render() {
    const { color = "standard", className, ...props } = this.props;
    let nyxClassName = `nyx-checkbox-${color}`;

    return (
      <input
        type="checkbox"
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      />
    );
  }
}

export default Checkbox;
