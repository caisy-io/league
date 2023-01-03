import React, { FC } from "react";

const BlockQuote: FC<{ children: React.ReactNode }> = ({ children }) => <blockquote>{children}</blockquote>;

export default BlockQuote;
