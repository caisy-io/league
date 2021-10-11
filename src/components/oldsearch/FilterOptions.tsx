import React from "react";
import { ISearchInputValues, useRenderOptions, useSearchContent } from "./SearchProvider";
import FilterButton from "./FilterButton";
import { SSearchFilterWrapper, SSearchFilteredOptions, SFilterButton } from "./styles/SSearchWithFilter";

const FilterOptions = ({
  isFilterInputActive,
  isFilterTypeActive,
  isFilterFieldActive,
  filterOptionsRef,
  filterInputRef,
  onInputChange,
  setIsDropdownFilterActive,
  setIsInputFocus,
  setIsFilterInputActive,
  setIsFilterTypeActive,
  setIsFilterFieldActive,
  setFocusFilterItem,
  setFilterInputValue,
  selectFilter,
  setFilterInputOffset,
  setInputValue,
}) => {
  const labels: any = {};
  const optionsData = useSearchContent();
  const filterRenderData = useRenderOptions();
  return (
    <SSearchFilterWrapper ref={filterOptionsRef}>
      {Object.keys(filterRenderData).map((keyField: string) => {
        const currTypeOptions = optionsData.find(
          (el: any) =>
            el.name.toLowerCase() === filterRenderData[keyField].toLowerCase() || el.id === filterRenderData[keyField],
        );
        return (
          <div key={keyField} style={{ margin: "3px" }}>
            <SSearchFilteredOptions isFilteredActive={true}>
              <SFilterButton onClick={() => selectFilter(keyField)}>
                {labels?.[keyField?.toLowerCase()] ?? keyField}
              </SFilterButton>
              <FilterButton
                isButtonActive={
                  ISearchInputValues.fulltext === keyField
                    ? isFilterInputActive
                    : ISearchInputValues.type === keyField
                    ? isFilterTypeActive
                    : isFilterFieldActive
                }
                onInputChange={onInputChange}
                filterInputRef={filterInputRef}
                inputData={
                  ISearchInputValues.fulltext === keyField
                    ? filterRenderData[keyField]
                    : currTypeOptions && currTypeOptions?.title
                }
                onBtnClick={
                  ISearchInputValues.fulltext === keyField
                    ? (event) => {
                        setFilterInputOffset(event.target.parentElement.offsetLeft);
                        setFocusFilterItem({
                          [keyField]: filterRenderData[keyField],
                        });
                        setIsDropdownFilterActive(true);
                        setIsInputFocus(false);
                        setInputValue("");
                        setIsFilterInputActive(true);
                        setFilterInputValue(filterRenderData[keyField]);
                      }
                    : ISearchInputValues.type === keyField
                    ? (event) => {
                        setFilterInputOffset(event.target.parentElement.offsetLeft);
                        setIsDropdownFilterActive(true);
                        setIsInputFocus(false);
                        setInputValue("");
                        setIsFilterTypeActive(true);
                        setFilterInputValue(currTypeOptions && currTypeOptions.title);
                        setFocusFilterItem({
                          [keyField]: filterRenderData[keyField],
                        });
                      }
                    : (event) => {
                        setFilterInputOffset(event.target.parentElement.offsetLeft);
                        setIsDropdownFilterActive(true);
                        setIsInputFocus(false);
                        setInputValue("");
                        setIsFilterFieldActive(true);
                        setFilterInputValue(currTypeOptions && currTypeOptions.title);
                        setFocusFilterItem({
                          [keyField]: filterRenderData[keyField],
                        });
                      }
                }
                label={
                  ISearchInputValues.fulltext === keyField
                    ? filterRenderData[keyField]
                    : currTypeOptions && currTypeOptions.title
                }
              />
            </SSearchFilteredOptions>
          </div>
        );
      })}
    </SSearchFilterWrapper>
  );
};

export default FilterOptions;
