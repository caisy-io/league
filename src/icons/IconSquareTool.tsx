import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3229 13.4932H3.76692C3.09159 13.4932 2.54492 12.9458 2.54492 12.2712V3.71516C2.54492 3.03983 3.09226 2.49316 3.76692 2.49316H12.3223C12.9976 2.49316 13.5443 3.0405 13.5443 3.71516V12.2705C13.5449 12.9458 12.9976 13.4932 12.3229 13.4932Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.3229 13.4932H3.76692C3.09159 13.4932 2.54492 12.9458 2.54492 12.2712V3.71516C2.54492 3.03983 3.09226 2.49316 3.76692 2.49316H12.3223C12.9976 2.49316 13.5443 3.0405 13.5443 3.71516V12.2705C13.5449 12.9458 12.9976 13.4932 12.3229 13.4932Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M15.3924 16.8682H4.69742C3.85326 16.8682 3.16992 16.184 3.16992 15.3407V4.64566C3.16992 3.8015 3.85409 3.11816 4.69742 3.11816H15.3916C16.2358 3.11816 16.9191 3.80233 16.9191 4.64566V15.3398C16.9199 16.184 16.2358 16.8682 15.3924 16.8682Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4619 20.2432H5.62792C4.61492 20.2432 3.79492 19.4222 3.79492 18.4102V5.57616C3.79492 4.56316 4.61592 3.74316 5.62792 3.74316H18.4609C19.4739 3.74316 20.2939 4.56416 20.2939 5.57616V18.4092C20.2949 19.4222 19.4739 20.2432 18.4619 20.2432Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  28: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18.4619 20.2432H5.62792C4.61492 20.2432 3.79492 19.4222 3.79492 18.4102V5.57616C3.79492 4.56316 4.61592 3.74316 5.62792 3.74316H18.4609C19.4739 3.74316 20.2939 4.56416 20.2939 5.57616V18.4092C20.2949 19.4222 19.4739 20.2432 18.4619 20.2432Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.6009 26.9932H7.48892C6.13826 26.9932 5.04492 25.8985 5.04492 24.5492V7.43716C5.04492 6.0865 6.13959 4.99316 7.48892 4.99316H24.5996C25.9503 4.99316 27.0436 6.08783 27.0436 7.43716V24.5478C27.0449 25.8985 25.9503 26.9932 24.6009 26.9932Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.6009 26.9932H7.48892C6.13826 26.9932 5.04492 25.8985 5.04492 24.5492V7.43716C5.04492 6.0865 6.13959 4.99316 7.48892 4.99316H24.5996C25.9503 4.99316 27.0436 6.08783 27.0436 7.43716V24.5478C27.0449 25.8985 25.9503 26.9932 24.6009 26.9932Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>        
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.6009 26.9932H7.48892C6.13826 26.9932 5.04492 25.8985 5.04492 24.5492V7.43716C5.04492 6.0865 6.13959 4.99316 7.48892 4.99316H24.5996C25.9503 4.99316 27.0436 6.08783 27.0436 7.43716V24.5478C27.0449 25.8985 25.9503 26.9932 24.6009 26.9932Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>    
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M24.6009 26.9932H7.48892C6.13826 26.9932 5.04492 25.8985 5.04492 24.5492V7.43716C5.04492 6.0865 6.13959 4.99316 7.48892 4.99316H24.5996C25.9503 4.99316 27.0436 6.08783 27.0436 7.43716V24.5478C27.0449 25.8985 25.9503 26.9932 24.6009 26.9932Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>       
  ),
};

export const IconSquareTool: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
