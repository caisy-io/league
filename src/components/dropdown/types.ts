export interface IDropdownCategory {
  label?: string;
  key: string;
  visible?: boolean;
  items: IDropdownOption[];
  selectable?: boolean;
}

interface IDropdownOption {
  label: any;
  visible?: boolean;
  key: string;
  data?: any;
  selectable?: boolean;
}
