import React, { Component } from "react";
import { Button } from "./index";
class Navbar extends Component {
    render() {
        const { selected, values, disabled, color, onChange } = this.props;
        return (React.createElement("div", null, values.map((value, valueIndex) => (React.createElement(Button, { key: valueIndex, style: {
                marginRight: "-3px",
                marginLeft: "0px",
                borderBottomLeftRadius: valueIndex == 0 ? undefined : "0px",
                borderBottomRightRadius: valueIndex == values.length - 1 ? undefined : "0px",
                borderTopLeftRadius: valueIndex == 0 ? undefined : "0px",
                borderTopRightRadius: valueIndex == values.length - 1 ? undefined : "0px",
                position: "relative",
            }, disabled: disabled, color: color, active: selected === value ? true : false, onClick: () => onChange(value) }, value)))));
    }
}
export default Navbar;
//# sourceMappingURL=Navbar.js.map