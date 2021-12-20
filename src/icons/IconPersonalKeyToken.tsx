import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.27857 11.582V10.6393H7.45723L8.4579 9.63862L9.83923 10.2253C10.3399 10.438 10.9192 10.3253 11.3032 9.94062L13.2652 7.97862C13.6499 7.59395 13.7619 7.01462 13.5499 6.51462L12.5486 4.15729C12.4139 3.83929 12.1606 3.58662 11.8426 3.45129L9.48523 2.44995C8.98457 2.23729 8.4059 2.34995 8.02123 2.73462L6.05923 4.69662C5.67523 5.08062 5.56257 5.65995 5.77523 6.16062L6.34657 7.50662L2.33057 11.5226V13.644H4.4519L5.3359 12.76V11.5813H6.27857V11.582Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5838 5.92943C9.42447 5.9301 9.29513 6.05943 9.2958 6.21876C9.2958 6.3781 9.4258 6.50743 9.58513 6.50676C9.74447 6.50676 9.8738 6.37743 9.8738 6.2181C9.8738 6.05876 9.74447 5.92943 9.58513 5.92943" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.27857 11.582V10.6393H7.45723L8.4579 9.63862L9.83923 10.2253C10.3399 10.438 10.9192 10.3253 11.3032 9.94062L13.2652 7.97862C13.6499 7.59395 13.7619 7.01462 13.5499 6.51462L12.5486 4.15729C12.4139 3.83929 12.1606 3.58662 11.8426 3.45129L9.48523 2.44995C8.98457 2.23729 8.4059 2.34995 8.02123 2.73462L6.05923 4.69662C5.67523 5.08062 5.56257 5.65995 5.77523 6.16062L6.34657 7.50662L2.33057 11.5226V13.644H4.4519L5.3359 12.76V11.5813H6.27857V11.582Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5838 5.92943C9.42447 5.9301 9.29513 6.05943 9.2958 6.21876C9.2958 6.3781 9.4258 6.50743 9.58513 6.50676C9.74447 6.50676 9.8738 6.37743 9.8738 6.2181C9.8738 6.05876 9.74447 5.92943 9.58513 5.92943" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M8.18207 14.4774V13.2991H9.6554L10.9062 12.0483L12.6329 12.7816C13.2587 13.0474 13.9829 12.9066 14.4629 12.4258L16.9154 9.97328C17.3962 9.49244 17.5362 8.76828 17.2712 8.14328L16.0196 5.19661C15.8512 4.79911 15.5346 4.48328 15.1371 4.31411L12.1904 3.06244C11.5646 2.79661 10.8412 2.93744 10.3604 3.41828L7.9079 5.87078C7.4279 6.35078 7.28707 7.07494 7.5529 7.70078L8.26707 9.38328L3.24707 14.4033V17.0549H5.89874L7.00374 15.9499V14.4766H8.18207V14.4774Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.3139 7.41179C12.1147 7.41262 11.953 7.57429 11.9539 7.77346C11.9539 7.97262 12.1164 8.13429 12.3155 8.13345C12.5147 8.13345 12.6764 7.97179 12.6764 7.77262C12.6764 7.57346 12.5147 7.41179 12.3155 7.41179" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0846 17.3729V15.9589H11.8526L13.3536 14.4579L15.4256 15.3379C16.1766 15.6569 17.0456 15.4879 17.6216 14.9109L20.5646 11.9679C21.1416 11.3909 21.3096 10.5219 20.9916 9.77193L19.4896 6.23593C19.2876 5.75893 18.9076 5.37993 18.4306 5.17693L14.8946 3.67493C14.1436 3.35593 13.2756 3.52493 12.6986 4.10193L9.7556 7.04493C9.1796 7.62093 9.0106 8.48993 9.3296 9.24093L10.1866 11.2599L4.1626 17.2839V20.4659H7.3446L8.6706 19.1399V17.3719H10.0846V17.3729Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0424 8.89415C14.8034 8.89515 14.6094 9.08915 14.6104 9.32815C14.6104 9.56715 14.8054 9.76115 15.0444 9.76015C15.2834 9.76015 15.4774 9.56615 15.4774 9.32715C15.4774 9.08815 15.2834 8.89415 15.0444 8.89415" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M10.0846 17.3729V15.9589H11.8526L13.3536 14.4579L15.4256 15.3379C16.1766 15.6569 17.0456 15.4879 17.6216 14.9109L20.5646 11.9679C21.1416 11.3909 21.3096 10.5219 20.9916 9.77193L19.4896 6.23593C19.2876 5.75893 18.9076 5.37993 18.4306 5.17693L14.8946 3.67493C14.1436 3.35593 13.2756 3.52493 12.6986 4.10193L9.7556 7.04493C9.1796 7.62093 9.0106 8.48993 9.3296 9.24093L10.1866 11.2599L4.1626 17.2839V20.4659H7.3446L8.6706 19.1399V17.3719H10.0846V17.3729Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.0424 8.89415C14.8034 8.89515 14.6094 9.08915 14.6104 9.32815C14.6104 9.56715 14.8054 9.76115 15.0444 9.76015C15.2834 9.76015 15.4774 9.56615 15.4774 9.32715C15.4774 9.08815 15.2834 8.89415 15.0444 8.89415" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5571 23.1639V21.2786H14.9145L16.9158 19.2772L19.6785 20.4506C20.6798 20.8759 21.8385 20.6506 22.6065 19.8812L26.5305 15.9572C27.2998 15.1879 27.5238 14.0292 27.0998 13.0292L25.0971 8.31458C24.8278 7.67858 24.3211 7.17324 23.6851 6.90258L18.9705 4.89991C17.9691 4.47458 16.8118 4.69991 16.0425 5.46924L12.1185 9.39324C11.3505 10.1612 11.1251 11.3199 11.5505 12.3212L12.6931 15.0132L4.66113 23.0452V27.2879H8.9038L10.6718 25.5199V23.1626H12.5571V23.1639Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1676 11.8584C18.8489 11.8597 18.5903 12.1184 18.5916 12.437C18.5916 12.7557 18.8516 13.0144 19.1703 13.013C19.4889 13.013 19.7476 12.7544 19.7476 12.4357C19.7476 12.117 19.4889 11.8584 19.1703 11.8584" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5571 23.1639V21.2786H14.9145L16.9158 19.2772L19.6785 20.4506C20.6798 20.8759 21.8385 20.6506 22.6065 19.8812L26.5305 15.9572C27.2998 15.1879 27.5238 14.0292 27.0998 13.0292L25.0971 8.31458C24.8278 7.67858 24.3211 7.17324 23.6851 6.90258L18.9705 4.89991C17.9691 4.47458 16.8118 4.69991 16.0425 5.46924L12.1185 9.39324C11.3505 10.1612 11.1251 11.3199 11.5505 12.3212L12.6931 15.0132L4.66113 23.0452V27.2879H8.9038L10.6718 25.5199V23.1626H12.5571V23.1639Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1676 11.8584C18.8489 11.8597 18.5903 12.1184 18.5916 12.437C18.5916 12.7557 18.8516 13.0144 19.1703 13.013C19.4889 13.013 19.7476 12.7544 19.7476 12.4357C19.7476 12.117 19.4889 11.8584 19.1703 11.8584" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5571 23.1639V21.2786H14.9145L16.9158 19.2772L19.6785 20.4506C20.6798 20.8759 21.8385 20.6506 22.6065 19.8812L26.5305 15.9572C27.2998 15.1879 27.5238 14.0292 27.0998 13.0292L25.0971 8.31458C24.8278 7.67858 24.3211 7.17324 23.6851 6.90258L18.9705 4.89991C17.9691 4.47458 16.8118 4.69991 16.0425 5.46924L12.1185 9.39324C11.3505 10.1612 11.1251 11.3199 11.5505 12.3212L12.6931 15.0132L4.66113 23.0452V27.2879H8.9038L10.6718 25.5199V23.1626H12.5571V23.1639Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1676 11.8584C18.8489 11.8597 18.5903 12.1184 18.5916 12.437C18.5916 12.7557 18.8516 13.0144 19.1703 13.013C19.4889 13.013 19.7476 12.7544 19.7476 12.4357C19.7476 12.117 19.4889 11.8584 19.1703 11.8584" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.5571 23.1639V21.2786H14.9145L16.9158 19.2772L19.6785 20.4506C20.6798 20.8759 21.8385 20.6506 22.6065 19.8812L26.5305 15.9572C27.2998 15.1879 27.5238 14.0292 27.0998 13.0292L25.0971 8.31458C24.8278 7.67858 24.3211 7.17324 23.6851 6.90258L18.9705 4.89991C17.9691 4.47458 16.8118 4.69991 16.0425 5.46924L12.1185 9.39324C11.3505 10.1612 11.1251 11.3199 11.5505 12.3212L12.6931 15.0132L4.66113 23.0452V27.2879H8.9038L10.6718 25.5199V23.1626H12.5571V23.1639Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M19.1676 11.8584C18.8489 11.8597 18.5903 12.1184 18.5916 12.437C18.5916 12.7557 18.8516 13.0144 19.1703 13.013C19.4889 13.013 19.7476 12.7544 19.7476 12.4357C19.7476 12.117 19.4889 11.8584 19.1703 11.8584" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
};

export const IconPersonalKeyToken: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
