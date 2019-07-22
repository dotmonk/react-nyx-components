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
class Loading extends Component {
    render() {
        const _a = this.props, { children, className, color = "standard" } = _a, props = __rest(_a, ["children", "className", "color"]);
        let nyxClassName = `nyx-loading-${color}`;
        return (React.createElement("span", Object.assign({ className: `${nyxClassName}${className ? ` ${className}` : ""}` }, props), children));
    }
}
export default Loading;
//# sourceMappingURL=Loading.js.map