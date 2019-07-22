import React, { Component, HTMLProps } from "react";

type Props = {
  color?: string;
  className?: string;
} & HTMLProps<HTMLTextAreaElement>;

class Textarea extends Component<Props> {
  render() {
    const { color = "standard", className, children, ...props } = this.props;
    let nyxClassName = `nyx-textarea-${color}`;

    return (
      <textarea
        className={`${nyxClassName}${className ? ` ${className}` : ""}`}
        {...props}
      >
        {children}
      </textarea>
    );
  }
}

export default Textarea;
