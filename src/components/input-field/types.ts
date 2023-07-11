import { ReactNode } from "react";

export interface IInputFieldProps {
  title: string;
  description?: string;
  required: boolean;
  tooltip?: ReactNode | (() => ReactNode);
  errors?: ReactNode[];
  onExpand?: () => void;
  onCollapse?: () => void;
  id?: string;
  icon?: ReactNode;
  children?: React.ReactNode;
  usersListComponent?: React.ReactNode;
  onClick?: () => void;
  onClickOutside?: () => void;
  // fieldType?: string;
}
