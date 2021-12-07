import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  16: <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6682 11.5742C12.3665 11.5742 12.9332 11.0093 12.9354 10.311V10.311V10.311C12.9349 9.95575 12.7931 9.61523 12.5412 9.36465L11.7015 8.5243V6.02793C11.7014 5.04671 11.3112 4.10579 10.6169 3.41239C9.92264 2.719 8.98123 2.33 8 2.33106V2.33106C5.95895 2.33216 4.30483 3.98688 4.30446 6.02793V8.5223L3.46478 9.36265C3.2127 9.61316 3.07064 9.95366 3.06995 10.309V10.309V10.309C3.07215 11.0073 3.63885 11.5722 4.33714 11.5722L11.6682 11.5742Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.01355 13.669H8.9857" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  20: <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M14.5852 14.4679C15.4581 14.4679 16.1665 13.7617 16.1692 12.8889V12.8889V12.8889C16.1687 12.4447 15.9914 12.0191 15.6765 11.7059L14.6269 10.6554V7.53498C14.6267 6.30844 14.1389 5.13229 13.2711 4.26555C12.4033 3.39881 11.2265 2.91256 9.99997 2.91388V2.91388C7.44865 2.91527 5.38101 4.98366 5.38055 7.53498V10.6529L4.33094 11.7034C4.01584 12.0165 3.83827 12.4421 3.8374 12.8864V12.8864V12.8864C3.84016 13.7592 4.54853 14.4654 5.4214 14.4654L14.5852 14.4679Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.76697 17.0863H11.2322" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  24: <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M17.5024 17.3614C18.5498 17.3614 19.3998 16.5141 19.4031 15.4666V15.4666V15.4666C19.4025 14.9337 19.1898 14.4229 18.8119 14.047L17.5524 12.7865V9.04196C17.5521 7.57012 16.9668 6.15874 15.9254 5.11865C14.884 4.07856 13.4719 3.49506 12.0001 3.49665V3.49665C8.93848 3.49831 6.4573 5.98038 6.45675 9.04196V12.7835L5.19723 14.044C4.8191 14.4198 4.60602 14.9306 4.60498 15.4636V15.4636V15.4636C4.60829 16.5111 5.45833 17.3584 6.50577 17.3584L17.5024 17.3614Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5204 20.5036H13.4786" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>,
  32: <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path fillRule="evenodd" clipRule="evenodd" d="M23.3364 23.1485C24.733 23.1485 25.8664 22.0187 25.8708 20.6222V20.6222V20.6222C25.8699 19.9116 25.5863 19.2305 25.0825 18.7294L23.4031 17.0487V12.0559C23.4027 10.0935 22.6224 8.21163 21.2338 6.82484C19.8453 5.43806 17.9625 4.66006 16 4.66217V4.66217C11.9179 4.66439 8.60966 7.97382 8.60892 12.0559V17.0447L6.92955 18.7254C6.42539 19.2264 6.14128 19.9074 6.13989 20.6182V20.6182V20.6182C6.1443 22.0147 7.2777 23.1445 8.67428 23.1445L23.3364 23.1485Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.0271 27.338H17.9714" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
}

export const IconNotificationBell: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
