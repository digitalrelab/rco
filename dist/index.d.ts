import * as React from "react";
declare const ClickOutside: React.FunctionComponent<IClickOutside>;
interface IClickOutside {
    onClickOutside: (event: MouseEvent) => void;
    children: React.ReactNode;
    exceptions?: TQuerySelector[];
}
declare type TQuerySelector = string;
export default ClickOutside;
