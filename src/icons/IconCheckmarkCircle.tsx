import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="7.99957" cy="8" r="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M5.62793 8.22607L7.0732 9.67134L7.06386 9.662L10.3246 6.40131" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (solid) => (
    <SIconBase solid={solid}  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="7.99957" cy="8" r="6.0025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M5.62793 8.22607L7.0732 9.67134L7.06386 9.662L10.3246 6.40131" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  20: (solid) => (
    <SIconBase solid={solid}  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="9.99971" cy="9.99998" r="7.50312" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M7.03516 10.2826L8.84174 12.0892L8.83007 12.0775L12.9059 8.00165" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),

  24: (solid) => (
    <SIconBase solid={solid}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="12.0003" cy="12" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  28: (solid) => (
    <SIconBase solid={solid}  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="12.0003" cy="12" r="9.00375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M8.44287 12.3391L10.6108 14.507L10.5968 14.493L15.4878 9.60199" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  32: (solid) => (
    <SIconBase solid={solid}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="16.0001" cy="16" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M11.2568 16.4522L14.1474 19.3427L14.1287 19.324L20.6501 12.8026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  36: (solid) => (
    <SIconBase solid={solid}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="16.0001" cy="16" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M11.2568 16.4522L14.1474 19.3427L14.1287 19.324L20.6501 12.8026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  40: (solid) => (
    <SIconBase solid={solid}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="16.0001" cy="16" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M11.2568 16.4522L14.1474 19.3427L14.1287 19.324L20.6501 12.8026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  48: (solid) => (
    <SIconBase solid={solid}  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle className="solid-fill-toogle" cx="16.0001" cy="16" r="12.005" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path className="white-stroke-path" d="M11.2568 16.4522L14.1474 19.3427L14.1287 19.324L20.6501 12.8026" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
};

export const IconCheckmarkCircle: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);
