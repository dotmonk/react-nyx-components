import React, { Component } from "react";
const defaultWidth = 200;
class Tooltip extends Component {
    render() {
        const { tooltip, color = "standard", width, children } = this.props;
        return (React.createElement("span", { className: `nyx-tooltip-${color}` },
            children,
            React.createElement("span", { className: "nyx-tooltip-bubble", style: {
                    width: `${width || defaultWidth}px`,
                    marginLeft: `-${(width || defaultWidth) / 2}px`
                } }, tooltip)));
    }
}
export default Tooltip;
//# sourceMappingURL=Tooltip.js.map