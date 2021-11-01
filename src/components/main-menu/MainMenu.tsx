import React from "react";
import { Img } from "../..";
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
}

export const MainMenu: React.FC<IMainMenu> = ({ ...props }) => {
  const Logo = () => {
    return props.logoSquareAssetUrl ? (
      <SMainMenuLogoContainer>
        <Img resolution={800} src={props.logoSquareAssetUrl} />
      </SMainMenuLogoContainer>
    ) : null;
  };

  const MainMenuInnerComponent: React.FC<{ innerComponent?: React.ReactElement }> = ({ ...innerProps }) => {
    return innerProps.innerComponent ? innerProps.innerComponent : null;
  };

  return (
    <SMainMenu style={props.style}>
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
