import React from "react";
import { SBodyLayout } from "./styles/SBodyLayout";
import { SBodyLayoutView } from "./styles/SBodyLayoutView";
import { SBodyLayoutRight } from "./styles/SBodyLayoutRight";
import { BodyLayoutLeft } from "./left/BodyLayoutLeft";
export const BodyLayout: React.FC<{ children?: React.ReactNode }> = ({ ...props }) => {
  return (
    <SBodyLayout>
      {props.children && props.children[0] && <BodyLayoutLeft>{props.children[0]}</BodyLayoutLeft>}
      {props.children && props.children[1] && (
        <SBodyLayoutRight>
          <SBodyLayoutView>{props.children[1]}</SBodyLayoutView>
        </SBodyLayoutRight>
      )}
    </SBodyLayout>
  );
};
