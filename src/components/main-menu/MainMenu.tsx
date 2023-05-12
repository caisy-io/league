import React from "react";
import { Img } from "../../base-components/img";
import { SMainMenu } from "./styles/SMainMenu";
import { SMainMenuDivider } from "./styles/SMainMenuDivider";
import { SMainMenuLogoContainer } from "./styles/SMainMenuLogoContainer";
import { SMainMenuSpacer } from "./styles/SMainMenuSpacer";

interface IMainMenu {
  logoSquareAssetUrl?: string;
  organizationSelectMenuContainer?: React.ReactElement;
  mainNavigationContainer?: React.ReactElement;
  footerNavigationContainer?: React.ReactElement;
  uploadContainer?: React.ReactElement;
  style?: React.CSSProperties;
  expanded?: boolean;
}

export const MainMenu: React.FC<IMainMenu> = ({ ...props }) => {
  const isSVG = `${props?.logoSquareAssetUrl}`.toLowerCase().endsWith(".svg") ?? false;

  const Logo = () => {
    return props.logoSquareAssetUrl ? (
      <SMainMenuLogoContainer>
        <Img resolution={isSVG ? 0 : 800} src={props.logoSquareAssetUrl} />
      </SMainMenuLogoContainer>
    ) : null;
  };

  const MainMenuInnerComponent: React.FC<{ innerComponent?: React.ReactElement }> = ({ ...innerProps }) => {
    return innerProps.innerComponent ? innerProps.innerComponent : null;
  };

  return (
    <SMainMenu style={props.style} expanded={props?.expanded}>
      <Logo />
      <MainMenuInnerComponent innerComponent={props.organizationSelectMenuContainer} />
      <SMainMenuDivider />
      <MainMenuInnerComponent innerComponent={props.mainNavigationContainer} />
      <SMainMenuSpacer />
      <MainMenuInnerComponent innerComponent={props.footerNavigationContainer} />
      {props.uploadContainer && <SMainMenuDivider />}
      <MainMenuInnerComponent innerComponent={props.uploadContainer} />
    </SMainMenu>
  );
};
