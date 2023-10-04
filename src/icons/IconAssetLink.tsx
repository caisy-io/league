import React, {FC} from "react";
import {SIconBase} from "./styles/SIconBase";
import {IIconSize} from "../utils/types";

const IconSize = {
  20: <SIconBase width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.5043 10.166V15.1681C18.5043 17.0098 17.0113 18.5028 15.1696 18.5028H6.83277C4.99105 18.5028 3.49805 17.0098 3.49805 15.1681V6.8313C3.49805 4.98959 4.99105 3.49658 6.83277 3.49658H9.33381" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.49805 11.8335L4.5778 10.7538C4.95475 10.3768 5.466 10.165 5.99909 10.165C6.53217 10.165 7.04342 10.3768 7.42037 10.7538L11.0012 14.3346" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6.83398 18.5029L12.0821 13.2547C12.8671 12.4698 14.1398 12.4698 14.9247 13.2547L18.2087 16.5387" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.501 8.49867C12.1201 8.49781 11.0009 7.37856 11 5.99762V5.99762C11.0009 4.61669 12.1201 3.49743 13.501 3.49658" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.002 3.49658C17.3829 3.49743 18.5021 4.61669 18.503 5.99762V5.99762C18.5021 7.37856 17.3829 8.49781 16.002 8.49867" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.502 5.99789H16.003" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </SIconBase>,
}

export const IconAssetLink: FC<IIconSize> = ({size = 20}) => IconSize[size];
