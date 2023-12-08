import { ReactNode } from "react";

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
  onCommentsClick?: ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
  commentsCount?: number;
}

export interface IErrorsDropdown {
  errors?: ReactNode[];
  errorsText?: ReactNode;
  errorText?: ReactNode;
}
