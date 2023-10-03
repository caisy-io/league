import {ReactNode} from "react";
import {ErrorsDropdown} from "./ErrorsDropdown";

export interface IInputFieldProps {
  title: string;
  description?: string;
  required: boolean;
  tooltip?: ReactNode | (() => ReactNode);
  errors?: ReactNode[];
  errorsText?: ReactNode;
  errorText?: ReactNode;
  onExpand?: () => void;
  onCollapse?: () => void;
  id?: string;
  icon?: ReactNode;
  children?: ReactNode;
  usersListComponent?: ReactNode;
  onClick?: () => void;
  onClickOutside?: () => void;
  // fieldType?: string;
  primary?: boolean;
  outsideWrapper?: boolean;
  wrapperBgColor?: string;
}

export interface IErrorsDropdown {
  errors?: ReactNode[];
  errorsText?: ReactNode;
  errorText?: ReactNode;
}
