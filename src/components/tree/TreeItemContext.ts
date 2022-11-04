import React from "react";

type ITreeItemContext = {
  level: number;
  siblingsLength: number;
  index: number;
};

export default React.createContext<ITreeItemContext | null>(null);
