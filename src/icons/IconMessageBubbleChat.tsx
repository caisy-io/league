import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M3.694 11.3353C3.05133 10.3807 2.66667 9.238 2.66667 8C2.66667 4.686 5.35267 2 8.66667 2C11.9807 2 14.6667 4.686 14.6667 8C14.6667 11.314 11.9807 14 8.66667 14C7.64933 14 6.69333 13.742 5.85333 13.2953C4.956 13.774 3.938 14.056 2.85067 14.056C2.56133 14.056 2.27933 14.03 2 13.9933C2.782 13.282 3.37 12.3687 3.694 11.3353Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (solid) => (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M3.694 11.3353C3.05133 10.3807 2.66667 9.238 2.66667 8C2.66667 4.686 5.35267 2 8.66667 2C11.9807 2 14.6667 4.686 14.6667 8C14.6667 11.314 11.9807 14 8.66667 14C7.64933 14 6.69333 13.742 5.85333 13.2953C4.956 13.774 3.938 14.056 2.85067 14.056C2.56133 14.056 2.27933 14.03 2 13.9933C2.782 13.282 3.37 12.3687 3.694 11.3353Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  20: (solid) => (
    <SIconBase solid={solid} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M4.1175 14.1692C3.31417 12.9758 2.83333 11.5475 2.83333 10C2.83333 5.8575 6.19083 2.5 10.3333 2.5C14.4758 2.5 17.8333 5.8575 17.8333 10C17.8333 14.1425 14.4758 17.5 10.3333 17.5C9.06167 17.5 7.86667 17.1775 6.81667 16.6192C5.695 17.2175 4.4225 17.57 3.06333 17.57C2.70167 17.57 2.34917 17.5375 2 17.4917C2.9775 16.6025 3.7125 15.4608 4.1175 14.1692Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),

  24: (solid) => (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M5.041 17.003C4.077 15.571 3.5 13.857 3.5 12C3.5 7.029 7.529 3 12.5 3C17.471 3 21.5 7.029 21.5 12C21.5 16.971 17.471 21 12.5 21C10.974 21 9.54 20.613 8.28 19.943C6.934 20.661 5.407 21.084 3.776 21.084C3.342 21.084 2.919 21.045 2.5 20.99C3.673 19.923 4.555 18.553 5.041 17.003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  28: (solid) => (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M5.041 17.003C4.077 15.571 3.5 13.857 3.5 12C3.5 7.029 7.529 3 12.5 3C17.471 3 21.5 7.029 21.5 12C21.5 16.971 17.471 21 12.5 21C10.974 21 9.54 20.613 8.28 19.943C6.934 20.661 5.407 21.084 3.776 21.084C3.342 21.084 2.919 21.045 2.5 20.99C3.673 19.923 4.555 18.553 5.041 17.003Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  32: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.5882 22.6707C5.30286 20.7613 4.53353 18.476 4.53353 16C4.53353 9.372 9.90553 4 16.5335 4C23.1615 4 28.5335 9.372 28.5335 16C28.5335 22.628 23.1615 28 16.5335 28C14.4989 28 12.5869 27.484 10.9069 26.5907C9.1122 27.548 7.0762 28.112 4.90153 28.112C4.32286 28.112 3.75886 28.06 3.2002 27.9867C4.7642 26.564 5.9402 24.7373 6.5882 22.6707Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  36: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.5882 22.6707C5.30286 20.7613 4.53353 18.476 4.53353 16C4.53353 9.372 9.90553 4 16.5335 4C23.1615 4 28.5335 9.372 28.5335 16C28.5335 22.628 23.1615 28 16.5335 28C14.4989 28 12.5869 27.484 10.9069 26.5907C9.1122 27.548 7.0762 28.112 4.90153 28.112C4.32286 28.112 3.75886 28.06 3.2002 27.9867C4.7642 26.564 5.9402 24.7373 6.5882 22.6707Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  40: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.5882 22.6707C5.30286 20.7613 4.53353 18.476 4.53353 16C4.53353 9.372 9.90553 4 16.5335 4C23.1615 4 28.5335 9.372 28.5335 16C28.5335 22.628 23.1615 28 16.5335 28C14.4989 28 12.5869 27.484 10.9069 26.5907C9.1122 27.548 7.0762 28.112 4.90153 28.112C4.32286 28.112 3.75886 28.06 3.2002 27.9867C4.7642 26.564 5.9402 24.7373 6.5882 22.6707Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
  48: (solid) => (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path className="solid-fill-toogle" fillRule="evenodd" clipRule="evenodd" d="M6.5882 22.6707C5.30286 20.7613 4.53353 18.476 4.53353 16C4.53353 9.372 9.90553 4 16.5335 4C23.1615 4 28.5335 9.372 28.5335 16C28.5335 22.628 23.1615 28 16.5335 28C14.4989 28 12.5869 27.484 10.9069 26.5907C9.1122 27.548 7.0762 28.112 4.90153 28.112C4.32286 28.112 3.75886 28.06 3.2002 27.9867C4.7642 26.564 5.9402 24.7373 6.5882 22.6707Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ),
};

export const IconMessageBubbleChat: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);
