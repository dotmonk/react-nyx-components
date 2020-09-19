import React, { Component, HTMLProps } from "react";
import { Button } from "./index";

type Props = {
  selected?: string;
  values: string[];
  onChange: (selectedValue: string) => any;
  disabled?: boolean;
  color?: string;
  className?: string;
};

class Navbar extends Component<Props> {
  render() {
    const { selected, values, disabled, color, onChange } = this.props;

    return (
      <div>
        {values.map((value, valueIndex) => (
          <Button
            key={valueIndex}
            style={{
              marginRight: "-3px",
              marginLeft: "0px",
              borderBottomLeftRadius: valueIndex == 0 ? undefined : "0px",
              borderBottomRightRadius:
                valueIndex == values.length - 1 ? undefined : "0px",
              borderTopLeftRadius: valueIndex == 0 ? undefined : "0px",
              borderTopRightRadius:
                valueIndex == values.length - 1 ? undefined : "0px",
              position: "relative",
            }}
            disabled={disabled}
            color={color}
            active={selected === value ? true : false}
            onClick={() => onChange(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    );
  }
}

export default Navbar;
