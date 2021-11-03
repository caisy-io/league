import styled from "styled-components";
import { CSSParagraphXSmallRegular } from "../../../constants/styles/fonts";

interface ISDatePickerCalendarWrapper {
  month: string;
  year: string;
}

export const SDatePickerCalendarWrapper = styled.div<ISDatePickerCalendarWrapper>`
  margin-top: 16px;
  user-select: none;

  span.flatpickr-day {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-priority-neutral-2);
    border: none;
    padding: 8px !important;
    font-size: 13px;
    font-weight: 500;
    font-family: Inter;
    border-radius: 6px !important;

    &.prevMonthDay,
    &.nextMonthDay,
    &.flatpickr-disabled {
      opacity: 0.4;
      border: none !important;
    }

    &.today {
      border: solid 1.5px var(--primary-500-opacity-8);
      color: var(--interactional-primary-01);

      &.prevMonthDay,
      &.nextMonthDay {
        border: solid 1.5px var(--primary-500-opacity-8);
        color: var(--interactional-primary-01);
      }

      &:hover {
        border: solid 1.5px var(--primary-500-opacity-8);
      }
    }

    &:hover {
      background-color: var(--primary-500-opacity-8);
      color: var(--interactional-primary-01);
    }

    &.selected,
    &.selected.today {
      color: var(--status-info);
      background-color: var(--states-info-bg);
    }
  }

  .flatpickr-weekday {
    color: #8b94a7;
    font-size: 11px;
  }

  .flatpickr-months {
    height: 27px;
    position: relative;

    &:before {
      display: flex;
      align-items: center;
      justify-content: center;
      content: "${(props) => props.month + " " + props.year}";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      color: var(--text-priority-neutral-2);
      font-family: Inter;
      font-size: 16px;
      font-weight: 600;
    }
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
    width: 25px;
    height: 25px;
    padding: 0;
    border-radius: 6px;
    border: solid 1px var(--neutral-200);

    svg {
      height: 8px;
      stroke: var(--neutral-500);
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
    width: 307.875px;
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
    height: 36px;
  }

  .flatpickr-weekdays .flatpickr-weekdaycontainer {
    display: flex;
    flex: 1;
    font-family: Inter;
    font-size: 11px;
    color: #8b94a7;
  }

  span.flatpickr-weekday {
    cursor: default;
    background: transparent;
    text-align: center;
    display: block;
    flex: 1;
    font-weight: bolder;
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
    width: 307.875px;
  }

  .flatpickr-days:focus {
    outline: 0;
  }

  .dayContainer {
    padding: 0;
    outline: 0;
    text-align: left;
    width: 307.875px;
    min-width: 307.875px;
    max-width: 307.875px;
    box-sizing: border-box;
    display: inline-block;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    opacity: 1;
  }

  .flatpickr-day {
    box-sizing: border-box;
    color: #404848;
    cursor: pointer;
    font-weight: 400;
    width: 14.2857143%;
    flex-basis: 14.2857143%;
    max-width: 39px;
    height: 39px;
    line-height: 39px;
    margin: 3px 0;
    display: inline-block;
    position: relative;
    justify-content: center;
    text-align: center;

    &.has-badge {
      position: relative !important;
      &:after {
        content: attr(data-badge-content);
        z-index: 10;
        position: absolute;
        top: 5px;
        right: 5px;
        transform: translate(50%, -50%);
        width: 20px;
        height: 20px;
        background: var(--ui-supportive-03);
        border: 1px solid var(--ui-01);
        box-sizing: border-box;
        border-radius: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        ${CSSParagraphXSmallRegular};
        text-align: center;
        color: var(--ui-01);
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
    padding: 0;
    border-right: 0;
  }

  @media screen and (min-width: 0 \0) and (min-resolution: +72dpi) {
    span.flatpickr-day {
      display: block;
      flex: 1 0 auto;
    }
  }
`;
