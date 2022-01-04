import styled from "styled-components"
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UploadsPopUp, { UploadsPopupContent } from "./index";
import { AssetListItem } from "../asset-list-item";

const ClickMe = styled.h2`
  cursor: pointer;
  margin: 50px 50px;
`

export default {
  title: "Components/Menus & Popovers/UploadsPopup",
  component: UploadsPopUp,
  argTypes: {}
} as ComponentMeta<typeof UploadsPopUp>;

export const UploadsPopup_Default: ComponentStory<typeof UploadsPopUp> = () => {
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
          />
          <AssetListItem 
              title="Default"
              description="Default upload"
              progressValue={23}
          />
          <AssetListItem 
              title="Default"
              description="Default upload"
              progressValue={75}
          />
        </UploadsPopupContent>
        </UploadsPopUp>
      ) : (
        <ClickMe onClick={() => handleShowUploadsPopup()}>Click me!!</ClickMe>
      )}
    </>
  );
}
