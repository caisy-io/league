import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.87273 9.06184L7.79053 8.22816V5.26025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.99756 3.66479V5.66563H3.99839" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.03662 8.66699C2.37595 11.6632 4.88803 13.9411 7.90307 13.9865C10.9181 14.0319 13.4977 11.8308 13.9271 8.84612C14.3565 5.86148 12.5022 3.02235 9.59665 2.21591C6.69111 1.40946 3.63874 2.88672 2.46845 5.66574" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.87273 9.06184L7.79053 8.22816V5.26025" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.99756 3.66479V5.66563H3.99839" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.03662 8.66699C2.37595 11.6632 4.88803 13.9411 7.90307 13.9865C10.9181 14.0319 13.4977 11.8308 13.9271 8.84612C14.3565 5.86148 12.5022 3.02235 9.59665 2.21591C6.69111 1.40946 3.63874 2.88672 2.46845 5.66574" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.341 11.3272L9.73828 10.2851V6.5752" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.49707 4.58105V7.0821H4.99811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5459 10.8336C2.97006 14.5789 6.11016 17.4262 9.87895 17.483C13.6478 17.5398 16.8722 14.7883 17.409 11.0575C17.9458 7.32672 15.6279 3.77781 11.9959 2.76976C8.364 1.76171 4.54854 3.60827 3.08568 7.08205" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8093 13.5928L12.686 12.3422V7.89038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99609 5.49731V8.49856H6.99734" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.05518 13.0005C4.56417 17.4948 8.33228 20.9116 12.8548 20.9798C17.3774 21.0479 21.2467 17.7462 21.8909 13.2692C22.535 8.79222 19.7535 4.53352 15.3952 3.32386C11.0369 2.11419 6.45835 4.33007 4.70292 8.4986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8093 13.5928L12.686 12.3422V7.89038" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99609 5.49731V8.49856H6.99734" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.05518 13.0005C4.56417 17.4948 8.33228 20.9116 12.8548 20.9798C17.3774 21.0479 21.2467 17.7462 21.8909 13.2692C22.535 8.79222 19.7535 4.53352 15.3952 3.32386C11.0369 2.11419 6.45835 4.33007 4.70292 8.4986" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7455 18.1237L15.5811 16.4563V10.5205" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 7.32983V11.3315H7.99678" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.07324 17.334C4.75191 23.3264 9.77605 27.8822 15.8061 27.973C21.8362 28.0639 26.9953 23.6615 27.8542 17.6922C28.7131 11.723 25.0044 6.0447 19.1933 4.43181C13.3822 2.81892 7.27747 5.77343 4.9369 11.3315" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7455 18.1237L15.5811 16.4563V10.5205" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 7.32983V11.3315H7.99678" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.07324 17.334C4.75191 23.3264 9.77605 27.8822 15.8061 27.973C21.8362 28.0639 26.9953 23.6615 27.8542 17.6922C28.7131 11.723 25.0044 6.0447 19.1933 4.43181C13.3822 2.81892 7.27747 5.77343 4.9369 11.3315" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7455 18.1237L15.5811 16.4563V10.5205" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 7.32983V11.3315H7.99678" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.07324 17.334C4.75191 23.3264 9.77605 27.8822 15.8061 27.973C21.8362 28.0639 26.9953 23.6615 27.8542 17.6922C28.7131 11.723 25.0044 6.0447 19.1933 4.43181C13.3822 2.81892 7.27747 5.77343 4.9369 11.3315" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.7455 18.1237L15.5811 16.4563V10.5205" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.99512 7.32983V11.3315H7.99678" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4.07324 17.334C4.75191 23.3264 9.77605 27.8822 15.8061 27.973C21.8362 28.0639 26.9953 23.6615 27.8542 17.6922C28.7131 11.723 25.0044 6.0447 19.1933 4.43181C13.3822 2.81892 7.27747 5.77343 4.9369 11.3315" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconBackClock: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
