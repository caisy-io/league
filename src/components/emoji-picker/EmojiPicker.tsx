import { Picker } from 'emoji-mart';
import React, { useState } from 'react';
import { IconAnimalsDog, IconClock, IconFlag, IconHeartLike, IconLightBulb, IconPlane, IconSmileEmojiSelector, IconSportBasketball } from '../../icons';
import { Tab } from '../tab/Tab';
import { SCustomCategoryBar } from './styles/SCustomCategoryBar';
import { GlobalStyle } from './styles/SEmojiMart';
import { SEmojiPicker } from './styles/SEmojiPicker';

const tabs = [
  {
    name: "recent",
    icon: <IconClock size={20} />,
  },
  {
    name: "people",
    icon: <IconSmileEmojiSelector size={20} />,
  },
  {
    name: "nature",
    icon: <IconAnimalsDog size={20} />,
  },
  {
    name: "activity",
    icon: <IconSportBasketball size={20} />,
  },
  {
    name: "places",
    icon: <IconPlane size={20} />,
  },
  {
    name: "objects",
    icon: <IconLightBulb size={20} />,
  },
  {
    name: "symbols",
    icon: <IconHeartLike size={20} />,
  },
  {
    name: "flags",
    icon: <IconFlag size={20} />,
  },
];

interface IEmojiPicker {
  onSelect?: (emojiCode: string) => void;
}

export const EmojiPicker: React.FC<IEmojiPicker> = ({ onSelect }) => {
  const [currSelected, setSelected] = useState(0);
  const allCategories: Array<string> = [];

  for (let k in tabs) {
    allCategories.push(tabs[k].name)
  }

  const handleSelect = (index) => {
    setSelected(index);
  };

  const onPickerSelect = emoji => {
    if (typeof onSelect == 'function') {
      onSelect(emoji.colons)

    }
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
            size="micro"
          >
            {tab.icon}
          </Tab>
        ))}
      </SCustomCategoryBar>
      <GlobalStyle />
      <Picker set='apple' onSelect={onPickerSelect} style={{ width: '308px' }} key={currSelected} include={
        ['search', ...(currSelected == 0 ? allCategories : [tabs[currSelected].name])]
      } />
    </SEmojiPicker>
  )
}
