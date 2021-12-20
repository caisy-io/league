import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M2.33193 1.39746C1.44828 1.39746 0.731934 2.1138 0.731934 2.99746V4.99869V7.99996V11.0012V13.0025C0.731934 13.8861 1.44828 14.6025 2.33193 14.6025H5.00055C5.8842 14.6025 6.60054 13.8861 6.60054 13.0025V11.0012V7.99996V4.99869V2.99746C6.60054 2.1138 5.8842 1.39746 5.00054 1.39746H2.33193ZM5.40055 10.4012V8.59996H1.93193V10.4012H5.40055ZM1.93193 11.6012H5.40055V13.0025C5.40055 13.2234 5.22146 13.4025 5.00055 13.4025H2.33193C2.11102 13.4025 1.93193 13.2234 1.93193 13.0025V11.6012ZM1.93193 7.39996H5.40055V5.59869H1.93193V7.39996ZM5.40055 4.39869V2.99746C5.40055 2.77655 5.22146 2.59746 5.00054 2.59746H2.33193C2.11102 2.59746 1.93193 2.77655 1.93193 2.99746V4.39869H5.40055Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 9.99996C10.6667 9.26329 10.07 8.66663 9.33333 8.66663C8.59667 8.66663 8 9.26329 8 9.99996C8 10.7366 8.59667 11.3333 9.33333 11.3333V11.3333C10.07 11.3333 10.6667 10.7366 10.6667 9.99996Z" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33333 2.66663V8.66663" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33333 11.3334V13.3334" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 5.99996C12 6.73663 12.5967 7.33329 13.3333 7.33329C14.07 7.33329 14.6667 6.73663 14.6667 5.99996C14.6667 5.26329 14.07 4.66663 13.3333 4.66663V4.66663C12.5967 4.66663 12 5.26329 12 5.99996Z" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 13.3334V7.33337" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 4.66663V2.66663" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M2.33193 1.39746C1.44828 1.39746 0.731934 2.1138 0.731934 2.99746V4.99869V7.99996V11.0012V13.0025C0.731934 13.8861 1.44828 14.6025 2.33193 14.6025H5.00055C5.8842 14.6025 6.60054 13.8861 6.60054 13.0025V11.0012V7.99996V4.99869V2.99746C6.60054 2.1138 5.8842 1.39746 5.00054 1.39746H2.33193ZM5.40055 10.4012V8.59996H1.93193V10.4012H5.40055ZM1.93193 11.6012H5.40055V13.0025C5.40055 13.2234 5.22146 13.4025 5.00055 13.4025H2.33193C2.11102 13.4025 1.93193 13.2234 1.93193 13.0025V11.6012ZM1.93193 7.39996H5.40055V5.59869H1.93193V7.39996ZM5.40055 4.39869V2.99746C5.40055 2.77655 5.22146 2.59746 5.00054 2.59746H2.33193C2.11102 2.59746 1.93193 2.77655 1.93193 2.99746V4.39869H5.40055Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.6667 9.99996C10.6667 9.26329 10.07 8.66663 9.33333 8.66663C8.59667 8.66663 8 9.26329 8 9.99996C8 10.7366 8.59667 11.3333 9.33333 11.3333V11.3333C10.07 11.3333 10.6667 10.7366 10.6667 9.99996Z" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33333 2.66663V8.66663" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.33333 11.3334V13.3334" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 5.99996C12 6.73663 12.5967 7.33329 13.3333 7.33329C14.07 7.33329 14.6667 6.73663 14.6667 5.99996C14.6667 5.26329 14.07 4.66663 13.3333 4.66663V4.66663C12.5967 4.66663 12 5.26329 12 5.99996Z" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 13.3334V7.33337" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.3333 4.66663V2.66663" stroke="#172C55" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M2.99854 1.74683C2.03204 1.74683 1.24854 2.53033 1.24854 3.49683V6.24838V9.99995V13.7515V16.5031C1.24854 17.4696 2.03203 18.2531 2.99853 18.2531H6.8343C7.8008 18.2531 8.5843 17.4696 8.5843 16.5031V13.7515V9.99995V6.24838V3.49683C8.5843 2.53033 7.8008 1.74683 6.8343 1.74683H2.99854ZM7.0843 13.0015V10.75H2.74854V13.0015H7.0843ZM2.74854 14.5015H7.0843V16.5031C7.0843 16.6411 6.97237 16.7531 6.8343 16.7531H2.99853C2.86046 16.7531 2.74854 16.6411 2.74854 16.5031V14.5015ZM2.74854 9.24995H7.0843V6.99838H2.74854V9.24995ZM7.0843 5.49838V3.49683C7.0843 3.35875 6.97237 3.24683 6.8343 3.24683H2.99854C2.86046 3.24683 2.74854 3.35875 2.74854 3.49683V5.49838H7.0843Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.6668 12.5C13.6668 11.5792 12.921 10.8334 12.0002 10.8334C11.0793 10.8334 10.3335 11.5792 10.3335 12.5C10.3335 13.4209 11.0793 14.1667 12.0002 14.1667V14.1667C12.921 14.1667 13.6668 13.4209 13.6668 12.5Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0002 3.33337V10.8334" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.0002 14.1666V16.6666" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3335 7.50004C15.3335 8.42087 16.0793 9.16671 17.0002 9.16671C17.921 9.16671 18.6668 8.42087 18.6668 7.50004C18.6668 6.57921 17.921 5.83337 17.0002 5.83337V5.83337C16.0793 5.83337 15.3335 6.57921 15.3335 7.50004Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.0002 16.6666V9.16663" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.0002 5.83337V3.33337" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66455 2.24622C2.69805 2.24622 1.91455 3.02972 1.91455 3.99622V7.49809V12V16.5018V20.0037C1.91455 20.9702 2.69805 21.7537 3.66455 21.7537H8.66747C9.63397 21.7537 10.4175 20.9702 10.4175 20.0037V16.5018V12V7.49809V3.99622C10.4175 3.02972 9.63397 2.24622 8.66747 2.24622H3.66455ZM8.91747 15.7518V12.75H3.41455V15.7518H8.91747ZM3.41455 17.2518H8.91747V20.0037C8.91747 20.1418 8.80554 20.2537 8.66747 20.2537H3.66455C3.52648 20.2537 3.41455 20.1418 3.41455 20.0037V17.2518ZM3.41455 11.25H8.91747V8.24809H3.41455V11.25ZM8.91747 6.74809V3.99622C8.91747 3.85815 8.80554 3.74622 8.66747 3.74622H3.66455C3.52648 3.74622 3.41455 3.85814 3.41455 3.99622V6.74809H8.91747Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6665 15C16.6665 13.895 15.7715 13 14.6665 13C13.5615 13 12.6665 13.895 12.6665 15C12.6665 16.105 13.5615 17 14.6665 17V17C15.7715 17 16.6665 16.105 16.6665 15Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 4V13" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 17V20" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 9C18.6665 10.105 19.5615 11 20.6665 11C21.7715 11 22.6665 10.105 22.6665 9C22.6665 7.895 21.7715 7 20.6665 7V7C19.5615 7 18.6665 7.895 18.6665 9Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 20V11" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 7V4" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66455 2.24622C2.69805 2.24622 1.91455 3.02972 1.91455 3.99622V7.49809V12V16.5018V20.0037C1.91455 20.9702 2.69805 21.7537 3.66455 21.7537H8.66747C9.63397 21.7537 10.4175 20.9702 10.4175 20.0037V16.5018V12V7.49809V3.99622C10.4175 3.02972 9.63397 2.24622 8.66747 2.24622H3.66455ZM8.91747 15.7518V12.75H3.41455V15.7518H8.91747ZM3.41455 17.2518H8.91747V20.0037C8.91747 20.1418 8.80554 20.2537 8.66747 20.2537H3.66455C3.52648 20.2537 3.41455 20.1418 3.41455 20.0037V17.2518ZM3.41455 11.25H8.91747V8.24809H3.41455V11.25ZM8.91747 6.74809V3.99622C8.91747 3.85815 8.80554 3.74622 8.66747 3.74622H3.66455C3.52648 3.74622 3.41455 3.85814 3.41455 3.99622V6.74809H8.91747Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.6665 15C16.6665 13.895 15.7715 13 14.6665 13C13.5615 13 12.6665 13.895 12.6665 15C12.6665 16.105 13.5615 17 14.6665 17V17C15.7715 17 16.6665 16.105 16.6665 15Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 4V13" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.6665 17V20" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M18.6665 9C18.6665 10.105 19.5615 11 20.6665 11C21.7715 11 22.6665 10.105 22.6665 9C22.6665 7.895 21.7715 7 20.6665 7V7C19.5615 7 18.6665 7.895 18.6665 9Z" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 20V11" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.6665 7V4" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66416 3.09497C2.61482 3.09497 1.76416 3.94563 1.76416 4.99497V9.99748V16V22.0025V27.005C1.76416 28.0543 2.61482 28.905 3.66416 28.905H11.0014C12.0507 28.905 12.9014 28.0543 12.9014 27.005V22.0025V16V9.99748V4.99497C12.9014 3.94563 12.0507 3.09497 11.0014 3.09497H3.66416ZM11.1014 21.1025V16.9H3.56416V21.1025H11.1014ZM3.56416 22.9025H11.1014V27.005C11.1014 27.0602 11.0566 27.105 11.0014 27.105H3.66416C3.60893 27.105 3.56416 27.0602 3.56416 27.005V22.9025ZM3.56416 15.1H11.1014V10.8975H3.56416V15.1ZM11.1014 9.09748V4.99497C11.1014 4.93974 11.0566 4.89497 11.0014 4.89497H3.66416C3.60893 4.89497 3.56416 4.93974 3.56416 4.99497V9.09748H11.1014Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 20C21.3333 18.5267 20.14 17.3334 18.6667 17.3334C17.1933 17.3334 16 18.5267 16 20C16 21.4734 17.1933 22.6667 18.6667 22.6667V22.6667C20.14 22.6667 21.3333 21.4734 21.3333 20Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 5.33337V17.3334" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 22.6666V26.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 13.4734 25.1933 14.6667 26.6667 14.6667C28.14 14.6667 29.3333 13.4734 29.3333 12C29.3333 10.5267 28.14 9.33337 26.6667 9.33337V9.33337C25.1933 9.33337 24 10.5267 24 12Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 26.6666V14.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 9.33337V5.33337" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66416 3.09497C2.61482 3.09497 1.76416 3.94563 1.76416 4.99497V9.99748V16V22.0025V27.005C1.76416 28.0543 2.61482 28.905 3.66416 28.905H11.0014C12.0507 28.905 12.9014 28.0543 12.9014 27.005V22.0025V16V9.99748V4.99497C12.9014 3.94563 12.0507 3.09497 11.0014 3.09497H3.66416ZM11.1014 21.1025V16.9H3.56416V21.1025H11.1014ZM3.56416 22.9025H11.1014V27.005C11.1014 27.0602 11.0566 27.105 11.0014 27.105H3.66416C3.60893 27.105 3.56416 27.0602 3.56416 27.005V22.9025ZM3.56416 15.1H11.1014V10.8975H3.56416V15.1ZM11.1014 9.09748V4.99497C11.1014 4.93974 11.0566 4.89497 11.0014 4.89497H3.66416C3.60893 4.89497 3.56416 4.93974 3.56416 4.99497V9.09748H11.1014Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 20C21.3333 18.5267 20.14 17.3334 18.6667 17.3334C17.1933 17.3334 16 18.5267 16 20C16 21.4734 17.1933 22.6667 18.6667 22.6667V22.6667C20.14 22.6667 21.3333 21.4734 21.3333 20Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 5.33337V17.3334" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 22.6666V26.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 13.4734 25.1933 14.6667 26.6667 14.6667C28.14 14.6667 29.3333 13.4734 29.3333 12C29.3333 10.5267 28.14 9.33337 26.6667 9.33337V9.33337C25.1933 9.33337 24 10.5267 24 12Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 26.6666V14.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 9.33337V5.33337" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66416 3.09497C2.61482 3.09497 1.76416 3.94563 1.76416 4.99497V9.99748V16V22.0025V27.005C1.76416 28.0543 2.61482 28.905 3.66416 28.905H11.0014C12.0507 28.905 12.9014 28.0543 12.9014 27.005V22.0025V16V9.99748V4.99497C12.9014 3.94563 12.0507 3.09497 11.0014 3.09497H3.66416ZM11.1014 21.1025V16.9H3.56416V21.1025H11.1014ZM3.56416 22.9025H11.1014V27.005C11.1014 27.0602 11.0566 27.105 11.0014 27.105H3.66416C3.60893 27.105 3.56416 27.0602 3.56416 27.005V22.9025ZM3.56416 15.1H11.1014V10.8975H3.56416V15.1ZM11.1014 9.09748V4.99497C11.1014 4.93974 11.0566 4.89497 11.0014 4.89497H3.66416C3.60893 4.89497 3.56416 4.93974 3.56416 4.99497V9.09748H11.1014Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 20C21.3333 18.5267 20.14 17.3334 18.6667 17.3334C17.1933 17.3334 16 18.5267 16 20C16 21.4734 17.1933 22.6667 18.6667 22.6667V22.6667C20.14 22.6667 21.3333 21.4734 21.3333 20Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 5.33337V17.3334" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 22.6666V26.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 13.4734 25.1933 14.6667 26.6667 14.6667C28.14 14.6667 29.3333 13.4734 29.3333 12C29.3333 10.5267 28.14 9.33337 26.6667 9.33337V9.33337C25.1933 9.33337 24 10.5267 24 12Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 26.6666V14.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 9.33337V5.33337" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="transparent-stroke solid-fill" fillRule="evenodd" clipRule="evenodd" d="M3.66416 3.09497C2.61482 3.09497 1.76416 3.94563 1.76416 4.99497V9.99748V16V22.0025V27.005C1.76416 28.0543 2.61482 28.905 3.66416 28.905H11.0014C12.0507 28.905 12.9014 28.0543 12.9014 27.005V22.0025V16V9.99748V4.99497C12.9014 3.94563 12.0507 3.09497 11.0014 3.09497H3.66416ZM11.1014 21.1025V16.9H3.56416V21.1025H11.1014ZM3.56416 22.9025H11.1014V27.005C11.1014 27.0602 11.0566 27.105 11.0014 27.105H3.66416C3.60893 27.105 3.56416 27.0602 3.56416 27.005V22.9025ZM3.56416 15.1H11.1014V10.8975H3.56416V15.1ZM11.1014 9.09748V4.99497C11.1014 4.93974 11.0566 4.89497 11.0014 4.89497H3.66416C3.60893 4.89497 3.56416 4.93974 3.56416 4.99497V9.09748H11.1014Z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 20C21.3333 18.5267 20.14 17.3334 18.6667 17.3334C17.1933 17.3334 16 18.5267 16 20C16 21.4734 17.1933 22.6667 18.6667 22.6667V22.6667C20.14 22.6667 21.3333 21.4734 21.3333 20Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 5.33337V17.3334" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.6667 22.6666V26.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 12C24 13.4734 25.1933 14.6667 26.6667 14.6667C28.14 14.6667 29.3333 13.4734 29.3333 12C29.3333 10.5267 28.14 9.33337 26.6667 9.33337V9.33337C25.1933 9.33337 24 10.5267 24 12Z" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 26.6666V14.6666" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M26.6667 9.33337V5.33337" stroke="#172C55" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconColumnSettings: FC<IIconSize> = ({ size = 24 }) => IconSize[size];