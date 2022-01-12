import styled from "styled-components"
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UploadsPopUp, { UploadsPopupContent } from "./index";
import { AssetListItem } from "../asset-list-item";
import ButtonsBar from "../buttons-bar";
import { Button } from "../button"
import { UloadsPopupButtons } from "./UloadsPopupButtons";
import { IconDocuments, IconVideoPlay, IconAssetsImage } from "../../icons";

const ClickMe = styled.h2`
  cursor: pointer;
  margin: 50px 50px;
`

export default {
  title: "Components/Menus & Popovers/UploadsPopup",
  component: UploadsPopUp,
  argTypes: {}
} as ComponentMeta<typeof UploadsPopUp>;

export const UploadsPopup: ComponentStory<typeof UploadsPopUp> = () => {
  const [showUploadsPopup, toogleUploadsPopup] = useState(false);

  const handleShowUploadsPopup: any = () => {
    toogleUploadsPopup(!showUploadsPopup);
  } 
  
  return (
    <>
      {showUploadsPopup ? (
        <UploadsPopUp poupTitle="Uploads" onClose={() => handleShowUploadsPopup()}>

          <UploadsPopupContent>
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={65}
                icon={<IconDocuments/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                error={true}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                recent={true}
                icon={<IconAssetsImage/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                error={true}
                icon={<IconVideoPlay/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                recent={true}
                icon={<IconAssetsImage/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={23}
                icon={<IconVideoPlay/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={75}
            />
          </UploadsPopupContent>
          <UloadsPopupButtons>
            <ButtonsBar>
              <Button onClick={() => alert("Clicked Button")} type="primary" sticked={true}>
                {"SEE ALL ASSETS"}
              </Button>
            </ButtonsBar>
          </UloadsPopupButtons>
        </UploadsPopUp>
      ) : (
        <ClickMe onClick={() => handleShowUploadsPopup()}>Click me!!</ClickMe>
      )}
    </>
  );
}

export const UploadsPopup_Default: ComponentStory<typeof UploadsPopUp> = () => {
  const [showUploadsPopup, toogleUploadsPopup] = useState(false);

  const handleShowUploadsPopup: any = () => {
    toogleUploadsPopup(!showUploadsPopup);
  } 
  
  return (
    <>
      {showUploadsPopup ? (
        <UploadsPopUp poupTitle="Uploads" badgeValue={6} onClose={() => handleShowUploadsPopup()}>

          <UploadsPopupContent>
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={65}
                icon={<IconDocuments/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                error={true}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                recent={true}
                icon={<IconAssetsImage/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                error={true}
                icon={<IconVideoPlay/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={undefined}
                recent={true}
                icon={<IconAssetsImage/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={23}
                icon={<IconVideoPlay/>}
            />
            <AssetListItem 
                title="Default"
                description="Default upload"
                progressValue={75}
            />
          </UploadsPopupContent>
          <UloadsPopupButtons>
            <ButtonsBar>
              <Button onClick={() => alert("Clicked Button")} type="primary" sticked={true}>
                {"SEE ALL ASSETS"}
              </Button>

              <Button onClick={() => alert("Clicked Button")} type="primary" sticked={true}>
                {"UPLOAD FILE"}
              </Button>
            </ButtonsBar>
          </UloadsPopupButtons>
        </UploadsPopUp>
      ) : (
        <ClickMe onClick={() => handleShowUploadsPopup()}>Click me!!</ClickMe>
      )}
    </>
  );
}
