import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 13.3332V10.9165C2.6665 10.7378 2.73717 10.5665 2.86384 10.4398L10.0792 3.22452C10.8238 2.47985 12.0305 2.47985 12.7745 3.22452V3.22452C13.5192 3.96918 13.5192 5.17585 12.7745 5.91985L5.55917 13.1358C5.43317 13.2625 5.26184 13.3332 5.08317 13.3332H2.6665Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9997 9.66667L6.33301 5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M2.6665 13.3332V10.9165C2.6665 10.7378 2.73717 10.5665 2.86384 10.4398L10.0792 3.22452C10.8238 2.47985 12.0305 2.47985 12.7745 3.22452V3.22452C13.5192 3.96918 13.5192 5.17585 12.7745 5.91985L5.55917 13.1358C5.43317 13.2625 5.26184 13.3332 5.08317 13.3332H2.6665Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9997 9.66667L6.33301 5" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M3.3335 16.6665V13.6456C3.3335 13.4223 3.42183 13.2081 3.58016 13.0498L12.5993 4.03064C13.5302 3.09981 15.0385 3.09981 15.9685 4.03064V4.03064C16.8993 4.96148 16.8993 6.46981 15.9685 7.39981L6.94933 16.4198C6.79183 16.5781 6.57766 16.6665 6.35433 16.6665H3.3335Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M13.7503 12.0833L7.91699 6.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19.9998V16.3748C4 16.1068 4.106 15.8498 4.296 15.6598L15.119 4.83677C16.236 3.71977 18.046 3.71977 19.162 4.83677V4.83677C20.279 5.95377 20.279 7.76377 19.162 8.87977L8.339 19.7038C8.15 19.8938 7.893 19.9998 7.625 19.9998H4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 14.5L9.5 7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19.9998V16.3748C4 16.1068 4.106 15.8498 4.296 15.6598L15.119 4.83677C16.236 3.71977 18.046 3.71977 19.162 4.83677V4.83677C20.279 5.95377 20.279 7.76377 19.162 8.87977L8.339 19.7038C8.15 19.8938 7.893 19.9998 7.625 19.9998H4Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.5 14.5L9.5 7.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 26.6669V21.8335C5.3335 21.4762 5.47483 21.1335 5.72816 20.8802L20.1588 6.44952C21.6482 4.96019 24.0615 4.96019 25.5495 6.44952V6.44952C27.0388 7.93885 27.0388 10.3522 25.5495 11.8402L11.1188 26.2722C10.8668 26.5255 10.5242 26.6669 10.1668 26.6669H5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0003 19.3333L12.667 10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 26.6669V21.8335C5.3335 21.4762 5.47483 21.1335 5.72816 20.8802L20.1588 6.44952C21.6482 4.96019 24.0615 4.96019 25.5495 6.44952V6.44952C27.0388 7.93885 27.0388 10.3522 25.5495 11.8402L11.1188 26.2722C10.8668 26.5255 10.5242 26.6669 10.1668 26.6669H5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0003 19.3333L12.667 10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 26.6669V21.8335C5.3335 21.4762 5.47483 21.1335 5.72816 20.8802L20.1588 6.44952C21.6482 4.96019 24.0615 4.96019 25.5495 6.44952V6.44952C27.0388 7.93885 27.0388 10.3522 25.5495 11.8402L11.1188 26.2722C10.8668 26.5255 10.5242 26.6669 10.1668 26.6669H5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0003 19.3333L12.667 10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M5.3335 26.6669V21.8335C5.3335 21.4762 5.47483 21.1335 5.72816 20.8802L20.1588 6.44952C21.6482 4.96019 24.0615 4.96019 25.5495 6.44952V6.44952C27.0388 7.93885 27.0388 10.3522 25.5495 11.8402L11.1188 26.2722C10.8668 26.5255 10.5242 26.6669 10.1668 26.6669H5.3335Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22.0003 19.3333L12.667 10" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconColorPicker: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
