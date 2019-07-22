import React, { Component, HTMLProps } from "react";

type Props = {
  disabled?: boolean;
  color?: string;
  className?: string;
} & HTMLProps<HTMLInputElement>;

class Input extends Component<Props> {
  render() {
    const { disabled, className, color = "standard", ...props } = this.props;
    let nyxClassName = `nyx-input-${color}`;
    if (disabled) {
      nyxClassName = `nyx-input-disabled-${color}`;
    }

    return (
      <input
        type="text"
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        disabled={disabled ? true : undefined}
        {...props}
      />
    );
  }
}

export default Input;
