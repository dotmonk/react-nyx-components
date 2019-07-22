import React, { Component } from "react";

import Button from "./Button";

type Props = {
  color?: string;
  disabled?: boolean;
  value?: any;
  onChange: Function;
  options: Array<Option>;
  placeholder?: string;
};

type State = {
  expanded: boolean;
};

type Option = {
  value: any;
  name: string;
};

class Select extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { expanded: false };
  }
  render() {
    const {
      disabled,
      color,
      value,
      onChange,
      options,
      placeholder,
      ...props
    } = this.props;
    const { expanded } = this.state;
    const selectedOptionName = value
      ? (
          options.find((o: Option) => o.value === value) || {
            name: undefined
          }
        ).name
      : undefined;

    if (disabled) {
      return (
        <Button
          style={{ borderRadius: "3px" }}
          color={color}
          disabled={disabled}
          {...props}
        >
          {selectedOptionName ? selectedOptionName : placeholder || "Select"} ▹
        </Button>
      );
    }

    return (
      <p style={{ display: "inline-block" }}>
        {expanded ? (
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "fixed",
              left: "0",
              right: "0",
              top: "0",
              bottom: "0"
            }}
            onClick={() => this.setState({ expanded: !expanded })}
          />
        ) : (
          ""
        )}
        <Button
          style={{ borderRadius: "3px" }}
          onClick={() => this.setState({ expanded: !expanded })}
          color={color}
          {...props}
        >
          {selectedOptionName ? selectedOptionName : placeholder || "Select"} ▹
        </Button>
        {expanded ? (
          <p style={{ position: "absolute", marginTop: "0px" }}>
            {options.map(option => (
              <Button
                style={{
                  display: "block",
                  borderRadius: "0px",
                  marginTop: "-3px"
                }}
                color={color}
                onClick={event => {
                  this.setState({ expanded: !expanded });
                  onChange(option.value);
                  event.stopPropagation();
                }}
              >
                {option.name}
              </Button>
            ))}
          </p>
        ) : null}
      </p>
    );
  }
}

export default Select;
