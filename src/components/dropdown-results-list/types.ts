export interface IDropdownCategory {
  label: string;
  key: string;
  visible?: boolean;
  items: IDropdownOption[];
}

interface IDropdownOption {
  label: any;
  visible?: boolean;
  key: string;
}
