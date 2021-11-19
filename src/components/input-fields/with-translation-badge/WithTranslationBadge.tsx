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

interface IWithTranslationBadgeProps {
  badge: IWithTranslationBadgeContent;
  addons?: any[];
}

interface IAddonHOC {
  addons?: any[];
}

export function withTranslationBadge<T extends IAddonHOC>(WrappedComponent: React.ComponentType<T>) {
  const displayName = WrappedComponent.displayName || WrappedComponent.name || "Component";

  const WithTranslationBadge: React.ComponentType<T & IWithTranslationBadgeProps & IAddonHOC> = (props) => {
    const newAddon = (
      <SWithTranslationBadge>
        <>{props.badge.flag && props.badge.flag()}</>
        {props.badge.country}
      </SWithTranslationBadge>
    );

    const addons = props?.addons?.slice() || [];
    addons.push(newAddon);

    return (
      <WrappedComponent {...(props as T)} addons={addons}>
        {props.children}
      </WrappedComponent>
    );
  };

  WithTranslationBadge.displayName = `withTranslationBadge(${displayName})`;

  return WithTranslationBadge;
}
