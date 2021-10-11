import { SDropdownFilter } from "./styles/SDropdownFilter";
import { SOptionHeader, SDropdownOption } from "./styles/SSearchWithFilter";
import React, { useState, useEffect } from "react";
import { ISearchInputValues, useSearchContent } from "./SearchProvider";

const DropdownFilter = ({
  dropDownPosition = 0,
  selectFilter,
  inputValue,
  setSearchValue,
  setOptionValue,
  resetFilterValue,
  isFilterInputActive,
  isDropdownFilterActive,
  close,
  dropdownReff,
}) => {
  const [currentOptionIndex, setCurrentOptionIndex] = useState<number>(-1);
  const [options, setOptions] = useState<any>(null);
  const headTitle = selectFilter && Object.keys(selectFilter)[0];
  const optionsData = useSearchContent();
  const filterType = headTitle == ISearchInputValues.type ? "Schema" : "SchemaField";
  const labels: any = {};

  const filteredData = optionsData.filter(
    (el: any) => el.title.toLowerCase().includes(inputValue.toLowerCase()) && el.__typename == filterType,
  );

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!isFilterInputActive && dropdownReff.current && !dropdownReff.current.contains(event.target)) {
        close();
      }
    }

    if (isFilterInputActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    if (!isDropdownFilterActive) {
      setCurrentOptionIndex(-1);
    }
  }, [isDropdownFilterActive]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter") {
        e.preventDefault();
      }
      if (e.key === "ArrowUp") {
        if (currentOptionIndex <= 0) {
          return;
        }
        setCurrentOptionIndex(currentOptionIndex - 1);
      }
      if (e.key === "ArrowDown") {
        if (currentOptionIndex >= options.length - 1) {
          return;
        }

        setCurrentOptionIndex(currentOptionIndex + 1);
      }
      if (e.key === "Enter") {
        if (currentOptionIndex < 0) {
          return;
        }
        switch (Object.keys(selectFilter)[0]) {
          case ISearchInputValues.fulltext:
            inputValue && setSearchValue(inputValue);
            break;
          case ISearchInputValues.type:
            setOptionValue(filteredData[currentOptionIndex].name);
            break;
          case ISearchInputValues.field:
            setOptionValue(filteredData[currentOptionIndex].id);
        }
        close();
      }
    };

    isDropdownFilterActive && document.addEventListener("keydown", handler);

    return () => document.removeEventListener("keydown", handler);
  });

  useEffect(() => {
    options?.forEach((el) => {
      el.classList.remove("current-selection");
    });
    if (currentOptionIndex > -1) {
      const currentSelectOption = options[currentOptionIndex];
      currentSelectOption?.scrollIntoView(false);
      currentSelectOption?.classList.add("current-selection");
    }
  }, [currentOptionIndex]);

  useEffect(() => {
    const opts = dropdownReff.current?.querySelectorAll(".dropdown-add-option-visible");
    setOptions(opts);
  }, [selectFilter, inputValue]);

  const renderDropdown = () => {
    if (headTitle === ISearchInputValues.fulltext) {
      return (
        <SDropdownOption
          className="search-btn dropdown-add-option-visible"
          onClick={() => {
            if (!inputValue) {
              return;
            }
            setSearchValue(inputValue);
            resetFilterValue();
            close();
          }}
        >
          {labels?.searchOn ?? "Search on:"} {inputValue}
        </SDropdownOption>
      );
    }
    if (headTitle === ISearchInputValues.type) {
      return filteredData.map((item: any) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase()) ? (
          <SDropdownOption
            className="dropdown-add-option-visible"
            key={item.id}
            onClick={() => {
              setOptionValue(item.name);
              close();
            }}
          >
            {item.title}
          </SDropdownOption>
        ) : (
          <SDropdownOption
            className="dropdown-add-option-invisible"
            key={item.id}
            onClick={() => {
              setOptionValue(item.name);
              close();
            }}
          >
            {item.title}
          </SDropdownOption>
        ),
      );
    }
    if (headTitle === ISearchInputValues.field) {
      return filteredData.map((item: any) =>
        item.title.toLowerCase().includes(inputValue.toLowerCase()) ? (
          <SDropdownOption
            className="dropdown-add-option-visible"
            key={item.id}
            onClick={() => {
              setOptionValue(item.id);
              close();
            }}
          >
            {item.title}
          </SDropdownOption>
        ) : (
          <SDropdownOption
            className="dropdown-add-option-invisible"
            key={item.id}
            onClick={() => {
              setOptionValue(item.id);
              close();
            }}
          >
            {item.title}
          </SDropdownOption>
        ),
      );
    }
  };

  return (
    <SDropdownFilter
      ref={dropdownReff}
      className={isDropdownFilterActive ? "dropdown-visible" : "dropdown-invisible"}
      dropDownIndent={dropDownPosition}
    >
      <SOptionHeader>{labels?.[headTitle?.toLowerCase()] ?? headTitle}</SOptionHeader>
      {renderDropdown()}
    </SDropdownFilter>
  );
};

export default DropdownFilter;
