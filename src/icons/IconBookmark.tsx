import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M3.33154 13.0021V4.66526C3.33154 3.56023 4.22735 2.66443 5.33238 2.66443H10.6679C11.773 2.66443 12.6688 3.56023 12.6688 4.66526V13.0021C12.6689 13.1271 12.599 13.2417 12.4879 13.2989C12.3767 13.3561 12.2429 13.3463 12.1412 13.2735L8.19423 10.4537C8.07818 10.3706 7.92213 10.3706 7.80607 10.4537L3.8591 13.2728C3.75753 13.3455 3.62386 13.3554 3.51274 13.2983C3.40162 13.2413 3.33169 13.127 3.33154 13.0021Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M3.33154 13.0021V4.66526C3.33154 3.56023 4.22735 2.66443 5.33238 2.66443H10.6679C11.773 2.66443 12.6688 3.56023 12.6688 4.66526V13.0021C12.6689 13.1271 12.599 13.2417 12.4879 13.2989C12.3767 13.3561 12.2429 13.3463 12.1412 13.2735L8.19423 10.4537C8.07818 10.3706 7.92213 10.3706 7.80607 10.4537L3.8591 13.2728C3.75753 13.3455 3.62386 13.3554 3.51274 13.2983C3.40162 13.2413 3.33169 13.127 3.33154 13.0021Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  20: (solid) => (
    <SIconBase solid={solid} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M4.16406 16.2526V5.83161C4.16406 4.45032 5.28382 3.33057 6.6651 3.33057H13.3345C14.7158 3.33057 15.8356 4.45032 15.8356 5.83161V16.2526C15.8357 16.4089 15.7484 16.5521 15.6095 16.6236C15.4705 16.6951 15.3032 16.6829 15.1761 16.5919L10.2424 13.0671C10.0974 12.9633 9.9023 12.9633 9.75722 13.0671L4.8235 16.5911C4.69655 16.682 4.52945 16.6943 4.39056 16.623C4.25166 16.5517 4.16425 16.4087 4.16406 16.2526Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),

  24: (solid) => (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M4.99707 19.5031V6.99789C4.99707 5.34035 6.34078 3.99664 7.99832 3.99664H16.0017C17.6592 3.99664 19.0029 5.34035 19.0029 6.99789V19.5031C19.0031 19.6906 18.8983 19.8625 18.7316 19.9483C18.5648 20.0341 18.3641 20.0194 18.2116 19.9103L12.2911 15.6805C12.117 15.5559 11.8829 15.5559 11.7089 15.6805L5.7884 19.9093C5.63605 20.0183 5.43554 20.0331 5.26886 19.9475C5.10219 19.862 4.99729 19.6905 4.99707 19.5031Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  28: (solid) => (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M4.99707 19.5031V6.99789C4.99707 5.34035 6.34078 3.99664 7.99832 3.99664H16.0017C17.6592 3.99664 19.0029 5.34035 19.0029 6.99789V19.5031C19.0031 19.6906 18.8983 19.8625 18.7316 19.9483C18.5648 20.0341 18.3641 20.0194 18.2116 19.9103L12.2911 15.6805C12.117 15.5559 11.8829 15.5559 11.7089 15.6805L5.7884 19.9093C5.63605 20.0183 5.43554 20.0331 5.26886 19.9475C5.10219 19.862 4.99729 19.6905 4.99707 19.5031Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  32: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.6626 26.0042V9.33059C6.6626 7.12053 8.4542 5.32892 10.6643 5.32892H21.3354C23.5454 5.32892 25.337 7.12053 25.337 9.33059V26.0042C25.3372 26.2542 25.1976 26.4834 24.9752 26.5978C24.7529 26.7122 24.4853 26.6926 24.2819 26.5471L16.388 20.9074C16.1559 20.7413 15.8438 20.7413 15.6117 20.9074L7.7177 26.5458C7.51457 26.6911 7.24723 26.7108 7.02499 26.5968C6.80276 26.4827 6.66289 26.254 6.6626 26.0042Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  36: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.6626 26.0042V9.33059C6.6626 7.12053 8.4542 5.32892 10.6643 5.32892H21.3354C23.5454 5.32892 25.337 7.12053 25.337 9.33059V26.0042C25.3372 26.2542 25.1976 26.4834 24.9752 26.5978C24.7529 26.7122 24.4853 26.6926 24.2819 26.5471L16.388 20.9074C16.1559 20.7413 15.8438 20.7413 15.6117 20.9074L7.7177 26.5458C7.51457 26.6911 7.24723 26.7108 7.02499 26.5968C6.80276 26.4827 6.66289 26.254 6.6626 26.0042Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  40: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.6626 26.0042V9.33059C6.6626 7.12053 8.4542 5.32892 10.6643 5.32892H21.3354C23.5454 5.32892 25.337 7.12053 25.337 9.33059V26.0042C25.3372 26.2542 25.1976 26.4834 24.9752 26.5978C24.7529 26.7122 24.4853 26.6926 24.2819 26.5471L16.388 20.9074C16.1559 20.7413 15.8438 20.7413 15.6117 20.9074L7.7177 26.5458C7.51457 26.6911 7.24723 26.7108 7.02499 26.5968C6.80276 26.4827 6.66289 26.254 6.6626 26.0042Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  48: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.6626 26.0042V9.33059C6.6626 7.12053 8.4542 5.32892 10.6643 5.32892H21.3354C23.5454 5.32892 25.337 7.12053 25.337 9.33059V26.0042C25.3372 26.2542 25.1976 26.4834 24.9752 26.5978C24.7529 26.7122 24.4853 26.6926 24.2819 26.5471L16.388 20.9074C16.1559 20.7413 15.8438 20.7413 15.6117 20.9074L7.7177 26.5458C7.51457 26.6911 7.24723 26.7108 7.02499 26.5968C6.80276 26.4827 6.66289 26.254 6.6626 26.0042Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
};

export const IconBookmark: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);
