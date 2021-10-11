import React, { useState, useEffect } from "react";
import { SDropdownSearch, SOptionHeader, SDropdownOption } from "./styles/SSearchWithFilter";
import { ISearchInputValues, ISearchLevels, useSearchContent, useSearchLevel } from "./SearchProvider";

interface IDropdownSearchProps {
  dropDownPosition: number;
  isInputFocus: boolean;
  searchResult: string;
  dropdownRef: any;
  onClick: (content: string) => void;
  setSearchValue: (value: string) => void;
}

const DropdownSearch = ({
  dropDownPosition = 0,
  isInputFocus,
  searchResult,
  dropdownRef,
  onClick,
  setSearchValue,
}: IDropdownSearchProps) => {
  const { type, fulltext, field } = ISearchInputValues;
  const optionsData = useSearchContent();

  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(-1);
  const [options, setOptions] = useState(dropdownRef.current?.querySelectorAll(".dropdown-option-visible"));

  const searchLevel = useSearchLevel();
  const labels: any = {};

  const onOptionSelect = (e: any) => {
    onClick(e);
    setCurrentOptionIndex(0);
  };

  const createDropdownOptions = () => {
    const fullTextItem = {
      name: searchResult,
      section: fulltext,
    };

    const typeOptions = optionsData
      .map((option) => ({ ...option, section: type }))
      .filter((item) => item.__typename === "Schema")
      .filter((item) => item.title.toLowerCase().includes(searchResult.toLowerCase()));

    const fieldOptions = optionsData
      .map((option) => ({ ...option, section: field }))
      .filter((item) => item.__typename === "SchemaField")
      .filter((item) => item.title.toLowerCase().includes(searchResult.toLowerCase()));

    const allOptions = searchLevel == ISearchLevels.level1 ? typeOptions : fieldOptions;

    return {
      render: [fullTextItem, ...allOptions],
      bySection: {
        fulltext: fullTextItem,
        type: [...typeOptions.map((option) => ({ ...option, section: type }))],
        field: [...fieldOptions.map((option) => ({ ...option, section: field }))],
      },
    };
  };

  const data = createDropdownOptions();

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowUp") {
        if (currentOptionIndex <= 0) {
          return;
        }

        setCurrentOptionIndex(currentOptionIndex - 1);
      }

      if (e.key === "ArrowDown") {
        if (currentOptionIndex >= data.render.length - 1) {
          return;
        }

        setCurrentOptionIndex(currentOptionIndex + 1);
      }

      if (e.key === "Enter") {
        if (currentOptionIndex < 0) {
          return;
        }

        data.render[currentOptionIndex].section === fulltext
          ? searchResult && setSearchValue(data.render[currentOptionIndex].name)
          : onOptionSelect(data.render[currentOptionIndex].name);
      }
    };

    if (isInputFocus) {
      document.addEventListener("keydown", handler);
    }

    return () => document.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    options?.forEach((el) => {
      el.classList.remove("current-selection");
    });
    if (currentOptionIndex > -1 && currentOptionIndex < options.length) {
      const currentSelectOption = options[currentOptionIndex];
      currentSelectOption?.scrollIntoView(false);
      currentSelectOption.classList.add("current-selection");
    }
  }, [currentOptionIndex]);

  useEffect(() => {
    function handleMouseMoveOutside(event: any) {
      if (dropdownRef.current.contains(event.target) && currentOptionIndex >= 0) {
        options[currentOptionIndex].classList.remove("current-selection");
      }
    }

    if (isInputFocus) {
      document.addEventListener("mouseover", handleMouseMoveOutside);
    }
    return () => document.removeEventListener("mouseover", handleMouseMoveOutside);
  });

  useEffect(() => {
    const opts = dropdownRef.current?.querySelectorAll(".dropdown-option-visible");
    setOptions(opts);
  }, [searchResult, isInputFocus, currentOptionIndex]);

  const renderOptions = () =>
    Object.keys(data.bySection).map((option: any) => {
      if (option === fulltext) {
        return (
          <SDropdownOption
            key={option}
            className="search-btn dropdown-option-visible"
            onClick={() => {
              if (!searchResult) {
                return;
              }
              setSearchValue(data.bySection[option].name);
            }}
          >
            {`${labels?.searchOn ?? "Search on:"} ${data.bySection[option].name}`}
          </SDropdownOption>
        );
      }
      if (option === type && searchLevel === ISearchLevels.level1) {
        const optionsData = data.bySection[option];
        return optionsData.length ? (
          <div key={type}>
            <SOptionHeader className={data.render.length < 2 ? "title-invisible" : "title-visible"}>
              {labels?.type || type}
            </SOptionHeader>

            {optionsData.map((item: any) =>
              item.title.toLowerCase().includes((searchResult ?? "").toLowerCase()) ? (
                <SDropdownOption
                  className="dropdown-option-visible"
                  key={item.id}
                  onClick={() => onOptionSelect(item.name)}
                >
                  {item.title}
                </SDropdownOption>
              ) : (
                <SDropdownOption
                  className="dropdown-option-invisible"
                  key={item.id}
                  onClick={() => onOptionSelect(item.name)}
                >
                  {item.title}
                </SDropdownOption>
              ),
            )}
          </div>
        ) : null;
      }
      if (option === field && searchLevel === ISearchLevels.level2) {
        const optionsData = data.bySection[option];
        return optionsData.length ? (
          <div key={field}>
            <SOptionHeader className={data.render.length < 2 ? "title-invisible" : "title-visible"}>
              {labels?.field || field}
            </SOptionHeader>
            {optionsData.map((item: any) =>
              item.title.toLowerCase().includes((searchResult ? searchResult : "").toLowerCase()) ? (
                <SDropdownOption
                  className="dropdown-option-visible"
                  key={item.id}
                  onClick={() => onOptionSelect(item.id)}
                >
                  {item.title}
                </SDropdownOption>
              ) : (
                <SDropdownOption
                  className="dropdown-option-invisible"
                  key={item.id}
                  onClick={() => onOptionSelect(item.id)}
                >
                  {item.title}
                </SDropdownOption>
              ),
            )}
          </div>
        ) : null;
      }
    });

  return (
    <SDropdownSearch
      ref={dropdownRef}
      dropDownIndent={dropDownPosition > 0 ? dropDownPosition + 40 : 0}
      isInputFocus={isInputFocus}
      className={isInputFocus && !(searchLevel == ISearchLevels.max) ? "dropdown-visible" : "dropdown-invisible"}
    >
      <SOptionHeader>{labels?.fulltextSearch || "FULLTEXT SEARCH"}</SOptionHeader>
      {renderOptions()}
    </SDropdownSearch>
  );
};

export default DropdownSearch;
