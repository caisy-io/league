import React, {FC} from "react";
import {SIconBase} from "./styles/SIconBase";
import {IIconSize} from "../utils/types";

const IconSize = {
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11.4453" y="10.0005" width="4.92912" height="4.92912" rx="1" transform="rotate(-45 11.4453 10.0005)"/>
    <rect x="6.51562" y="5.07129" width="4.92912" height="4.92912" rx="1" transform="rotate(-45 6.51562 5.07129)"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.29289 9.29329C1.90237 9.68382 1.90237 10.317 2.29289 10.7075L3.58383 11.9984H5.76176C6.01333 11.9984 6.26034 12.018 6.50134 12.0557L7.84951 10.7075C8.24003 10.317 8.24003 9.68382 7.84951 9.29329L5.77831 7.22209C5.38778 6.83157 4.75462 6.83157 4.36409 7.22209L2.29289 9.29329Z"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M8.54492 12.899C9.73691 13.7621 10.5123 15.1652 10.5123 16.7494C10.5123 17.1578 10.4608 17.5542 10.3639 17.9324C10.4888 17.8836 10.6059 17.8088 10.7068 17.7079L12.778 15.6367C13.1685 15.2462 13.1685 14.613 12.778 14.2225L10.7068 12.1513C10.3163 11.7608 9.68311 11.7608 9.29259 12.1513L8.54492 12.899Z"/>
    <path d="M5.75586 14.2437C7.13622 14.2445 8.25501 15.3633 8.25586 16.7437V16.7437C8.25501 18.124 7.13622 19.2428 5.75586 19.2437" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.25586 19.2437C1.8755 19.2428 0.75671 18.124 0.755859 16.7437H0.755859C0.75671 15.3633 1.8755 14.2445 3.25586 14.2437" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.75586 16.7438H3.25586" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SIconBase>,
}

export const IconComponentLink: FC<IIconSize> = ({size = 20}) => IconSize[size];
