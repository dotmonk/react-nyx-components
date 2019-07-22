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
class Radiobutton extends Component {
    render() {
        const _a = this.props, { color = "standard", className } = _a, props = __rest(_a, ["color", "className"]);
        let nyxClassName = `nyx-radio-${color}`;
        return (React.createElement("input", Object.assign({ type: "radio", className: `${nyxClassName}${className ? ` ${className}` : ""}` }, props)));
    }
}
export default Radiobutton;
//# sourceMappingURL=Radiobutton.js.map