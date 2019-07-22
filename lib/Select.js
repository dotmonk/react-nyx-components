var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Component } from "react";
import Button from "./Button";
class Select extends Component {
    constructor(props) {
        super(props);
        this.state = { expanded: false };
    }
    render() {
        const _a = this.props, { disabled, color, value, onChange, options, placeholder } = _a, props = __rest(_a, ["disabled", "color", "value", "onChange", "options", "placeholder"]);
        const { expanded } = this.state;
        const selectedOptionName = value
            ? (options.find((o) => o.value === value) || {
                name: undefined
            }).name
            : undefined;
        if (disabled) {
            return (React.createElement(Button, Object.assign({ style: { borderRadius: "3px" }, color: color, disabled: disabled }, props),
                selectedOptionName ? selectedOptionName : placeholder || "Select",
                " \u25B9"));
        }
        return (React.createElement("p", { style: { display: "inline-block" } },
            expanded ? (React.createElement("div", { style: {
                    backgroundColor: "rgba(0,0,0,0.5)",
                    position: "fixed",
                    left: "0",
                    right: "0",
                    top: "0",
                    bottom: "0"
                }, onClick: () => this.setState({ expanded: !expanded }) })) : (""),
            React.createElement(Button, Object.assign({ style: { borderRadius: "3px" }, onClick: () => this.setState({ expanded: !expanded }), color: color }, props),
                selectedOptionName ? selectedOptionName : placeholder || "Select",
                " \u25B9"),
            expanded ? (React.createElement("p", { style: { position: "absolute", marginTop: "0px" } }, options.map(option => (React.createElement(Button, { style: {
                    display: "block",
                    borderRadius: "0px",
                    marginTop: "-3px"
                }, color: color, onClick: event => {
                    this.setState({ expanded: !expanded });
                    onChange(option.value);
                    event.stopPropagation();
                } }, option.name))))) : null));
    }
}
export default Select;
//# sourceMappingURL=Select.js.map