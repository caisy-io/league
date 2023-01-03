import React, { FC } from "react";

const BulletList: FC<{ children?: React.ReactNode }> = ({ children }) => <ul>{children}</ul>;

export default BulletList;
