import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLAnchorElement>;

class Link extends Component<Props> {
  render() {
    const { color = "standard", className, children, ...props } = this.props;
    let nyxClassName = `nyx-link-${color}`;

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

export default Link;
