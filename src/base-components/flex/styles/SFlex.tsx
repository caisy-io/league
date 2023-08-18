import React from "react";
import styled, { css } from "styled-components";
import { MIN_DIAMOND, MIN_GOLD, MIN_PLATINUM, MIN_SILVER } from "../../../constants/styles/mediaquerys";

interface IFlexDefinition {
  gap?: string;
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-even" | "stretch";
  alignContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-even" | "stretch";
  alignItems?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-even" | "stretch";
}

export interface IFlex extends IFlexDefinition {
  bronze?: IFlexDefinition;
  silver?: IFlexDefinition;
  gold?: IFlexDefinition;
  platinum?: IFlexDefinition;
  diamond?: IFlexDefinition;
  children?: React.ReactNode;
}

const Bronze = css`
  display: flex;
  flex-direction: ${(props: any) => props.bronze?.direction || props.direction || "row"};
  align-items: ${(props: any) => props.bronze?.alignItems || props.alignItems || "center"};
  justify-content: ${(props: any) => props.bronze?.justify || props.justify || "flex-start"};
  align-content: ${(props: any) => props.bronze?.alignContent || props.alignContent || "stretch"};
  ${(props: any) => (props.bronze?.gap || props.gap ? `gap: ${props.bronze?.gap || props.gap}` : "")};
`;

const Silver = css`
  ${(props: any) => (props.silver?.direction ? `flex-direction: ${props.silver?.direction}` : "")};
  ${(props: any) => (props.silver?.alignItems ? `align-items: ${props.silver?.alignItems}` : "")};
  ${(props: any) => (props.silver?.justify ? `justify-content: ${props.silver?.justify}` : "")};
  ${(props: any) => (props.silver?.alignContent ? `align-content: ${props.silver?.alignContent}` : "")};
  ${(props: any) => (props.silver?.gap ? `gap: ${props.silver?.gap}` : "")};
`;

const Gold = css`
  ${(props: any) => (props.gold?.direction ? `flex-direction: ${props.gold?.direction}` : "")};
  ${(props: any) => (props.gold?.alignItems ? `align-items: ${props.gold?.alignItems}` : "")};
  ${(props: any) => (props.gold?.justify ? `justify-content: ${props.gold?.justify}` : "")};
  ${(props: any) => (props.gold?.alignContent ? `align-content: ${props.gold?.alignContent}` : "")};
  ${(props: any) => (props.gold?.gap ? `gap: ${props.gold?.gap}` : "")};
`;

const Platinum = css`
  ${(props: any) => (props.platinum?.direction ? `flex-direction: ${props.platinum?.direction}` : "")};
  ${(props: any) => (props.platinum?.alignItems ? `align-items: ${props.platinum?.alignItems}` : "")};
  ${(props: any) => (props.platinum?.justify ? `justify-content: ${props.platinum?.justify}` : "")};
  ${(props: any) => (props.platinum?.alignContent ? `align-content: ${props.platinum?.alignContent}` : "")};
  ${(props: any) => (props.platinum?.gap ? `gap: ${props.platinum?.gap}` : "")};
`;

const Diamond = css`
  ${(props: any) => (props.diamond?.direction ? `flex-direction: ${props.diamond?.direction}` : "")};
  ${(props: any) => (props.diamond?.alignItems ? `align-items: ${props.diamond?.alignItems}` : "")};
  ${(props: any) => (props.diamond?.justify ? `justify-content: ${props.diamond?.justify}` : "")};
  ${(props: any) => (props.diamond?.alignContent ? `align-content: ${props.diamond?.alignContent}` : "")};
  ${(props: any) => (props.diamond?.gap ? `gap: ${props.diamond?.gap}` : "")};
`;

export const SFlex = styled.div<any>`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
