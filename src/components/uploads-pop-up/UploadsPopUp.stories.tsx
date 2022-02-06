import styled from "styled-components"
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import {UploadsPopUp, UploadsPopUpContent } from "./index";
import { AssetListItem } from "../asset-list-item";
import ButtonsBar from "../buttons-bar";
import { Button } from "../button"
import { IconDocuments, IconVideoPlay, IconAssetsImage } from "../../icons";
import {SUploadsPopUpButtonsWrapper}from "./styles/SUploadsPopUpButtonsWrapper"
./styles/SUploadsPopUpButtonsWrapper
const ClickMe = styled.h2`
  cursor: pointer;
  margin: 50px 50px;
`


export const UploadsPopUpExample: ComponentStory<typeof UploadsPopUp> = () => {
  const [showUploadsPopUp, toogleUploadsPopUp] = useState(false);

  const handleShowUploadsPopUp: any = () => {
    toogleUploadsPopUp(!showUploadsPopUp);
  } 
  
  return (
    <>
      {showUploadsPopUp ? (
        <UploadsPopUp poupTitle="Uploads" onClose={() => handleShowUploadsPopUp()}>

          <UploadsPopUpContent>
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
          </UploadsPopUpContent>
          <SUploadsPopUpButtonsWrapper>
            <ButtonsBar>
              <Button onClick={() => alert("Clicked Button")} type="primary" sticked={true}>
                {"SEE ALL ASSETS"}
              </Button>
            </ButtonsBar>
          </SUploadsPopUpButtonsWrapper>
        </UploadsPopUp>
      ) : (
        <ClickMe onClick={() => handleShowUploadsPopUp()}>Click me!!</ClickMe>
      )}
    </>
  );
}

export const UploadsPopUp_Default: ComponentStory<typeof UploadsPopUp> = () => {
  const [showUploadsPopUp, toogleUploadsPopUp] = useState(false);

  const handleShowUploadsPopUp: () => void = () => {
    toogleUploadsPopUp(!showUploadsPopUp);
  } 
  
  return (
    <>
      {showUploadsPopUp ? (
        <UploadsPopUp poupTitle="Uploads" badgeValue={6} onClose={() => handleShowUploadsPopUp()}>

          <UploadsPopUpContent>
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
          </UploadsPopUpContent>
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
        <ClickMe onClick={() => handleShowUploadsPopUp()}>Click me!!</ClickMe>
      )}
    </>
  );
}
export default {
  title: "Components/Menus & Popovers/UploadsPopUp",
  component: UploadsPopUpExample,
  argTypes: {}
} as ComponentMeta<typeof UploadsPopUp>;
