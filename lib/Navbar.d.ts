import { Component } from "react";
declare type Props = {
    selected?: string;
    values: string[];
    onChange: (selectedValue: string) => any;
    disabled?: boolean;
    color?: string;
    className?: string;
};
declare class Navbar extends Component<Props> {
    render(): JSX.Element;
}
export default Navbar;
//# sourceMappingURL=Navbar.d.ts.map