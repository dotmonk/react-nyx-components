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
class Input extends Component {
    render() {
        const _a = this.props, { disabled, className, color = "standard" } = _a, props = __rest(_a, ["disabled", "className", "color"]);
        let nyxClassName = `nyx-input-${color}`;
        if (disabled) {
            nyxClassName = `nyx-input-disabled-${color}`;
        }
        return (React.createElement("input", Object.assign({ type: "text", className: `${nyxClassName}${className ? ` ${className}` : ""}`, disabled: disabled ? true : undefined }, props)));
    }
}
export default Input;
//# sourceMappingURL=Input.js.map