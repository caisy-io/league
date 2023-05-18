import React from "react";
import { Img } from "../../base-components/img";
import { SMainMenu } from "./styles/SMainMenu";
import { SMainMenuDivider } from "./styles/SMainMenuDivider";
import { SMainMenuLogoContainer } from "./styles/SMainMenuLogoContainer";
import { SMainMenuSpacer } from "./styles/SMainMenuSpacer";
import { ExpandArrows } from "../../icons";

interface IMainMenu {
  logoSquareAssetUrl?: string;
  organizationSelectMenuContainer?: React.ReactElement;
  mainNavigationContainer?: React.ReactElement;
  footerNavigationContainer?: React.ReactElement;
  uploadContainer?: React.ReactElement;
  style?: React.CSSProperties;
  expanded?: boolean;
}

export const MainMenu: React.FC<IMainMenu & { fullLogoAssetUrl: string }> = ({ ...props }) => {
  const isSVG = `${props?.logoSquareAssetUrl}`.toLowerCase().endsWith(".svg") ?? false;

  const [isExpanded, setIsExpanded] = React.useState<boolean | undefined>(props.expanded ?? false);
  React.useEffect(() => {
    setIsExpanded(props.expanded);
  }, [props.expanded]);

  const Logo = () => {
    return props.logoSquareAssetUrl ? (
      <SMainMenuLogoContainer expanded={isExpanded}>
        <Img resolution={isSVG ? 0 : 800} src={isExpanded ? props.fullLogoAssetUrl : props.logoSquareAssetUrl} />
      </SMainMenuLogoContainer>
    ) : null;
  };

  const Expand = () => (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      {!isExpanded ? (
        <div style={{ cursor: "pointer", margin: "0 auto", padding: "8px" }}>
          <ExpandArrows />
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "8px" }}>
          <div style={{ rotate: "-180deg" }}>
            <ExpandArrows />
          </div>
          <p
            style={{
              color: "var(--text-04)",
              fontSize: "13px",
              fontWeight: "bold",
              textTransform: "uppercase",
              marginLeft: "8px",
            }}
          >
            Collapse
          </p>
        </div>
      )}
    </div>
  );

  const MainMenuInnerComponent: React.FC<{ innerComponent?: React.ReactElement }> = ({ ...innerProps }) => {
    return innerProps.innerComponent ? innerProps.innerComponent : null;
  };

  return (
    <SMainMenu style={props.style} expanded={isExpanded}>
      <Logo />
      <MainMenuInnerComponent innerComponent={props.organizationSelectMenuContainer} />
      <SMainMenuDivider expanded={isExpanded} />
      <MainMenuInnerComponent innerComponent={props.mainNavigationContainer} />
      <SMainMenuSpacer />
      <MainMenuInnerComponent innerComponent={props.footerNavigationContainer} />
      {props.uploadContainer && <SMainMenuDivider expanded={isExpanded} />}
      <MainMenuInnerComponent innerComponent={props.uploadContainer} />
      <SMainMenuDivider expanded={isExpanded} />
      <Expand />
    </SMainMenu>
  );
};
