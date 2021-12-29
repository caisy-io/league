import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M12.7411 4.24461C12.8843 4.10204 13.0992 4.05964 13.2857 4.13715C13.4723 4.21466 13.5939 4.39685 13.5939 4.59889V11.401C13.5939 11.6031 13.4723 11.7852 13.2857 11.8628C13.0992 11.9403 12.8843 11.8979 12.7411 11.7553L9.32589 8.35424C9.23167 8.26041 9.17871 8.13292 9.17871 7.99995C9.17871 7.86698 9.23167 7.73949 9.32589 7.64566L12.7411 4.24461Z"/>
    </SIconBase>         
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.9873 8.00008H12.9806" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M12.7411 4.24461C12.8843 4.10204 13.0992 4.05964 13.2857 4.13715C13.4723 4.21466 13.5939 4.39685 13.5939 4.59889V11.401C13.5939 11.6031 13.4723 11.7852 13.2857 11.8628C13.0992 11.9403 12.8843 11.8979 12.7411 11.7553L9.32589 8.35424C9.23167 8.26041 9.17871 8.13292 9.17871 7.99995C9.17871 7.86698 9.23167 7.73949 9.32589 7.64566L12.7411 4.24461Z"/>
    </SIconBase>            
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.7334 9.99992H16.2251" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M15.9364 5.30594C16.1153 5.12773 16.3839 5.07473 16.6172 5.17162C16.8504 5.26851 17.0024 5.49624 17.0024 5.7488V14.2514C17.0024 14.504 16.8504 14.7317 16.6172 14.8286C16.3839 14.9255 16.1153 14.8725 15.9364 14.6943L11.6674 10.443C11.5496 10.3257 11.4834 10.1663 11.4834 10.0001C11.4834 9.83391 11.5496 9.67455 11.6674 9.55726L15.9364 5.30594Z"/>
    </SIconBase>      
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M18.991 6.36703C19.2058 6.15318 19.5281 6.08958 19.808 6.20585C20.0879 6.32212 20.2703 6.5954 20.2703 6.89846V17.1016C20.2703 17.4047 20.0879 17.678 19.808 17.7942C19.5281 17.9105 19.2058 17.8469 18.991 17.6331L13.8682 12.5315C13.7269 12.3907 13.6475 12.1995 13.6475 12C13.6475 11.8006 13.7269 11.6094 13.8682 11.4686L18.991 6.36703Z"/>
    </SIconBase>        
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.48047 12H19.4705" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M18.991 6.36703C19.2058 6.15318 19.5281 6.08958 19.808 6.20585C20.0879 6.32212 20.2703 6.5954 20.2703 6.89846V17.1016C20.2703 17.4047 20.0879 17.678 19.808 17.7942C19.5281 17.9105 19.2058 17.8469 18.991 17.6331L13.8682 12.5315C13.7269 12.3907 13.6475 12.1995 13.6475 12C13.6475 11.8006 13.7269 11.6094 13.8682 11.4686L18.991 6.36703Z"/>
    </SIconBase>        
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.97363 15.9999H26.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M26.322 8.48945C26.6084 8.20432 27.0381 8.11952 27.4113 8.27454C27.7845 8.42957 28.0277 8.79394 28.0277 9.19803V22.8023C28.0277 23.2063 27.7845 23.5707 27.4113 23.7257C27.0381 23.8808 26.6084 23.796 26.322 23.5108L19.4916 16.7087C19.3032 16.5211 19.1973 16.2661 19.1973 16.0001C19.1973 15.7342 19.3032 15.4792 19.4916 15.2916L26.322 8.48945Z"/>
    </SIconBase>   
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.97363 15.9999H26.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M26.322 8.48945C26.6084 8.20432 27.0381 8.11952 27.4113 8.27454C27.7845 8.42957 28.0277 8.79394 28.0277 9.19803V22.8023C28.0277 23.2063 27.7845 23.5707 27.4113 23.7257C27.0381 23.8808 26.6084 23.796 26.322 23.5108L19.4916 16.7087C19.3032 16.5211 19.1973 16.2661 19.1973 16.0001C19.1973 15.7342 19.3032 15.4792 19.4916 15.2916L26.322 8.48945Z"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.97363 15.9999H26.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M26.322 8.48945C26.6084 8.20432 27.0381 8.11952 27.4113 8.27454C27.7845 8.42957 28.0277 8.79394 28.0277 9.19803V22.8023C28.0277 23.2063 27.7845 23.5707 27.4113 23.7257C27.0381 23.8808 26.6084 23.796 26.322 23.5108L19.4916 16.7087C19.3032 16.5211 19.1973 16.2661 19.1973 16.0001C19.1973 15.7342 19.3032 15.4792 19.4916 15.2916L26.322 8.48945Z"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.97363 15.9999H26.9603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="solid-fill transparent-stroke" d="M26.322 8.48945C26.6084 8.20432 27.0381 8.11952 27.4113 8.27454C27.7845 8.42957 28.0277 8.79394 28.0277 9.19803V22.8023C28.0277 23.2063 27.7845 23.5707 27.4113 23.7257C27.0381 23.8808 26.6084 23.796 26.322 23.5108L19.4916 16.7087C19.3032 16.5211 19.1973 16.2661 19.1973 16.0001C19.1973 15.7342 19.3032 15.4792 19.4916 15.2916L26.322 8.48945Z"/>
    </SIconBase>    
  ),
};

export const IconArrowReversed: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
