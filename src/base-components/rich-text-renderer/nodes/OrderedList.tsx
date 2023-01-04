import React, { FC } from "react";

const OrderedList: FC<{ children?: React.ReactNode }> = ({ children }) => <ol>{children}</ol>;

export default OrderedList;
