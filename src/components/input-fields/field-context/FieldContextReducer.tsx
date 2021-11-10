import { REGISTER_ADDON } from "./types";

const FieldContextReducer = (state, action) => {
  switch (action.type) {
    case REGISTER_ADDON:
      return { ...state, addons: { ...state.addons, [action.payload.name]: action.payload } };
    default:
      return state;
  }
};

export default FieldContextReducer;
