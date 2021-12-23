import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="4.33182" cy="11.6682" rx="3.00125" ry="3.00125" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66665 13.3356C8.09379 13.3346 7.524 13.2518 6.97461 13.0894" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66695 13.3355C11.2583 13.3404 13.5614 11.6848 14.3824 9.22688C15.2033 6.76896 14.3575 4.06157 12.2833 2.50816C10.2091 0.954745 7.37313 0.90469 5.24542 2.38394C3.11772 3.86319 2.17685 6.53905 2.91055 9.0244" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.262 7.59379H8.3335V3.99829" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.93199 10.6677C4.93199 10.3364 4.66336 10.0677 4.33199 10.0677C4.00062 10.0677 3.73199 10.3364 3.73199 10.6677V11.0681H3.33145C3.00007 11.0681 2.73145 11.3367 2.73145 11.6681C2.73145 11.9995 3.00007 12.2681 3.33145 12.2681H3.73199V12.6686C3.73199 13 4.00062 13.2686 4.33199 13.2686C4.66336 13.2686 4.93199 13 4.93199 12.6686V12.2681H5.33228C5.66365 12.2681 5.93228 11.9995 5.93228 11.6681C5.93228 11.3367 5.66365 11.0681 5.33228 11.0681H4.93199V10.6677Z"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="4.33182" cy="11.6682" rx="3.00125" ry="3.00125" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66665 13.3356C8.09379 13.3346 7.524 13.2518 6.97461 13.0894" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.66695 13.3355C11.2583 13.3404 13.5614 11.6848 14.3824 9.22688C15.2033 6.76896 14.3575 4.06157 12.2833 2.50816C10.2091 0.954745 7.37313 0.90469 5.24542 2.38394C3.11772 3.86319 2.17685 6.53905 2.91055 9.0244" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.262 7.59379H8.3335V3.99829" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M4.93199 10.6677C4.93199 10.3364 4.66336 10.0677 4.33199 10.0677C4.00062 10.0677 3.73199 10.3364 3.73199 10.6677V11.0681H3.33145C3.00007 11.0681 2.73145 11.3367 2.73145 11.6681C2.73145 11.9995 3.00007 12.2681 3.33145 12.2681H3.73199V12.6686C3.73199 13 4.00062 13.2686 4.33199 13.2686C4.66336 13.2686 4.93199 13 4.93199 12.6686V12.2681H5.33228C5.66365 12.2681 5.93228 11.9995 5.93228 11.6681C5.93228 11.3367 5.66365 11.0681 5.33228 11.0681H4.93199V10.6677Z"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="5.41465" cy="14.5853" rx="3.75156" ry="3.75156" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8338 16.6694C10.1177 16.6683 9.40549 16.5647 8.71875 16.3618" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.8337 16.6695C14.0729 16.6756 16.9518 14.6061 17.978 11.5337C19.0042 8.46126 17.9469 5.07702 15.3541 3.13526C12.7614 1.19349 9.21641 1.13092 6.55678 2.97998C3.89715 4.82904 2.72106 8.17387 3.63819 11.2806" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0777 9.4923H10.417V4.99792" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M6.16464 13.3347C6.16464 12.9205 5.82886 12.5847 5.41464 12.5847C5.00043 12.5847 4.66464 12.9205 4.66464 13.3347V13.8352H4.16406C3.74985 13.8352 3.41406 14.171 3.41406 14.5852C3.41406 14.9994 3.74985 15.3352 4.16406 15.3352H4.66464V15.8358C4.66464 16.25 5.00043 16.5858 5.41464 16.5858C5.82886 16.5858 6.16464 16.25 6.16464 15.8358V15.3352H6.6651C7.07932 15.3352 7.4151 14.9994 7.4151 14.5852C7.4151 14.171 7.07932 13.8352 6.6651 13.8352H6.16464V13.3347Z"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.49748" cy="17.5022" r="4.50187" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0005 20.0034C12.1412 20.002 11.2865 19.8777 10.4624 19.6342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0004 20.0033C16.8875 20.0106 20.3422 17.5272 21.5736 13.8403C22.805 10.1534 21.5362 6.09235 18.425 3.76223C15.3137 1.43212 11.0597 1.35704 7.86813 3.57591C4.67658 5.79478 3.26528 9.80857 4.36583 13.5366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8928 11.3908H12.5V5.99756" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7.24777 16.0017C7.24777 15.5875 6.91198 15.2517 6.49777 15.2517C6.08355 15.2517 5.74777 15.5875 5.74777 16.0017V16.7523H4.99707C4.58286 16.7523 4.24707 17.0881 4.24707 17.5023C4.24707 17.9165 4.58286 18.2523 4.99707 18.2523H5.74777V19.003C5.74777 19.4172 6.08355 19.753 6.49777 19.753C6.91198 19.753 7.24777 19.4172 7.24777 19.003V18.2523H7.99832C8.41253 18.2523 8.74832 17.9165 8.74832 17.5023C8.74832 17.0881 8.41253 16.7523 7.99832 16.7523H7.24777V16.0017Z"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6.49748" cy="17.5022" r="4.50187" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0005 20.0034C12.1412 20.002 11.2865 19.8777 10.4624 19.6342" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.0004 20.0033C16.8875 20.0106 20.3422 17.5272 21.5736 13.8403C22.805 10.1534 21.5362 6.09235 18.425 3.76223C15.3137 1.43212 11.0597 1.35704 7.86813 3.57591C4.67658 5.79478 3.26528 9.80857 4.36583 13.5366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.8928 11.3908H12.5V5.99756" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M7.24777 16.0017C7.24777 15.5875 6.91198 15.2517 6.49777 15.2517C6.08355 15.2517 5.74777 15.5875 5.74777 16.0017V16.7523H4.99707C4.58286 16.7523 4.24707 17.0881 4.24707 17.5023C4.24707 17.9165 4.58286 18.2523 4.99707 18.2523H5.74777V19.003C5.74777 19.4172 6.08355 19.753 6.49777 19.753C6.91198 19.753 7.24777 19.4172 7.24777 19.003V18.2523H7.99832C8.41253 18.2523 8.74832 17.9165 8.74832 17.5023C8.74832 17.0881 8.41253 16.7523 7.99832 16.7523H7.24777V16.0017Z"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8.66363" cy="23.3364" rx="6.0025" ry="6.0025" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3338 26.6711C16.1881 26.6692 15.0485 26.5035 13.9497 26.1789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3339 26.6711C22.5167 26.6809 27.1229 23.3696 28.7648 18.4538C30.4067 13.5379 28.715 8.12313 24.5666 5.01631C20.4183 1.90949 14.7463 1.80938 10.4908 4.76788C6.23544 7.72637 4.3537 13.0781 5.8211 18.0488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.5241 15.1877H16.667V7.9967" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.41353 21.3356C9.41353 20.9214 9.07774 20.5856 8.66353 20.5856C8.24931 20.5856 7.91353 20.9214 7.91353 21.3356V22.5863H6.6626C6.24838 22.5863 5.9126 22.9221 5.9126 23.3363C5.9126 23.7506 6.24838 24.0863 6.6626 24.0863H7.91353V25.3372C7.91353 25.7515 8.24931 26.0872 8.66353 26.0872C9.07774 26.0872 9.41353 25.7515 9.41353 25.3372V24.0863H10.6643C11.0785 24.0863 11.4143 23.7506 11.4143 23.3363C11.4143 22.9221 11.0785 22.5863 10.6643 22.5863H9.41353V21.3356Z"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8.66363" cy="23.3364" rx="6.0025" ry="6.0025" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3338 26.6711C16.1881 26.6692 15.0485 26.5035 13.9497 26.1789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3339 26.6711C22.5167 26.6809 27.1229 23.3696 28.7648 18.4538C30.4067 13.5379 28.715 8.12313 24.5666 5.01631C20.4183 1.90949 14.7463 1.80938 10.4908 4.76788C6.23544 7.72637 4.3537 13.0781 5.8211 18.0488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.5241 15.1877H16.667V7.9967" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.41353 21.3356C9.41353 20.9214 9.07774 20.5856 8.66353 20.5856C8.24931 20.5856 7.91353 20.9214 7.91353 21.3356V22.5863H6.6626C6.24838 22.5863 5.9126 22.9221 5.9126 23.3363C5.9126 23.7506 6.24838 24.0863 6.6626 24.0863H7.91353V25.3372C7.91353 25.7515 8.24931 26.0872 8.66353 26.0872C9.07774 26.0872 9.41353 25.7515 9.41353 25.3372V24.0863H10.6643C11.0785 24.0863 11.4143 23.7506 11.4143 23.3363C11.4143 22.9221 11.0785 22.5863 10.6643 22.5863H9.41353V21.3356Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8.66363" cy="23.3364" rx="6.0025" ry="6.0025" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3338 26.6711C16.1881 26.6692 15.0485 26.5035 13.9497 26.1789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3339 26.6711C22.5167 26.6809 27.1229 23.3696 28.7648 18.4538C30.4067 13.5379 28.715 8.12313 24.5666 5.01631C20.4183 1.90949 14.7463 1.80938 10.4908 4.76788C6.23544 7.72637 4.3537 13.0781 5.8211 18.0488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.5241 15.1877H16.667V7.9967" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.41353 21.3356C9.41353 20.9214 9.07774 20.5856 8.66353 20.5856C8.24931 20.5856 7.91353 20.9214 7.91353 21.3356V22.5863H6.6626C6.24838 22.5863 5.9126 22.9221 5.9126 23.3363C5.9126 23.7506 6.24838 24.0863 6.6626 24.0863H7.91353V25.3372C7.91353 25.7515 8.24931 26.0872 8.66353 26.0872C9.07774 26.0872 9.41353 25.7515 9.41353 25.3372V24.0863H10.6643C11.0785 24.0863 11.4143 23.7506 11.4143 23.3363C11.4143 22.9221 11.0785 22.5863 10.6643 22.5863H9.41353V21.3356Z"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="8.66363" cy="23.3364" rx="6.0025" ry="6.0025" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3338 26.6711C16.1881 26.6692 15.0485 26.5035 13.9497 26.1789" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.3339 26.6711C22.5167 26.6809 27.1229 23.3696 28.7648 18.4538C30.4067 13.5379 28.715 8.12313 24.5666 5.01631C20.4183 1.90949 14.7463 1.80938 10.4908 4.76788C6.23544 7.72637 4.3537 13.0781 5.8211 18.0488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.5241 15.1877H16.667V7.9967" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" fillRule="evenodd" clipRule="evenodd" d="M9.41353 21.3356C9.41353 20.9214 9.07774 20.5856 8.66353 20.5856C8.24931 20.5856 7.91353 20.9214 7.91353 21.3356V22.5863H6.6626C6.24838 22.5863 5.9126 22.9221 5.9126 23.3363C5.9126 23.7506 6.24838 24.0863 6.6626 24.0863H7.91353V25.3372C7.91353 25.7515 8.24931 26.0872 8.66353 26.0872C9.07774 26.0872 9.41353 25.7515 9.41353 25.3372V24.0863H10.6643C11.0785 24.0863 11.4143 23.7506 11.4143 23.3363C11.4143 22.9221 11.0785 22.5863 10.6643 22.5863H9.41353V21.3356Z"/>
    </SIconBase>
  ),
};

export const IconScheduleNewRelease: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
