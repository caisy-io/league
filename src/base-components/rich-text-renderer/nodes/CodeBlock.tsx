import React, { FC } from "react";

const CodeBlock: FC<{ children?: React.ReactNode }> = ({ children }) => <pre>{children}</pre>;

export default CodeBlock;
