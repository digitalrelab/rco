import * as React from "react";
declare const ClickOutside: React.FunctionComponent<IClickOutside>;
interface IClickOutside {
    children: React.ReactNode;
    exceptions?: TQuerySelector[];
    onClickOutside?: (event: MouseEvent) => void;
}
declare type TQuerySelector = string;
export default ClickOutside;
