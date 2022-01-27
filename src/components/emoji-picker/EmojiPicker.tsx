import { Picker } from 'emoji-mart';
import React, { useState } from 'react';
import { IconAnimalsDog, IconClockTime, IconFlag, IconHeartLike, IconLightBulb, IconSmileEmojiSelector, IconSportBasketball, IconTravelPlane, Tab } from '../..';
import { SCustomCategoryBar } from './styles/SCustomCategoryBar';
import { GlobalStyle } from './styles/SEmojiMart';
import { SEmojiPicker } from './styles/SEmojiPicker';

const tabs = [
  {
    name: "recent",
    icon: <IconClockTime />,
  },
  {
    name: "people",
    icon: <IconSmileEmojiSelector />,
  },
  {
    name: "nature",
    icon: <IconAnimalsDog />,
  },
  {
    name: "activity",
    icon: <IconSportBasketball />,
  },
  {
    name: "places",
    icon: <IconTravelPlane />,
  },
  {
    name: "objects",
    icon: <IconLightBulb />,
  },
  {
    name: "symbols",
    icon: <IconHeartLike />,
  },
  {
    name: "flags",
    icon: <IconFlag />,
  },
];
let allCategories: Array<string> = [];
export const EmojiPicker: React.FC = () => {
  const [currSelected, setSelected] = useState(0);

  const handleSelect = (index) => {
    setSelected(index);
    console.log(currSelected + tabs[index].name);

    for (let k in tabs) {
      allCategories.push(tabs[k].name)
    }
    console.log("ALLE KATEGORIEN" + allCategories)
  };

  return (
    <SEmojiPicker>
      <SCustomCategoryBar>
        {tabs.map((tab, index) => (
          <Tab
            key={"viewtab" + index}
            activated={currSelected === index}
            value={index}
            onClick={() => handleSelect(index)}
            size="small"
          >
            {tab.icon}
          </Tab>
        ))}
      </SCustomCategoryBar>
      <GlobalStyle />
      <Picker set='apple' style={{ width: '308px' }} key={currSelected} include={['search', `${tabs[currSelected].name}`
      ]} />
    </SEmojiPicker>
  )
}
