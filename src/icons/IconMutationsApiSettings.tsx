import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.7999 13.449H3.19992C2.49272 13.449 1.91992 12.8762 1.91992 12.169V3.20896C1.91992 2.50176 2.49272 1.92896 3.19992 1.92896H12.7999C13.5071 1.92896 14.0799 2.50176 14.0799 3.20896V12.169C14.0799 12.8762 13.5071 13.449 12.7999 13.449Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.91992 5.12884H14.0799" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84295 3.52261C3.84103 3.52261 3.83975 3.52389 3.83975 3.52581C3.83975 3.52773 3.84103 3.52901 3.84295 3.52901C3.84487 3.52901 3.84615 3.52773 3.84615 3.52581C3.84615 3.52389 3.84487 3.52261 3.84295 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.47088 3.52261C5.46896 3.52261 5.46768 3.52389 5.46768 3.52581C5.46768 3.52773 5.46896 3.52901 5.47088 3.52901C5.4728 3.52901 5.47408 3.52773 5.47408 3.52581C5.47408 3.52389 5.4728 3.52261 5.47088 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.09637 3.52261C7.09445 3.52261 7.09317 3.52389 7.09317 3.52581C7.09317 3.52773 7.09445 3.52901 7.09637 3.52901C7.09829 3.52901 7.09957 3.52773 7.09957 3.52581C7.09957 3.52389 7.09765 3.52261 7.09637 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99969 7.3689V8.0089" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99969 10.5688V11.2088" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.33615 8.32895L6.88783 8.64894" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.11203 9.92904L9.66371 10.249" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.33615 10.249L6.88783 9.92904" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.11203 8.64894L9.66371 8.32895" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.90501 8.38391C9.40485 8.88375 9.40485 9.69399 8.90501 10.1938C8.40517 10.6937 7.59493 10.6937 7.09509 10.1938C6.59525 9.69399 6.59525 8.88375 7.09509 8.38391C7.59493 7.88407 8.40517 7.88407 8.90501 8.38391" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M12.7999 13.449H3.19992C2.49272 13.449 1.91992 12.8762 1.91992 12.169V3.20896C1.91992 2.50176 2.49272 1.92896 3.19992 1.92896H12.7999C13.5071 1.92896 14.0799 2.50176 14.0799 3.20896V12.169C14.0799 12.8762 13.5071 13.449 12.7999 13.449Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M1.91992 5.12884H14.0799" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84295 3.52261C3.84103 3.52261 3.83975 3.52389 3.83975 3.52581C3.83975 3.52773 3.84103 3.52901 3.84295 3.52901C3.84487 3.52901 3.84615 3.52773 3.84615 3.52581C3.84615 3.52389 3.84487 3.52261 3.84295 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.47088 3.52261C5.46896 3.52261 5.46768 3.52389 5.46768 3.52581C5.46768 3.52773 5.46896 3.52901 5.47088 3.52901C5.4728 3.52901 5.47408 3.52773 5.47408 3.52581C5.47408 3.52389 5.4728 3.52261 5.47088 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.09637 3.52261C7.09445 3.52261 7.09317 3.52389 7.09317 3.52581C7.09317 3.52773 7.09445 3.52901 7.09637 3.52901C7.09829 3.52901 7.09957 3.52773 7.09957 3.52581C7.09957 3.52389 7.09765 3.52261 7.09637 3.52261" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99969 7.3689V8.0089" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.99969 10.5688V11.2088" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.33615 8.32895L6.88783 8.64894" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.11203 9.92904L9.66371 10.249" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.33615 10.249L6.88783 9.92904" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.11203 8.64894L9.66371 8.32895" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.90501 8.38391C9.40485 8.88375 9.40485 9.69399 8.90501 10.1938C8.40517 10.6937 7.59493 10.6937 7.09509 10.1938C6.59525 9.69399 6.59525 8.88375 7.09509 8.38391C7.59493 7.88407 8.40517 7.88407 8.90501 8.38391" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M16.3334 16.8111H4.3334C3.4494 16.8111 2.7334 16.0951 2.7334 15.2111V4.01113C2.7334 3.12713 3.4494 2.41113 4.3334 2.41113H16.3334C17.2174 2.41113 17.9334 3.12713 17.9334 4.01113V15.2111C17.9334 16.0951 17.2174 16.8111 16.3334 16.8111Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.7334 6.41123H17.9334" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.1373 4.40308C5.1349 4.40308 5.1333 4.40468 5.1333 4.40708C5.1333 4.40948 5.1349 4.41108 5.1373 4.41108C5.1397 4.41108 5.1413 4.40948 5.1413 4.40708C5.1413 4.40468 5.1397 4.40308 5.1373 4.40308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.17197 4.40308C7.16957 4.40308 7.16797 4.40468 7.16797 4.40708C7.16797 4.40948 7.16957 4.41108 7.17197 4.41108C7.17437 4.41108 7.17597 4.40948 7.17597 4.40708C7.17597 4.40468 7.17437 4.40308 7.17197 4.40308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.20371 4.40308C9.20131 4.40308 9.19971 4.40468 9.19971 4.40708C9.19971 4.40948 9.20131 4.41108 9.20371 4.41108C9.20611 4.41108 9.20771 4.40948 9.20771 4.40708C9.20771 4.40468 9.20531 4.40308 9.20371 4.40308" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3336 9.21118V10.0112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.3336 13.2112V14.0112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.25344 10.4112L8.94304 10.8112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7237 12.4112L12.4133 12.8112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.25344 12.8112L8.94304 12.4112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.7237 10.8112L12.4133 10.4112" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.4644 10.4798C12.0892 11.1046 12.0892 12.1174 11.4644 12.7422C10.8396 13.367 9.8268 13.367 9.202 12.7422C8.5772 12.1174 8.5772 11.1046 9.202 10.4798C9.8268 9.85503 10.8396 9.85503 11.4644 10.4798" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8664 20.1733H5.46639C4.40559 20.1733 3.54639 19.3141 3.54639 18.2533V4.81331C3.54639 3.75251 4.40559 2.89331 5.46639 2.89331H19.8664C20.9272 2.89331 21.7864 3.75251 21.7864 4.81331V18.2533C21.7864 19.3141 20.9272 20.1733 19.8664 20.1733Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.54639 7.69338H21.7864" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.43117 5.28379C6.42829 5.28379 6.42637 5.28571 6.42637 5.28859C6.42637 5.29147 6.42829 5.29339 6.43117 5.29339C6.43405 5.29339 6.43597 5.29147 6.43597 5.28859C6.43597 5.28571 6.43405 5.28379 6.43117 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.87258 5.28379C8.8697 5.28379 8.86778 5.28571 8.86778 5.28859C8.86778 5.29147 8.8697 5.29339 8.87258 5.29339C8.87546 5.29339 8.87738 5.29147 8.87738 5.28859C8.87738 5.28571 8.87546 5.28379 8.87258 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3111 5.28379C11.3082 5.28379 11.3063 5.28571 11.3063 5.28859C11.3063 5.29147 11.3082 5.29339 11.3111 5.29339C11.3139 5.29339 11.3159 5.29147 11.3159 5.28859C11.3159 5.28571 11.313 5.28379 11.3111 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 11.0532V12.0132" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 15.8533V16.8133" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1702 12.4934L10.9978 12.9734" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3348 14.8933L15.1623 15.3733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1702 15.3733L10.9978 14.8933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3348 12.9734L15.1623 12.4934" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0238 12.576C14.7735 13.3258 14.7735 14.5411 14.0238 15.2909C13.274 16.0406 12.0587 16.0406 11.3089 15.2909C10.5591 14.5411 10.5591 13.3258 11.3089 12.576C12.0587 11.8262 13.274 11.8262 14.0238 12.576" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28: (
    <SIconBase width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M19.8664 20.1733H5.46639C4.40559 20.1733 3.54639 19.3141 3.54639 18.2533V4.81331C3.54639 3.75251 4.40559 2.89331 5.46639 2.89331H19.8664C20.9272 2.89331 21.7864 3.75251 21.7864 4.81331V18.2533C21.7864 19.3141 20.9272 20.1733 19.8664 20.1733Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.54639 7.69338H21.7864" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.43117 5.28379C6.42829 5.28379 6.42637 5.28571 6.42637 5.28859C6.42637 5.29147 6.42829 5.29339 6.43117 5.29339C6.43405 5.29339 6.43597 5.29147 6.43597 5.28859C6.43597 5.28571 6.43405 5.28379 6.43117 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.87258 5.28379C8.8697 5.28379 8.86778 5.28571 8.86778 5.28859C8.86778 5.29147 8.8697 5.29339 8.87258 5.29339C8.87546 5.29339 8.87738 5.29147 8.87738 5.28859C8.87738 5.28571 8.87546 5.28379 8.87258 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.3111 5.28379C11.3082 5.28379 11.3063 5.28571 11.3063 5.28859C11.3063 5.29147 11.3082 5.29339 11.3111 5.29339C11.3139 5.29339 11.3159 5.29147 11.3159 5.28859C11.3159 5.28571 11.313 5.28379 11.3111 5.28379" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 11.0532V12.0132" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6665 15.8533V16.8133" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1702 12.4934L10.9978 12.9734" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3348 14.8933L15.1623 15.3733" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.1702 15.3733L10.9978 14.8933" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.3348 12.9734L15.1623 12.4934" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.0238 12.576C14.7735 13.3258 14.7735 14.5411 14.0238 15.2909C13.274 16.0406 12.0587 16.0406 11.3089 15.2909C10.5591 14.5411 10.5591 13.3258 11.3089 12.576C12.0587 11.8262 13.274 11.8262 14.0238 12.576" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.6003 27.8979H6.40033C4.98593 27.8979 3.84033 26.7523 3.84033 25.3379V7.41791C3.84033 6.00351 4.98593 4.85791 6.40033 4.85791H25.6003C27.0147 4.85791 28.1603 6.00351 28.1603 7.41791V25.3379C28.1603 26.7523 27.0147 27.8979 25.6003 27.8979Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84033 11.2579H28.1603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.68688 8.04522C7.68304 8.04522 7.68048 8.04778 7.68048 8.05162C7.68048 8.05546 7.68304 8.05802 7.68688 8.05802C7.69072 8.05802 7.69328 8.05546 7.69328 8.05162C7.69328 8.04778 7.69072 8.04522 7.68688 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9418 8.04522C10.9379 8.04522 10.9354 8.04778 10.9354 8.05162C10.9354 8.05546 10.9379 8.05802 10.9418 8.05802C10.9456 8.05802 10.9482 8.05546 10.9482 8.05162C10.9482 8.04778 10.9456 8.04522 10.9418 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1927 8.04522C14.1889 8.04522 14.1863 8.04778 14.1863 8.05162C14.1863 8.05546 14.1889 8.05802 14.1927 8.05802C14.1966 8.05802 14.1991 8.05546 14.1991 8.05162C14.1991 8.04778 14.1953 8.04522 14.1927 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 15.7378V17.0178" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 22.1379V23.4179" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 17.6579L13.7757 18.2979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 20.8578L19.3284 21.4978" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 21.4978L13.7757 20.8578" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 18.2979L19.3284 17.6579" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.81 17.7681C18.8097 18.7678 18.8097 20.3882 17.81 21.3879C16.8104 22.3876 15.1899 22.3876 14.1902 21.3879C13.1905 20.3882 13.1905 18.7678 14.1902 17.7681C15.1899 16.7684 16.8104 16.7684 17.81 17.7681" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.6003 27.8979H6.40033C4.98593 27.8979 3.84033 26.7523 3.84033 25.3379V7.41791C3.84033 6.00351 4.98593 4.85791 6.40033 4.85791H25.6003C27.0147 4.85791 28.1603 6.00351 28.1603 7.41791V25.3379C28.1603 26.7523 27.0147 27.8979 25.6003 27.8979Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84033 11.2579H28.1603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.68688 8.04522C7.68304 8.04522 7.68048 8.04778 7.68048 8.05162C7.68048 8.05546 7.68304 8.05802 7.68688 8.05802C7.69072 8.05802 7.69328 8.05546 7.69328 8.05162C7.69328 8.04778 7.69072 8.04522 7.68688 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9418 8.04522C10.9379 8.04522 10.9354 8.04778 10.9354 8.05162C10.9354 8.05546 10.9379 8.05802 10.9418 8.05802C10.9456 8.05802 10.9482 8.05546 10.9482 8.05162C10.9482 8.04778 10.9456 8.04522 10.9418 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1927 8.04522C14.1889 8.04522 14.1863 8.04778 14.1863 8.05162C14.1863 8.05546 14.1889 8.05802 14.1927 8.05802C14.1966 8.05802 14.1991 8.05546 14.1991 8.05162C14.1991 8.04778 14.1953 8.04522 14.1927 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 15.7378V17.0178" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 22.1379V23.4179" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 17.6579L13.7757 18.2979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 20.8578L19.3284 21.4978" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 21.4978L13.7757 20.8578" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 18.2979L19.3284 17.6579" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.81 17.7681C18.8097 18.7678 18.8097 20.3882 17.81 21.3879C16.8104 22.3876 15.1899 22.3876 14.1902 21.3879C13.1905 20.3882 13.1905 18.7678 14.1902 17.7681C15.1899 16.7684 16.8104 16.7684 17.81 17.7681" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.6003 27.8979H6.40033C4.98593 27.8979 3.84033 26.7523 3.84033 25.3379V7.41791C3.84033 6.00351 4.98593 4.85791 6.40033 4.85791H25.6003C27.0147 4.85791 28.1603 6.00351 28.1603 7.41791V25.3379C28.1603 26.7523 27.0147 27.8979 25.6003 27.8979Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84033 11.2579H28.1603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.68688 8.04522C7.68304 8.04522 7.68048 8.04778 7.68048 8.05162C7.68048 8.05546 7.68304 8.05802 7.68688 8.05802C7.69072 8.05802 7.69328 8.05546 7.69328 8.05162C7.69328 8.04778 7.69072 8.04522 7.68688 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9418 8.04522C10.9379 8.04522 10.9354 8.04778 10.9354 8.05162C10.9354 8.05546 10.9379 8.05802 10.9418 8.05802C10.9456 8.05802 10.9482 8.05546 10.9482 8.05162C10.9482 8.04778 10.9456 8.04522 10.9418 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1927 8.04522C14.1889 8.04522 14.1863 8.04778 14.1863 8.05162C14.1863 8.05546 14.1889 8.05802 14.1927 8.05802C14.1966 8.05802 14.1991 8.05546 14.1991 8.05162C14.1991 8.04778 14.1953 8.04522 14.1927 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 15.7378V17.0178" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 22.1379V23.4179" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 17.6579L13.7757 18.2979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 20.8578L19.3284 21.4978" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 21.4978L13.7757 20.8578" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 18.2979L19.3284 17.6579" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.81 17.7681C18.8097 18.7678 18.8097 20.3882 17.81 21.3879C16.8104 22.3876 15.1899 22.3876 14.1902 21.3879C13.1905 20.3882 13.1905 18.7678 14.1902 17.7681C15.1899 16.7684 16.8104 16.7684 17.81 17.7681" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M25.6003 27.8979H6.40033C4.98593 27.8979 3.84033 26.7523 3.84033 25.3379V7.41791C3.84033 6.00351 4.98593 4.85791 6.40033 4.85791H25.6003C27.0147 4.85791 28.1603 6.00351 28.1603 7.41791V25.3379C28.1603 26.7523 27.0147 27.8979 25.6003 27.8979Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3.84033 11.2579H28.1603" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.68688 8.04522C7.68304 8.04522 7.68048 8.04778 7.68048 8.05162C7.68048 8.05546 7.68304 8.05802 7.68688 8.05802C7.69072 8.05802 7.69328 8.05546 7.69328 8.05162C7.69328 8.04778 7.69072 8.04522 7.68688 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.9418 8.04522C10.9379 8.04522 10.9354 8.04778 10.9354 8.05162C10.9354 8.05546 10.9379 8.05802 10.9418 8.05802C10.9456 8.05802 10.9482 8.05546 10.9482 8.05162C10.9482 8.04778 10.9456 8.04522 10.9418 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.1927 8.04522C14.1889 8.04522 14.1863 8.04778 14.1863 8.05162C14.1863 8.05546 14.1889 8.05802 14.1927 8.05802C14.1966 8.05802 14.1991 8.05546 14.1991 8.05162C14.1991 8.04778 14.1953 8.04522 14.1927 8.04522" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 15.7378V17.0178" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16.0004 22.1379V23.4179" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 17.6579L13.7757 18.2979" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 20.8578L19.3284 21.4978" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.6723 21.4978L13.7757 20.8578" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M18.225 18.2979L19.3284 17.6579" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M17.81 17.7681C18.8097 18.7678 18.8097 20.3882 17.81 21.3879C16.8104 22.3876 15.1899 22.3876 14.1902 21.3879C13.1905 20.3882 13.1905 18.7678 14.1902 17.7681C15.1899 16.7684 16.8104 16.7684 17.81 17.7681" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
};

export const IconMutationsApiSettings: FC<IIconSize> = ({ size = 24 }) => IconSize[size];
