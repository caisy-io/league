import styled from "styled-components";
import {CSSParagraphXSmallRegular} from "../../../constants/styles/fonts";

interface ISDatePickerCalendarWrapper {
}

export const SDatePickerCalendarWrapper = styled.div<ISDatePickerCalendarWrapper>`
  user-select: none;
  position: relative;
  
  span.flatpickr-day {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-family: Inter;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    width: 28px;
    height: 28px;
    margin: 2px 5.915px;
    color: var(--text-01);
    cursor: pointer;
    flex: 0;
    flex-basis: 28px;
    border-radius: 60px;
    background-color: var(--interactional-tertiary-03);
    &.prevMonthDay,
    &.nextMonthDay,
    &.flatpickr-disabled {
      color: var(--text-03);
    }
    
    &.today {
      font-weight: 500;
      color: var(--text-suppportive-02);
    }
    
    &:hover {
      background-color: var(--hover-interactional-tertiary-03);
    }
    
    &.selected,
    &.selected.today {
      color: var(--text-02);
      background-color: var(--active-interactional-tertiary-03-1);
    }
    &.selected.has-badge{
      :after{
        box-shadow: 0 0 0 1px #fff;
      }
    }
    &.inRange, &.endRange, &.startRange{
      background-color: var(--interactional-secondary-03);
      color: var(--text-04);
      &.today{
        color: var(--text-suppportive-02);
      }
    }
  }
  
  .flatpickr-weekday {
    color: #8b94a7;
    font-size: 11px;
  }
  
  .flatpickr-months {
    height: 32px;
    position: relative;
    margin-bottom: 4px;
  }
  
  .flatpickr-months .flatpickr-prev-month.flatpickr-prev-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-prev-month {
    margin: auto 0;
    cursor: pointer;
    position: absolute;
    left: 0;
  }
  
  .flatpickr-months .flatpickr-prev-month.flatpickr-next-month,
  .flatpickr-months .flatpickr-next-month.flatpickr-next-month {
    cursor: pointer;
    position: absolute;
    right: 0;
  }
  
  .flatpickr-prev-month,
  .flatpickr-next-month {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: 32px;
    height: 32px;
    padding: 0;
    border-radius: 6px;
    border: solid 1px var(--interactional-secondary-08);
    opacity: 0;
    
    svg {
      height: 8px;
      stroke: var(--icon-01);
    }
    
    &:hover {
      border: solid 1px var(--interactional-primary-01);
      
      path {
        stroke: var(--interactional-primary-01);
      }
    }
  }
  
  .flatpickr-month {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .flatpickr-current-month {
    display: none;
  }
  
  .flatpickr-calendar {
    text-align: center;
    padding: 0;
    direction: ltr;
    border: 0;
    line-height: 24px;
    border-radius: 5px;
    width: 271px;
    min-width: 271px;
    box-sizing: border-box;
    background: #fff;
    display: block !important;
    box-shadow: none !important;
  }
  
  .flatpickr-weekdays {
    background: transparent;
    text-align: center;
    overflow: hidden;
    width: 100%;
    display: flex;
    align-items: center;
  }
  
  .flatpickr-weekdays .flatpickr-weekdaycontainer {
    display: flex;
    flex: 1;
    justify-content: space-between;
    font-family: Inter;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: var(--text-03);
  }
  
  span.flatpickr-weekday {
    cursor: default;
    background: transparent;
    text-align: center;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .dayContainer,
  .flatpickr-weeks {
    padding: 1px 0 0 0;
  }
  
  .flatpickr-days {
    position: relative;
    overflow: visible;
    display: flex;
    align-items: flex-start;
  }
  
  .flatpickr-days:focus {
    outline: 0;
  }
  
  .dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    opacity: 1;
    margin: -2px -5.915px;
    padding: 0 2px;
  }
  
  .flatpickr-day {
    &.has-badge {
      position: relative;
      
      &:after {
        content: attr(data-badge-content);
        z-index: 8;
        position: absolute;
        top: 1px;
        right: 1px;
        width: 6px;
        height: 6px;
        background: var(--ui-supportive-01);
        box-sizing: border-box;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  
  .flatpickr-day.flatpickr-disabled,
  .flatpickr-day.flatpickr-disabled:hover {
    cursor: not-allowed;
  }
  
  .rangeMode .flatpickr-day {
    margin-top: 1px;
  }
  
  .flatpickr-weekwrapper {
    float: left;
  }
  
  .flatpickr-weekwrapper .flatpickr-weeks {
    padding: 0 12px;
  }
  
  .flatpickr-weekwrapper .flatpickr-weekday {
    float: none;
    width: 100%;
    line-height: 28px;
  }
  
  .flatpickr-weekwrapper span.flatpickr-day,
  .flatpickr-weekwrapper span.flatpickr-day:hover {
    display: block;
    width: 100%;
    max-width: none;
    cursor: default;
    border: none;
  }
  
  .flatpickr-innerContainer {
    display: flex;
    box-sizing: border-box;
    overflow: visible;
  }
  
  .flatpickr-rContainer {
    display: inline-block;
    padding: 0;
    box-sizing: border-box;
  }
  
  .dayContainer {
    border-right: 0;
  }
`;
