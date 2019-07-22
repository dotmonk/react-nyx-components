import { Component } from "react";
declare type Props = {
    color?: string;
    disabled?: boolean;
    value?: any;
    onChange: Function;
    options: Array<Option>;
    placeholder?: string;
};
declare type State = {
    expanded: boolean;
};
declare type Option = {
    value: any;
    name: string;
};
declare class Select extends Component<Props, State> {
    constructor(props: Props);
    render(): JSX.Element;
}
export default Select;
//# sourceMappingURL=Select.d.ts.map