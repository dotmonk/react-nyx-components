import { Component, HTMLProps } from "react";
declare type Props = {
    active?: boolean;
    disabled?: boolean;
    color?: string;
    className?: string;
} & HTMLProps<HTMLAnchorElement>;
declare class Button extends Component<Props> {
    render(): JSX.Element;
}
export default Button;
//# sourceMappingURL=Button.d.ts.map