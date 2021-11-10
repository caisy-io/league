import React from "react";
import { WithAddon } from "../with-addon/WithAddon";
import { SWithTranslationBadge } from "./styles/SWithTranslationBadge";

interface IWithTranslationBadgeContent {
  flag?: () => JSX.Element;
  country: string;
}

interface ILabel {
  content: IWithTranslationBadgeContent;
  active?: boolean;
}

export const WithTranslationBadge: React.FC<ILabel> = ({ ...props }) => {
  return (
    <WithAddon
      name="translationBadge"
      component={
        <SWithTranslationBadge>
          <>{props.content.flag && props.content.flag()}</>
          {props.content.country}
        </SWithTranslationBadge>
      }
      content={props.content}
      active={props.active}
    />
  );
};
