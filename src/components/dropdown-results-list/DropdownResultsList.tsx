import React, { useState, useEffect, Fragment } from "react";
import { SDropdown } from "./styles/SDropdown";
import { SDropdownOptionHeader } from "./styles/SDropdownOptionHeader";
import { SDropdownOption } from "./styles/SDropdownOption";
import { IDropdownCategory } from "./types";

interface IDropdownProps {
  active: boolean;
  categories: IDropdownCategory[];
  onSelect: (key: string) => void;
}

export const DropdownResultsList = ({ categories, active, onSelect }: IDropdownProps) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(-1);
  const flatCategories = categories.flatMap((c) => c.items.filter((i) => i.visible));

  useEffect(() => {
    const handler = (e) => {
      if (!active) {
        return;
      }

      let currIndex = currentOptionIndex;

      if (e.key === "Enter") {
        if (currIndex < 0) {
          currIndex = 0;
        }
        onSelect(flatCategories[currIndex].key);
        return;
      }

      if (currIndex > flatCategories.length - 1) {
        currIndex = flatCategories.length - 1;
      }

      if (e.key === "ArrowUp") {
        if (currIndex <= 0) {
          currIndex = flatCategories.length - 1;
        } else {
          currIndex--;
        }
      }

      if (e.key === "ArrowDown") {
        if (currIndex >= flatCategories.length - 1) {
          currIndex = 0;
        } else {
          currIndex++;
        }
      }

      setCurrentOptionIndex(currIndex);
    };

    if (active) {
      document.addEventListener("keydown", handler);
    }

    return () => document.removeEventListener("keydown", handler);
  });

  return (
    <div>
      {active && (
        <SDropdown active={active} className={active ? "dropdown-visible" : "dropdown-invisible"}>
          {categories.map((category) => {
            return (
              <Fragment key={category.key}>
                {category.label && (
                  <SDropdownOptionHeader className={`${category.visible ? "title-visible" : "title-invisible"}`}>
                    {category.label}
                  </SDropdownOptionHeader>
                )}
                {category.items.map((categoryItem) => {
                  return (
                    <Fragment key={categoryItem.key}>
                      {categoryItem.label && (
                        <SDropdownOption
                          className={`${
                            categoryItem.visible ? "dropdown-option-visible" : "dropdown-option-invisible"
                          }${
                            flatCategories[currentOptionIndex] &&
                            categoryItem.key === flatCategories[currentOptionIndex].key
                              ? " current-selection"
                              : ""
                          }`}
                          onClick={() => onSelect(categoryItem.key)}
                        >
                          {categoryItem.label}
                        </SDropdownOption>
                      )}
                    </Fragment>
                  );
                })}
              </Fragment>
            );
          })}
        </SDropdown>
      )}
    </div>
  );
};
