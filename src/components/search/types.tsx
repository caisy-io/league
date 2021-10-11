export interface ISearchState {
  categories: ISearchCategory[];
  i18n?: any;
}

export type IEvaluationFunction = (
  ownValue: string,
  globalState: ISearchState,
) => { active: boolean; selected: boolean };

export interface ISearchCategory {
  label?: string;
  active: boolean;
  selected: boolean;
  items: ISearchOption[];
  evaluate: IEvaluationFunction;
}

interface ISearchOption {
  label: any;
  value: any;
  key: string;
}

// interface ISearchFilterOptionItem {
//     label: any;
//     value: any;
//     key: string;
//     focus: boolean;
//     selected: boolean;
//     active: boolean;
// }

export interface ISearchFilter {
  active: boolean;
  groups: any[];
}

export interface ISearchFilterGroup {
  selected: boolean;
  items: any[];
}
