import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66453 3.03076V14.0027" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66455 11.0009C4.13206 10.1623 5.91113 10.0724 7.45567 10.7589L8.54453 11.2428C10.0891 11.9293 11.8681 11.8394 13.3357 11.0009V3.0302C11.8681 3.86879 10.0891 3.95864 8.54454 3.27218L7.45567 2.78824C5.91114 2.10178 4.13206 2.19162 2.66455 3.0302" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>  
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.66453 3.03076V14.0027" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2.66455 11.0009C4.13206 10.1623 5.91113 10.0724 7.45567 10.7589L8.54453 11.2428C10.0891 11.9293 11.8681 11.8394 13.3357 11.0009V3.0302C11.8681 3.86879 10.0891 3.95864 8.54454 3.27218L7.45567 2.78824C5.91114 2.10178 4.13206 2.19162 2.66455 3.0302" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase> 
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.33041 3.78809V17.5029" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.33057 13.7514C5.16495 12.7032 7.3888 12.5909 9.31946 13.449L10.6805 14.0539C12.6112 14.912 14.8351 14.7997 16.6695 13.7514V3.78812C14.8351 4.83635 12.6112 4.94866 10.6806 4.09059L9.31947 3.48566C7.3888 2.62759 5.16496 2.7399 3.33057 3.78812" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>   
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99679 4.5459V21.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.99658 16.502C6.19785 15.2441 8.86646 15.1094 11.1833 16.1391L12.8166 16.865C15.1334 17.8947 17.802 17.7599 20.0032 16.502V4.54604C17.802 5.80391 15.1334 5.93869 12.8166 4.909L11.1833 4.18309C8.86647 3.1534 6.19785 3.28817 3.99658 4.54604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.99679 4.5459V21.0037" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3.99658 16.502C6.19785 15.2441 8.86646 15.1094 11.1833 16.1391L12.8166 16.865C15.1334 17.8947 17.802 17.7599 20.0032 16.502V4.54604C17.802 5.80391 15.1334 5.93869 12.8166 4.909L11.1833 4.18309C8.86647 3.1534 6.19785 3.28817 3.99658 4.54604" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.32857 6.06104V28.0048" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.32861 22.0022C8.26363 20.325 11.8218 20.1453 14.9108 21.5183L17.0886 22.4862C20.1776 23.8591 23.7358 23.6794 26.6708 22.0022V6.0609C23.7358 7.73806 20.1777 7.91776 17.0886 6.54484L14.9109 5.57696C11.8218 4.20404 8.26364 4.38374 5.32861 6.0609" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.32857 6.06104V28.0048" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.32861 22.0022C8.26363 20.325 11.8218 20.1453 14.9108 21.5183L17.0886 22.4862C20.1776 23.8591 23.7358 23.6794 26.6708 22.0022V6.0609C23.7358 7.73806 20.1777 7.91776 17.0886 6.54484L14.9109 5.57696C11.8218 4.20404 8.26364 4.38374 5.32861 6.0609" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.32857 6.06104V28.0048" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.32861 22.0022C8.26363 20.325 11.8218 20.1453 14.9108 21.5183L17.0886 22.4862C20.1776 23.8591 23.7358 23.6794 26.6708 22.0022V6.0609C23.7358 7.73806 20.1777 7.91776 17.0886 6.54484L14.9109 5.57696C11.8218 4.20404 8.26364 4.38374 5.32861 6.0609" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.32857 6.06104V28.0048" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.32861 22.0022C8.26363 20.325 11.8218 20.1453 14.9108 21.5183L17.0886 22.4862C20.1776 23.8591 23.7358 23.6794 26.6708 22.0022V6.0609C23.7358 7.73806 20.1777 7.91776 17.0886 6.54484L14.9109 5.57696C11.8218 4.20404 8.26364 4.38374 5.32861 6.0609" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  )
}

export const IconFlag: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
