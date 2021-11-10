import { createContext, useContext } from "react";

export interface IFieldAddon {
  name: string;
  component: JSX.Element;
  active: boolean | undefined;
  content: any;
}

export interface IFieldAddons {
  [name: string]: IFieldAddon;
}

export interface IFieldContext {
  addons: IFieldAddons;
  addonsList: IFieldAddon[];
  registerAddon: (addon: IFieldAddon) => void;
}

const initState = {};

export const FieldProvider = createContext(initState as IFieldContext);

export const useFieldProvider = () => {
  return useContext(FieldProvider);
};

export default useFieldProvider;
