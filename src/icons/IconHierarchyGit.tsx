import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="4.33533" cy="3.66809" rx="1.66736" ry="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="11.6718" cy="3.66809" r="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="4.33533" cy="12.3385" rx="1.66736" ry="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.33494 5.33545V10.671" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.33496 10.671V9.33712C4.33496 8.41626 5.08146 7.66976 6.00232 7.66976H10.004C10.4462 7.66976 10.8703 7.49409 11.183 7.1814C11.4957 6.86871 11.6713 6.44461 11.6713 6.00239V5.33545" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="4.33533" cy="3.66809" rx="1.66736" ry="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="11.6718" cy="3.66809" r="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="4.33533" cy="12.3385" rx="1.66736" ry="1.66736" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.33494 5.33545V10.671" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.33496 10.671V9.33712C4.33496 8.41626 5.08146 7.66976 6.00232 7.66976H10.004C10.4462 7.66976 10.8703 7.49409 11.183 7.1814C11.4957 6.86871 11.6713 6.44461 11.6713 6.00239V5.33545" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="5.41916" cy="4.58518" rx="2.0842" ry="2.0842" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="14.5896" cy="4.58518" rx="2.0842" ry="2.0842" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="5.41916" cy="15.4231" rx="2.0842" ry="2.0842" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.41879 6.66943V13.3389" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.41895 13.3389V11.6715C5.41895 10.5204 6.35207 9.58732 7.50315 9.58732H12.5052C13.058 9.58732 13.5881 9.36773 13.979 8.97687C14.3698 8.586 14.5894 8.05588 14.5894 7.50311V6.66943" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="solid-fill transparent-stroke" cx="6.50251" cy="5.50226" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="17.5074" cy="5.50226" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="6.50251" cy="18.5076" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.50265 8.00342V16.0068" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.50293 16.0068V14.0059C6.50293 12.6246 7.62268 11.5049 9.00397 11.5049H15.0065C15.6698 11.5049 16.3059 11.2414 16.775 10.7723C17.244 10.3033 17.5075 9.66715 17.5075 9.00383V8.00342" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle className="solid-fill transparent-stroke" cx="6.50251" cy="5.50226" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="17.5074" cy="5.50226" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle className="solid-fill transparent-stroke" cx="6.50251" cy="18.5076" r="2.50104" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.50265 8.00342V16.0068" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.50293 16.0068V14.0059C6.50293 12.6246 7.62268 11.5049 9.00397 11.5049H15.0065C15.6698 11.5049 16.3059 11.2414 16.775 10.7723C17.244 10.3033 17.5075 9.66715 17.5075 9.00383V8.00342" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="23.343" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="24.677" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67036 10.6711V21.3423" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67041 21.3423V18.6745C8.67041 16.8328 10.1634 15.3398 12.0051 15.3398H20.0085C20.8929 15.3398 21.7411 14.9884 22.3665 14.363C22.9919 13.7377 23.3432 12.8895 23.3432 12.005V10.6711" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="23.343" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="24.677" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67036 10.6711V21.3423" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67041 21.3423V18.6745C8.67041 16.8328 10.1634 15.3398 12.0051 15.3398H20.0085C20.8929 15.3398 21.7411 14.9884 22.3665 14.363C22.9919 13.7377 23.3432 12.8895 23.3432 12.005V10.6711" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="23.343" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="24.677" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67036 10.6711V21.3423" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67041 21.3423V18.6745C8.67041 16.8328 10.1634 15.3398 12.0051 15.3398H20.0085C20.8929 15.3398 21.7411 14.9884 22.3665 14.363C22.9919 13.7377 23.3432 12.8895 23.3432 12.005V10.6711" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="23.343" cy="7.33643" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <ellipse className="solid-fill transparent-stroke" cx="8.67017" cy="24.677" rx="3.33472" ry="3.33472" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67036 10.6711V21.3423" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.67041 21.3423V18.6745C8.67041 16.8328 10.1634 15.3398 12.0051 15.3398H20.0085C20.8929 15.3398 21.7411 14.9884 22.3665 14.363C22.9919 13.7377 23.3432 12.8895 23.3432 12.005V10.6711" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconHierarchyGit: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
