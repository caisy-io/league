import React, { useContext } from "react";

enum ISearchInputValues {
  createdAt = "Created At",
  createdBy = "Created By",
  dateSpecific = "DATE SPECIFIC",
  userSpecific = "USER SPECIFIC",
  date = "DATE",
  users = "USERS",
  type = "type",
  fulltext = "fulltext",
  field = "field",
  ISearchInputValues = "ISearchInputValues",
}

enum ISearchLevels {
  level1 = 1,
  level2 = 2,
  level3 = 3,
  max = 4,
}

const SearchContext = React.createContext<ISearchValue>({
  schemas: {},
  contentType: {},
  type: "",
  fulltext: "",
  field: "",
  i18n: {},
  selectedOptions: {},
  resetSearch: () => {},
  selectType: () => {},
  selectField: () => {},
  setFulltext: () => {},
  setFulltextOnly: () => {},
  switchType: () => {},
});

interface ISearchValue {
  schemas?: any;
  contentType?: any;
  type?: string;
  fulltext?: string;
  field?: string;
  selectedOptions?: any;
  resetSearch?: any;
  selectType?: any;
  selectField?: any;
  setFulltext?: any;
  setFulltextOnly?: any;
  switchType?: any;
  i18n?: any;
}

interface ISearch {
  value: ISearchValue;
  children?: React.ReactNode;
}

const useSearchLevel = () => {
  const c = useContext(SearchContext);
  let result = ISearchLevels.level1;
  if (c.type) {
    result = ISearchLevels.level2;
  }
  if (c.type && c.field) {
    result = ISearchLevels.level3;
  }
  if (c.type && c.field && c.fulltext) {
    result = ISearchLevels.max;
  }
  return result;
};

const useSearchContent = () => {
  const context = useContext(SearchContext);
  let result = context.schemas;
  if (context.contentType) {
    const schemaFields = context.contentType.fields.groups.map((g) => g?.fields.map((f: any) => f)).flat(1);
    result = result.concat(schemaFields);
  }
  return result;
};

const useRenderOptions = () => {
  const context = useContext(SearchContext);

  if (context?.selectedOptions?.locale) {
    delete context.selectedOptions.locale;
  }

  return context.selectedOptions;
};

const SearchProvider: React.FC<ISearch> = ({ children, value }) => {
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>;
};

export {
  SearchProvider,
  SearchContext,
  ISearchInputValues,
  useSearchLevel,
  ISearchLevels,
  useSearchContent,
  useRenderOptions,
};
