import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLInputElement>;

class Radiobutton extends Component<Props> {
  render() {
    const { color = "standard", className, ...props } = this.props;
    let nyxClassName = `nyx-radio-${color}`;

    return (
      <input
        type="radio"
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      />
    );
  }
}

export default Radiobutton;
