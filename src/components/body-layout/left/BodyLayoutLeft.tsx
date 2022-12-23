import React from "react";
import { SBodyLayoutLeft } from "./styles/SBodyLayoutLeft";
import { SBodyLayoutLeftContainer } from "./styles/SBodyLayoutLeftContainer";
import { SBodyLayoutLeftContainerSpacer } from "./styles/SBodyLayoutLeftContainerSpacer";
import { SBodyLayoutLeftScrollView } from "./styles/SBodyLayoutLeftScrollView";

export const BodyLayoutLeft: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <SBodyLayoutLeftContainerSpacer></SBodyLayoutLeftContainerSpacer>
      <SBodyLayoutLeftContainer>
        <SBodyLayoutLeft>
          <SBodyLayoutLeftScrollView>{children}</SBodyLayoutLeftScrollView>
        </SBodyLayoutLeft>
      </SBodyLayoutLeftContainer>
    </>
  );
};
