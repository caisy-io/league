import React, { useState, useEffect, useRef, useContext } from "react";

import { SInput, SSearchWrapper, SSearchIcon, SIndicatorsIcons, SFilterIcon } from "./styles/SSearchWithFilter";

import DropdownSearch from "./DropdownSearch";
import DropdownFilter from "./DropdownFilter";
import FilterOptions from "./FilterOptions";

import { ISearchInputValues, ISearchLevels, SearchContext, useRenderOptions, useSearchLevel } from "./SearchProvider";
import { Button } from "../button/Button";
import { SButtonFadeIn } from "./styles/SButtonFadeIn";
import { IconCross } from "../../icons/IconCross";
import { IconFilter } from "../../icons/IconFilter";
import { IconSearch } from "../../icons/IconSearch";

export const Search: React.FC = ({ children }) => {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [inputOffset, setInputOffset] = useState<number>(0);
  const [filterInputOffset, setFilterInputOffset] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedFilterOption, setSelectedFilterOption] = useState<string>("");
  const inputRef = useRef(null);
  const filterOptionsRef: any = useRef<HTMLDivElement>(null);
  const dropdownOptionsRef: any = useRef(null);
  const dropdownRef = useRef(null);
  const inputWrapperRef = useRef<HTMLDivElement>(null);
  const [isFilterInputActive, setIsFilterInputActive] = useState<boolean>(false);
  const [isFilterTypeActive, setIsFilterTypeActive] = useState<boolean>(false);
  const [isFilterFieldActive, setIsFilterFieldActive] = useState<boolean>(false);
  const [isDropdownFilterActive, setIsDropdownFilterActive] = useState<boolean>(false);
  const [focusFilterItem, setFocusFilterItem] = useState<any>(null);
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  const filterInputRef = useRef(null);
  const searchData = useContext(SearchContext);
  const searchLevel = useSearchLevel();
  const filterRenderData = useRenderOptions();

  const labels = searchData.i18n;

  const onInputChange = (e: any) => setInputValue(e.target.value);

  const onInputFilterChange = (e: any) => setFilterInputValue(e.target.value);

  const onKeyDown = (e: any) => {
    // Handle backspace for options deletion
    if (e.key === "Backspace" && inputValue.length === 0 && filterInputValue === "" && isInputFocus) {
      const keys = Object.keys(filterRenderData);
      let keyField = "";
      if (isDropdownFilterActive) {
        keyField = Object.keys(focusFilterItem)[0];
      } else {
        keyField = filterRenderData && keys[keys.length - 1];
      }

      if (selectedFilterOption != "") {
        removeObjProperty(selectedFilterOption);
      } else {
        selectFilter(keyField);
      }
    }

    // Handle enter on dropdown for options edit
    if (isDropdownFilterActive && e.key === "Enter") {
      const opts = dropdownOptionsRef.current?.querySelectorAll(".dropdown-add-option-visible");
      const anySelected = Array.from(opts).filter((o: any) => o.classList.contains("current-selection"));
      const currentSelectOption = opts[0];

      if (anySelected.length === 0) {
        currentSelectOption?.click();
      }
    }

    // Handle enter on dropdown for search
    if (isInputFocus && e.key === "Enter") {
      const opts = (dropdownRef.current as any)?.querySelectorAll(".dropdown-option-visible");
      const anySelected = Array.from(opts).filter((o: any) => o.classList.contains("current-selection"));
      const currentSelectOption = opts[0];

      if (anySelected.length === 0) {
        currentSelectOption?.click();
      }
    }
  };

  const updateWidth = () => {
    const newOffsetWidth: number = filterOptionsRef.current?.offsetWidth;
    if (newOffsetWidth === inputOffset) {
      return;
    }

    setInputOffset(newOffsetWidth);
  };

  const selectFilter = (keyField: any) => {
    setSelectedFilterOption(keyField);

    filterOptionsRef?.current?.childNodes?.forEach((x: HTMLElement) => {
      const keyFieldText = labels?.[keyField] ?? keyField;
      if (keyFieldText != "" && x?.innerText?.toLowerCase().includes(keyFieldText.toLowerCase())) {
        x.style.border = "2px solid var(--blue-500)";
        x.style.borderRadius = "6px";
      } else {
        x.style.border = "";
      }
    });
  };

  const onOptionSelect = async (item: string) => {
    if (isDropdownFilterActive) {
      const key = Object.keys(focusFilterItem)[0];
      switch (key) {
        case ISearchInputValues.type:
          searchData.switchType(item);
          break;
        case ISearchInputValues.field:
          searchData.selectField(item);
          break;
      }
    } else {
      switch (searchLevel) {
        case ISearchLevels.level1:
          searchData.selectType(item);
          break;
        case ISearchLevels.level2:
          searchData.selectField(item);
          break;
      }
    }

    updateWidth();
    setInputValue("");
    setFilterInputValue("");
    selectFilter("");

    (inputRef.current as any).focus();
  };

  const onFullTextSelect = (item: string) => {
    searchData.setFulltext(item);
    setInputValue("");
    setFilterInputValue("");
    selectFilter("");
    setIsInputFocus(false);
    (inputRef.current as any).blur();
  };

  const resetSearch = () => {
    searchData.resetSearch();
    setInputValue("");
    setFilterInputValue("");
    selectFilter("");
    setIsFilterInputActive(false);
    setIsFilterTypeActive(false);
    setIsFilterFieldActive(false);
    setSelectedFilterOption("");
    setIsInputFocus(false);
    setIsDropdownFilterActive(false);
  };

  const removeObjProperty = (keyField: string) => {
    if (selectedFilterOption === ISearchInputValues.type && searchLevel > ISearchLevels.level2) {
      searchData.setFulltextOnly(filterRenderData[ISearchInputValues.fulltext] ?? "");
    } else {
      setInputValue("");
      setFilterInputValue("");
      selectFilter("");

      switch (keyField) {
        case ISearchInputValues.type:
          searchData.selectType("");
          break;
        case ISearchInputValues.field:
          searchData.selectField("");
          break;
        case ISearchInputValues.fulltext:
          searchData.setFulltext("");
          break;
      }
    }

    setIsFilterInputActive(false);
    setIsFilterTypeActive(false);
    setIsFilterFieldActive(false);
    setSelectedFilterOption("");

    setIsInputFocus(true);
    setIsDropdownFilterActive(false);

    (inputRef.current as any).focus();
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (inputWrapperRef.current && !(inputWrapperRef.current as any).contains(event.target)) {
        setIsInputFocus(false);
        setIsDropdownFilterActive(false);
        selectFilter("");
        setIsFilterTypeActive(false);
        setIsFilterInputActive(false);
        setIsFilterFieldActive(false);
        setFilterInputValue("");
        setInputValue("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputWrapperRef]);

  useEffect(() => {
    updateWidth();
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  useEffect(() => {
    if (searchLevel === ISearchLevels.max) {
      setIsInputFocus(false);
      setInputValue("");
    }
  }, [filterRenderData, searchLevel]);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (filterInputRef.current && (filterInputRef.current as any).contains(event.target)) {
        setIsDropdownFilterActive(true);
      }
      if (
        filterInputRef.current &&
        !(filterInputRef.current as any).contains(event.target) &&
        dropdownOptionsRef.current &&
        !dropdownOptionsRef.current.contains(event.target)
      ) {
        setIsFilterInputActive(false);
        setIsDropdownFilterActive(false);
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
    function handleClickOutside(event: any) {
      if (filterInputRef.current && (filterInputRef.current as any).contains(event.target)) {
        setIsDropdownFilterActive(true);
      }
      if (
        filterInputRef.current &&
        !(filterInputRef.current as any).contains(event.target) &&
        dropdownOptionsRef.current &&
        !dropdownOptionsRef.current.contains(event.target)
      ) {
        setIsFilterTypeActive(false);
        setIsDropdownFilterActive(false);
      }
    }

    if (isFilterTypeActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (filterInputRef.current && (filterInputRef.current as any).contains(event.target)) {
        setIsDropdownFilterActive(true);
      }
      if (
        filterInputRef.current &&
        !(filterInputRef.current as any).contains(event.target) &&
        dropdownOptionsRef.current &&
        !dropdownOptionsRef.current.contains(event.target)
      ) {
        setIsFilterFieldActive(false);
        setIsDropdownFilterActive(false);
      }
    }

    if (isFilterFieldActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  const searchHasOptions =
    (searchData.field && searchData.field != "") ||
    (searchData.fulltext && searchData.fulltext != "") ||
    (searchData.type && searchData.type !== "");
  return (
    <SSearchWrapper ref={inputWrapperRef}>
      <SSearchIcon>
        <IconSearch />
      </SSearchIcon>
      {filterRenderData && Object.keys(filterRenderData).length ? (
        <FilterOptions
          isFilterInputActive={isFilterInputActive}
          isFilterTypeActive={isFilterTypeActive}
          isFilterFieldActive={isFilterFieldActive}
          filterOptionsRef={filterOptionsRef}
          filterInputRef={filterInputRef}
          onInputChange={onInputFilterChange}
          setIsDropdownFilterActive={setIsDropdownFilterActive}
          setIsInputFocus={setIsInputFocus}
          setIsFilterInputActive={setIsFilterInputActive}
          setIsFilterTypeActive={setIsFilterTypeActive}
          setIsFilterFieldActive={setIsFilterFieldActive}
          setFilterInputValue={setFilterInputValue}
          setFocusFilterItem={setFocusFilterItem}
          selectFilter={selectFilter}
          setFilterInputOffset={setFilterInputOffset}
          setInputValue={setInputValue}
        />
      ) : null}
      <div className="inputWrapper">
        <SInput
          type="text"
          placeholder={searchLevel === ISearchLevels.max ? null : labels?.typeToSearch ?? "Type to search"}
          value={inputValue}
          onFocus={() => {
            setIsDropdownFilterActive(false);
            setIsFilterInputActive(false);
            setIsFilterTypeActive(false);
            setIsFilterFieldActive(false);
            setIsInputFocus(true);
          }}
          onChange={onInputChange}
          disabled={searchLevel === ISearchLevels.max}
          ref={inputRef}
        />
      </div>
      {/* <DropdownSearch
        dropDownPosition={inputOffset}
        isInputFocus={isInputFocus}
        searchResult={inputValue}
        onClick={onOptionSelect}
        setSearchValue={onFullTextSelect}
        dropdownRef={dropdownRef}
      /> */}
      {/* <DropdownFilter
        dropDownPosition={filterInputOffset}
        selectFilter={focusFilterItem}
        resetFilterValue={() => setFocusFilterItem(null)}
        isFilterInputActive={isFilterInputActive}
        inputValue={filterInputValue}
        setOptionValue={onOptionSelect}
        isDropdownFilterActive={isDropdownFilterActive}
        setSearchValue={onFullTextSelect}
        close={() => {
          setIsDropdownFilterActive(false);
          setIsFilterTypeActive(false);
          setIsFilterFieldActive(false);
          setIsFilterInputActive(false);
          setIsInputFocus(false);
          setInputValue('');
        }}
        dropdownReff={dropdownOptionsRef}
      /> */}
      <SIndicatorsIcons>
        {children}
        <SFilterIcon
          isInputFocus={isInputFocus}
          onClick={() => {
            if (searchLevel === ISearchLevels.max) {
              const lastFilterCount = filterOptionsRef.current.children.length;
              const lastFilterRef = filterOptionsRef.current.children[lastFilterCount - 1];

              const buttonRef = lastFilterRef?.children[0].children[1] as HTMLElement;
              buttonRef.click();
            }
            setIsInputFocus(!isInputFocus);
          }}
        >
          <IconFilter />
        </SFilterIcon>
        <SButtonFadeIn active={searchHasOptions as any}>
          <Button onClick={resetSearch} type="danger">
            <IconCross variant="close" />
          </Button>
        </SButtonFadeIn>
      </SIndicatorsIcons>
    </SSearchWrapper>
  );
};
