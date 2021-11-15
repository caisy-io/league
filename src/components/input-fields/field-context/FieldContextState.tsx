import React, { useReducer } from "react";
import { REGISTER_ADDON } from "./types";
import FieldContextReducer from "./FieldContextReducer";
import { FieldProvider, IFieldAddon, IFieldContext } from "./FieldContextContext";

interface IFieldContextProvider {}

const FieldContextState: React.FC<IFieldContextProvider> = ({ ...props }) => {
  const initState = { addons: {} };

  const [state, dispatch] = useReducer(FieldContextReducer, initState);

  const registerAddon = (addon) => {
    dispatch({
      type: REGISTER_ADDON,
      payload: addon,
    });
  };

  const getAddonsList = () => {
    const addonsList: IFieldAddon[] = [];

    for (const addon in state.addons as IFieldContext) {
      addonsList.push(state.addons[addon]);
    }

    return addonsList;
  };

  return (
    <FieldProvider.Provider value={{ addons: state.addons, registerAddon, addonsList: getAddonsList() }}>
      {props.children}
    </FieldProvider.Provider>
  );
};

export default FieldContextState;
