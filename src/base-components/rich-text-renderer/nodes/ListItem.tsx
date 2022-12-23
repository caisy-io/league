import React, { FC } from "react";

const ListItem: FC<{ children?: React.ReactNode }> = ({ children }) => <li>{children}</li>;

export default ListItem;
