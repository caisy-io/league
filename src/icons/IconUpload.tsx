import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M15.1764 6.5422L14.0004 4.50541C13.8445 4.23532 13.5875 4.038 13.2865 3.95733L9.21259 2.86574C8.58492 2.69756 7.94032 3.06972 7.77214 3.69739L5.64131 11.6497C5.47313 12.2774 5.84529 12.922 6.47296 13.0902L12.1532 14.6122C12.7809 14.7804 13.4255 14.4082 13.5936 13.7805L15.294 7.43458C15.3747 7.13353 15.3323 6.81229 15.1764 6.5422Z" fill="#172C55"/>
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.512818 6.5422L1.68876 4.50541C1.8447 4.23532 2.10171 4.038 2.40276 3.95733L6.47662 2.86574C7.10429 2.69756 7.74889 3.06972 7.91707 3.69739L10.0479 11.6497C10.2161 12.2774 9.84392 12.922 9.21625 13.0902L3.53601 14.6122C2.90835 14.7804 2.26375 14.4082 2.09556 13.7805L0.395169 7.43458C0.314502 7.13353 0.356884 6.81229 0.512818 6.5422Z" fill="#172C55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M12.276 4.276L10.3907 2.39067C10.1407 2.14067 9.80137 2 9.44804 2H4.66671C3.93004 2 3.33337 2.59667 3.33337 3.33333V12.6667C3.33337 13.4033 3.93004 14 4.66671 14H11.3334C12.07 14 12.6667 13.4033 12.6667 12.6667V5.21867C12.6667 4.86533 12.526 4.526 12.276 4.276Z" fill="#172C55" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" fillRule="evenodd" clipRule="evenodd" d="M12.6667 5.33333H10C9.63204 5.33333 9.33337 5.03467 9.33337 4.66667V2" fill="#F7F9FA"/>
        <path d="M12.6667 5.33333H10C9.63204 5.33333 9.33337 5.03467 9.33337 4.66667V2" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M7.9974 11.5974L7.9974 7.60269" stroke="#F7F9FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M9.59399 9.19818L8.00013 7.60458L6.40626 9.19818" stroke="#F7F9FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M18.9705 8.17774L17.5006 5.63174C17.3057 5.29414 16.9844 5.04748 16.6081 4.94665L11.5158 3.58216C10.7312 3.37194 9.92543 3.83714 9.7152 4.62172L7.05167 14.5621C6.84145 15.3467 7.30665 16.1525 8.09123 16.3627L15.1915 18.2652C15.9761 18.4754 16.7819 18.0102 16.9921 17.2257L19.1176 9.29321C19.2184 8.91689 19.1654 8.51534 18.9705 8.17774Z" fill="#172C55"/>
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.641053 8.17774L2.11098 5.63174C2.3059 5.29414 2.62716 5.04748 3.00348 4.94665L8.09581 3.58216C8.88039 3.37194 9.68614 3.83714 9.89637 4.62172L12.5599 14.5621C12.7701 15.3467 12.3049 16.1525 11.5203 16.3627L4.42005 18.2652C3.63547 18.4754 2.82971 18.0102 2.61949 17.2257L0.493992 9.29321C0.393159 8.91689 0.446136 8.51534 0.641053 8.17774Z" fill="#172C55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M15.345 5.345L12.9883 2.98833C12.6758 2.67583 12.2516 2.5 11.81 2.5H5.83329C4.91246 2.5 4.16663 3.24583 4.16663 4.16667V15.8333C4.16663 16.7542 4.91246 17.5 5.83329 17.5H14.1666C15.0875 17.5 15.8333 16.7542 15.8333 15.8333V6.52333C15.8333 6.08167 15.6575 5.6575 15.345 5.345Z" fill="#172C55" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" fillRule="evenodd" clipRule="evenodd" d="M15.8333 6.66667H12.5C12.04 6.66667 11.6666 6.29333 11.6666 5.83333V2.5" fill="#F7F9FA"/>
        <path d="M15.8333 6.66667H12.5C12.04 6.66667 11.6666 6.29333 11.6666 5.83333V2.5" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M9.99679 14.4967L9.99679 9.50337" stroke="#F7F9FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M11.9924 11.4977L10.0001 9.50574L8.00777 11.4977" stroke="#F7F9FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M22.7647 9.81327L21.0007 6.75808C20.7668 6.35295 20.3813 6.05697 19.9297 5.93597L13.8189 4.29858C12.8774 4.04631 11.9105 4.60455 11.6583 5.54605L8.46203 17.4745C8.20976 18.416 8.768 19.3829 9.7095 19.6352L18.2299 21.9182C19.1714 22.1705 20.1383 21.6123 20.3905 20.6708L22.9411 11.1518C23.0621 10.7003 22.9986 10.2184 22.7647 9.81327Z" fill="#172C55"/>
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M0.769166 9.81327L2.53308 6.75808C2.76698 6.35295 3.1525 6.05697 3.60408 5.93597L9.71487 4.29858C10.6564 4.04631 11.6233 4.60455 11.8755 5.54605L15.0718 17.4745C15.3241 18.416 14.7658 19.3829 13.8243 19.6352L5.30396 21.9182C4.36246 22.1705 3.39556 21.6123 3.14328 20.6708L0.592692 11.1518C0.471692 10.7003 0.535265 10.2184 0.769166 9.81327Z" fill="#172C55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.414 6.414L15.586 3.586C15.211 3.211 14.702 3 14.172 3H7C5.895 3 5 3.895 5 5V19C5 20.105 5.895 21 7 21H17C18.105 21 19 20.105 19 19V7.828C19 7.298 18.789 6.789 18.414 6.414Z" fill="#172C55" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" fillRule="evenodd" clipRule="evenodd" d="M19 8H15C14.448 8 14 7.552 14 7V3" fill="#F7F9FA"/>
        <path d="M19 8H15C14.448 8 14 7.552 14 7V3" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M11.996 17.3961L11.996 11.4041" stroke="#F7F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M14.3909 13.7972L12.0001 11.4068L9.60927 13.7972" stroke="#F7F9FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,

  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M30.3528 13.0844L28.0009 9.01081C27.689 8.47065 27.175 8.076 26.5729 7.91466L18.4252 5.73149C17.1698 5.39512 15.8806 6.13944 15.5443 7.39478L11.2826 23.2994C10.9463 24.5548 11.6906 25.844 12.9459 26.1803L24.3064 29.2244C25.5617 29.5607 26.8509 28.8164 27.1873 27.5611L30.5881 14.8692C30.7494 14.2671 30.6647 13.6246 30.3528 13.0844Z" fill="#172C55"/>
        <path opacity="0.1" fillRule="evenodd" clipRule="evenodd" d="M1.02563 13.0844L3.37753 9.01081C3.68939 8.47065 4.20341 8.076 4.80552 7.91466L12.9532 5.73149C14.2086 5.39512 15.4978 6.13944 15.8341 7.39478L20.0958 23.2994C20.4322 24.5548 19.6878 25.844 18.4325 26.1803L7.07203 29.2244C5.8167 29.5607 4.52749 28.8164 4.19113 27.5611L0.790338 14.8692C0.629004 14.2671 0.713769 13.6246 1.02563 13.0844Z" fill="#172C55"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M24.5521 8.552L20.7814 4.78133C20.2814 4.28133 19.6028 4 18.8961 4H9.33342C7.86008 4 6.66675 5.19333 6.66675 6.66667V25.3333C6.66675 26.8067 7.86008 28 9.33342 28H22.6668C24.1401 28 25.3334 26.8067 25.3334 25.3333V10.4373C25.3334 9.73067 25.0521 9.052 24.5521 8.552Z" fill="#172C55" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" fillRule="evenodd" clipRule="evenodd" d="M25.3334 10.6667H20.0001C19.2641 10.6667 18.6667 10.0693 18.6667 9.33333V4" fill="#F7F9FA"/>
        <path d="M25.3334 10.6667H20.0001C19.2641 10.6667 18.6667 10.0693 18.6667 9.33333V4" stroke="#172C55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M15.9948 23.1947L15.9948 15.2054" stroke="#F7F9FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path className="overwrite" d="M19.188 18.3963L16.0003 15.2091L12.8125 18.3963" stroke="#F7F9FA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  }

export const IconUpload: FC<IIconSize> = ({ size= 24 }) => IconSize[size];