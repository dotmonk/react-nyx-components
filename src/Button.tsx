import React, { Component, HTMLProps } from "react";

type Props = {
  active?: boolean;
  disabled?: boolean;
  color?: string;
  className?: string;
} & HTMLProps<HTMLAnchorElement>;

class Button extends Component<Props> {
  render() {
    const {
      active,
      disabled,
      color = "standard",
      children,
      className,
      ...props
    } = this.props;

    let nyxClassName = `nyx-button-${color}`;
    if (active) {
      nyxClassName = `nyx-button-active-${color}`;
    }
    if (disabled) {
      nyxClassName = `nyx-button-disabled-${color}`;
    }
    return (
      <a
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </a>
    );
  }
}

export default Button;
