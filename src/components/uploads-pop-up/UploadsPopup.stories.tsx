import styled from "styled-components"
import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import UploadsPopUp, { UploadsPopupContent } from "./index"

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
        <UploadsPopUp title="Default" onClose={() => handleShowUploadsPopup()}>

        <UploadsPopupContent>
          asdadadas<br/>
          asasd<br/>
          asdadf<br/>
          sdfgdfgdf<br/>
          fjfdghdfghfg<br/>
          dfghdfgh<br/>
          fghdfg<br/>
          hfgdh<br/>
          dfgh<br/>
          dfghfgd<br/>
          hdfgh<br/>
          asdadadas<br/>
          asasd<br/>
          asdadf<br/>
          sdfgdfgdf<br/>
          fjfdghdfghfg<br/>
          dfghdfgh<br/>
          fghdfg<br/>
          hfgdh<br/>
          dfgh<br/>
          dfghfgd<br/>
          hdfgh<br/>
          asdadadas<br/>
          asasd<br/>
          asdadf<br/>
          sdfgdfgdf<br/>
          fjfdghdfghfg<br/>
          dfghdfgh<br/>
          fghdfg<br/>
          hfgdh<br/>
          dfgh<br/>
          dfghfgd<br/>
          hdfgh<br/>
          asdadadas<br/>
          asasd<br/>
          asdadf<br/>
          sdfgdfgdf<br/>
          fjfdghdfghfg<br/>
          dfghdfgh<br/>
          fghdfg<br/>
          hfgdh<br/>
          dfgh<br/>
          dfghfgd<br/>
          hdfgh<br/>
        </UploadsPopupContent>
        </UploadsPopUp>
      ) : (
        <ClickMe onClick={() => handleShowUploadsPopup()}>Click me!!</ClickMe>
      )}
    </>
  );
}
