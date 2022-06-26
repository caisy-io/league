import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6717 14.0026H4.33535C3.98155 14.0026 3.64222 13.8622 3.39204 13.612C3.14187 13.3618 3.00146 13.0225 3.00146 12.6687V3.33145C3.00146 2.97765 3.14187 2.63831 3.39204 2.38814C3.64222 2.13796 3.98155 1.99756 4.33535 1.99756H11.6717C12.0255 1.99756 12.3649 2.13796 12.6151 2.38814C12.8652 2.63831 13.0056 2.97765 13.0056 3.33145V12.6687C13.0056 13.0225 12.8652 13.3618 12.6151 13.612C12.3649 13.8622 12.0255 14.0026 11.6717 14.0026Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.03056 3.91466C8.00849 3.91458 7.9873 3.92336 7.97176 3.93903C7.95621 3.9547 7.9476 3.97595 7.94786 3.99802C7.94786 4.0318 7.96825 4.06224 7.99948 4.07511C8.03071 4.08797 8.06662 4.08072 8.09041 4.05673C8.1142 4.03275 8.12117 3.99679 8.10806 3.96566C8.09494 3.93453 8.06434 3.91439 8.03056 3.91466"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.33545 6.66599H10.671" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.67017 10.6675H5.33545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33545 8.66697H10.671" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.6717 14.0026H4.33535C3.98155 14.0026 3.64222 13.8622 3.39204 13.612C3.14187 13.3618 3.00146 13.0225 3.00146 12.6687V3.33145C3.00146 2.97765 3.14187 2.63831 3.39204 2.38814C3.64222 2.13796 3.98155 1.99756 4.33535 1.99756H11.6717C12.0255 1.99756 12.3649 2.13796 12.6151 2.38814C12.8652 2.63831 13.0056 2.97765 13.0056 3.33145V12.6687C13.0056 13.0225 12.8652 13.3618 12.6151 13.612C12.3649 13.8622 12.0255 14.0026 11.6717 14.0026Z"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.03056 3.91466C8.00849 3.91458 7.9873 3.92336 7.97176 3.93903C7.95621 3.9547 7.9476 3.97595 7.94786 3.99802C7.94786 4.0318 7.96825 4.06224 7.99948 4.07511C8.03071 4.08797 8.06662 4.08072 8.09041 4.05673C8.1142 4.03275 8.12117 3.99679 8.10806 3.96566C8.09494 3.93453 8.06434 3.91439 8.03056 3.91466"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M5.33545 6.66599H10.671" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.67017 10.6675H5.33545" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.33545 8.66697H10.671" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9228 17.5028H5.75232C5.31007 17.5028 4.8859 17.3273 4.57319 17.0146C4.26047 16.7019 4.08496 16.2777 4.08496 15.8355V4.16394C4.08496 3.72169 4.26047 3.29752 4.57319 2.98481C4.8859 2.67209 5.31007 2.49658 5.75232 2.49658H14.9228C15.3651 2.49658 15.7892 2.67209 16.1019 2.98481C16.4147 3.29752 16.5902 3.72169 16.5902 4.16394V15.8355C16.5902 16.2777 16.4147 16.7019 16.1019 17.0146C15.7892 17.3273 15.3651 17.5028 14.9228 17.5028Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.3721 4.89369C10.3445 4.89359 10.318 4.90456 10.2986 4.92415C10.2791 4.94374 10.2684 4.97031 10.2687 4.9979C10.2687 5.04012 10.2942 5.07817 10.3332 5.09425C10.3723 5.11033 10.4171 5.10126 10.4469 5.07128C10.4766 5.04131 10.4853 4.99635 10.4689 4.95744C10.4525 4.91852 10.4143 4.89335 10.3721 4.89369"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.00293 8.33237H13.6724" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.1713 13.3343H7.00293" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.00293 10.8333H13.6724" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1739 21.0041H7.16929C6.63859 21.0041 6.12959 20.7935 5.75433 20.4182C5.37907 20.043 5.16846 19.5339 5.16846 19.0032V4.99742C5.16846 4.46672 5.37907 3.95771 5.75433 3.58245C6.12959 3.20719 6.63859 2.99658 7.16929 2.99658H18.1739C18.7046 2.99658 19.2136 3.20719 19.5888 3.58245C19.9641 3.95771 20.1747 4.46672 20.1747 4.99742V19.0032C20.1747 19.5339 19.9641 20.043 19.5888 20.4182C19.2136 20.7935 18.7046 21.0041 18.1739 21.0041Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7126 5.87272C12.6795 5.8726 12.6477 5.88577 12.6244 5.90927C12.6011 5.93278 12.5882 5.96466 12.5885 5.99777C12.5885 6.04844 12.6191 6.0941 12.666 6.11339C12.7128 6.13269 12.7667 6.12181 12.8024 6.08583C12.8381 6.04986 12.8485 5.99591 12.8288 5.94922C12.8092 5.90252 12.7633 5.87231 12.7126 5.87272"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.66992 9.99923H16.6733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.672 16.0017H8.66992" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.66992 13.0007H16.6733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1739 21.0041H7.16929C6.63859 21.0041 6.12959 20.7935 5.75433 20.4182C5.37907 20.043 5.16846 19.5339 5.16846 19.0032V4.99742C5.16846 4.46672 5.37907 3.95771 5.75433 3.58245C6.12959 3.20719 6.63859 2.99658 7.16929 2.99658H18.1739C18.7046 2.99658 19.2136 3.20719 19.5888 3.58245C19.9641 3.95771 20.1747 4.46672 20.1747 4.99742V19.0032C20.1747 19.5339 19.9641 20.043 19.5888 20.4182C19.2136 20.7935 18.7046 21.0041 18.1739 21.0041Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.7126 5.87272C12.6795 5.8726 12.6477 5.88577 12.6244 5.90927C12.6011 5.93278 12.5882 5.96466 12.5885 5.99777C12.5885 6.04844 12.6191 6.0941 12.666 6.11339C12.7128 6.13269 12.7667 6.12181 12.8024 6.08583C12.8381 6.04986 12.8485 5.99591 12.8288 5.94922C12.8092 5.90252 12.7633 5.87231 12.7126 5.87272"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8.66992 9.99923H16.6733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.672 16.0017H8.66992" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.66992 13.0007H16.6733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3396 28.0115H8.6668C7.9592 28.0115 7.28053 27.7307 6.78018 27.2303C6.27984 26.73 5.99902 26.0513 5.99902 25.3437V6.66924C5.99902 5.96164 6.27984 5.28297 6.78018 4.78262C7.28053 4.28228 7.9592 4.00146 8.6668 4.00146H23.3396C24.0472 4.00146 24.7259 4.28228 25.2262 4.78262C25.7265 5.28297 26.0074 5.96164 26.0074 6.66924V25.3437C26.0074 26.0513 25.7265 26.73 25.2262 27.2303C24.7259 27.7307 24.0472 28.0115 23.3396 28.0115Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0577 7.83664C16.0136 7.83648 15.9712 7.85404 15.9401 7.88538C15.909 7.91672 15.8918 7.95923 15.8923 8.00337C15.8923 8.07093 15.9331 8.13181 15.9955 8.15754C16.058 8.18327 16.1298 8.16876 16.1774 8.12079C16.225 8.07283 16.2389 8.0009 16.2127 7.93864C16.1865 7.87638 16.1253 7.8361 16.0577 7.83664"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6675 13.3388H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3369 21.3422H10.6675" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6675 17.3408H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3396 28.0115H8.6668C7.9592 28.0115 7.28053 27.7307 6.78018 27.2303C6.27984 26.73 5.99902 26.0513 5.99902 25.3437V6.66924C5.99902 5.96164 6.27984 5.28297 6.78018 4.78262C7.28053 4.28228 7.9592 4.00146 8.6668 4.00146H23.3396C24.0472 4.00146 24.7259 4.28228 25.2262 4.78262C25.7265 5.28297 26.0074 5.96164 26.0074 6.66924V25.3437C26.0074 26.0513 25.7265 26.73 25.2262 27.2303C24.7259 27.7307 24.0472 28.0115 23.3396 28.0115Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0577 7.83664C16.0136 7.83648 15.9712 7.85404 15.9401 7.88538C15.909 7.91672 15.8918 7.95923 15.8923 8.00337C15.8923 8.07093 15.9331 8.13181 15.9955 8.15754C16.058 8.18327 16.1298 8.16876 16.1774 8.12079C16.225 8.07283 16.2389 8.0009 16.2127 7.93864C16.1865 7.87638 16.1253 7.8361 16.0577 7.83664"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6675 13.3388H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3369 21.3422H10.6675" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6675 17.3408H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3396 28.0115H8.6668C7.9592 28.0115 7.28053 27.7307 6.78018 27.2303C6.27984 26.73 5.99902 26.0513 5.99902 25.3437V6.66924C5.99902 5.96164 6.27984 5.28297 6.78018 4.78262C7.28053 4.28228 7.9592 4.00146 8.6668 4.00146H23.3396C24.0472 4.00146 24.7259 4.28228 25.2262 4.78262C25.7265 5.28297 26.0074 5.96164 26.0074 6.66924V25.3437C26.0074 26.0513 25.7265 26.73 25.2262 27.2303C24.7259 27.7307 24.0472 28.0115 23.3396 28.0115Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0577 7.83664C16.0136 7.83648 15.9712 7.85404 15.9401 7.88538C15.909 7.91672 15.8918 7.95923 15.8923 8.00337C15.8923 8.07093 15.9331 8.13181 15.9955 8.15754C16.058 8.18327 16.1298 8.16876 16.1774 8.12079C16.225 8.07283 16.2389 8.0009 16.2127 7.93864C16.1865 7.87638 16.1253 7.8361 16.0577 7.83664"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6675 13.3388H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3369 21.3422H10.6675" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6675 17.3408H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.3396 28.0115H8.6668C7.9592 28.0115 7.28053 27.7307 6.78018 27.2303C6.27984 26.73 5.99902 26.0513 5.99902 25.3437V6.66924C5.99902 5.96164 6.27984 5.28297 6.78018 4.78262C7.28053 4.28228 7.9592 4.00146 8.6668 4.00146H23.3396C24.0472 4.00146 24.7259 4.28228 25.2262 4.78262C25.7265 5.28297 26.0074 5.96164 26.0074 6.66924V25.3437C26.0074 26.0513 25.7265 26.73 25.2262 27.2303C24.7259 27.7307 24.0472 28.0115 23.3396 28.0115Z"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0577 7.83664C16.0136 7.83648 15.9712 7.85404 15.9401 7.88538C15.909 7.91672 15.8918 7.95923 15.8923 8.00337C15.8923 8.07093 15.9331 8.13181 15.9955 8.15754C16.058 8.18327 16.1298 8.16876 16.1774 8.12079C16.225 8.07283 16.2389 8.0009 16.2127 7.93864C16.1865 7.87638 16.1253 7.8361 16.0577 7.83664"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10.6675 13.3388H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.3369 21.3422H10.6675" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6675 17.3408H21.3386" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </SIconBase>
  ),
};

export const IconOrganizationSettingsDetails: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
