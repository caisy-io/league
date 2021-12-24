import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

const IconSize = {
  12: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C14 4.692 11.308 2 8 2C4.69133 2 2 4.69133 2 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8C2 11.3087 4.69133 14 8 14C11.3087 14 14 11.308 14 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2189 6.33341C10.1269 6.33341 10.0522 6.40808 10.0529 6.50008C10.0529 6.59208 10.1276 6.66675 10.2196 6.66675C10.3116 6.66675 10.3862 6.59208 10.3862 6.50008C10.3862 6.40808 10.3116 6.33341 10.2189 6.33341" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.75943 6.33341C5.66743 6.33341 5.59276 6.40808 5.59343 6.50008C5.59343 6.59208 5.66809 6.66675 5.76009 6.66675C5.85209 6.66675 5.92676 6.59208 5.92676 6.50008C5.92676 6.40808 5.85209 6.33341 5.75943 6.33341" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 11.3333C9.11133 11.3333 10 10.4446 10 9.33325H6C6 10.4446 6.88867 11.3333 8 11.3333V11.3333Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  16: (
    <SIconBase width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 8C14 4.692 11.308 2 8 2C4.69133 2 2 4.69133 2 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2 8C2 11.3087 4.69133 14 8 14C11.3087 14 14 11.308 14 8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10.2189 6.33341C10.1269 6.33341 10.0522 6.40808 10.0529 6.50008C10.0529 6.59208 10.1276 6.66675 10.2196 6.66675C10.3116 6.66675 10.3862 6.59208 10.3862 6.50008C10.3862 6.40808 10.3116 6.33341 10.2189 6.33341" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M5.75943 6.33341C5.66743 6.33341 5.59276 6.40808 5.59343 6.50008C5.59343 6.59208 5.66809 6.66675 5.76009 6.66675C5.85209 6.66675 5.92676 6.59208 5.92676 6.50008C5.92676 6.40808 5.85209 6.33341 5.75943 6.33341" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 11.3333C9.11133 11.3333 10 10.4446 10 9.33325H6C6 10.4446 6.88867 11.3333 8 11.3333V11.3333Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  20: (
    <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 10C17.5 5.865 14.135 2.5 10 2.5C5.86417 2.5 2.5 5.86417 2.5 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M2.5 10C2.5 14.1358 5.86417 17.5 10 17.5C14.1358 17.5 17.5 14.135 17.5 10" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12.7733 7.91659C12.6583 7.91659 12.5649 8.00992 12.5658 8.12492C12.5658 8.23992 12.6591 8.33325 12.7741 8.33325C12.8891 8.33325 12.9824 8.23992 12.9824 8.12492C12.9824 8.00992 12.8891 7.91659 12.7733 7.91659" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.19904 7.91659C7.08404 7.91659 6.99071 8.00992 6.99154 8.12492C6.99154 8.23992 7.08487 8.33325 7.19987 8.33325C7.31487 8.33325 7.40821 8.23992 7.40821 8.12492C7.40821 8.00992 7.31487 7.91659 7.19904 7.91659" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 14.1667C11.3892 14.1667 12.5 13.0559 12.5 11.6667H7.5C7.5 13.0559 8.61083 14.1667 10 14.1667V14.1667Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  24: (
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.3281 9.5C15.1901 9.5 15.0781 9.612 15.0791 9.75C15.0791 9.888 15.1911 10 15.3291 10C15.4671 10 15.5791 9.888 15.5791 9.75C15.5791 9.612 15.4671 9.5 15.3281 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.63914 9.5C8.50114 9.5 8.38914 9.612 8.39014 9.75C8.39014 9.888 8.50214 10 8.64014 10C8.77814 10 8.89014 9.888 8.89014 9.75C8.89014 9.612 8.77814 9.5 8.63914 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  28:(
    <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 12C21 7.038 16.962 3 12 3C7.037 3 3 7.037 3 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M3 12C3 16.963 7.037 21 12 21C16.963 21 21 16.962 21 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M15.3281 9.5C15.1901 9.5 15.0781 9.612 15.0791 9.75C15.0791 9.888 15.1911 10 15.3291 10C15.4671 10 15.5791 9.888 15.5791 9.75C15.5791 9.612 15.4671 9.5 15.3281 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8.63914 9.5C8.50114 9.5 8.38914 9.612 8.39014 9.75C8.39014 9.888 8.50214 10 8.64014 10C8.77814 10 8.89014 9.888 8.89014 9.75C8.89014 9.612 8.77814 9.5 8.63914 9.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 17C13.667 17 15 15.667 15 14H9C9 15.667 10.333 17 12 17V17Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  32: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 16C28 9.384 22.616 4 16 4C9.38267 4 4 9.38267 4 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16C4 22.6173 9.38267 28 16 28C22.6173 28 28 22.616 28 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4373 12.6666C20.2533 12.6666 20.104 12.8159 20.1053 12.9999C20.1053 13.1839 20.2546 13.3333 20.4386 13.3333C20.6226 13.3333 20.772 13.1839 20.772 12.9999C20.772 12.8159 20.6226 12.6666 20.4373 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5189 12.6666C11.3349 12.6666 11.1855 12.8159 11.1869 12.9999C11.1869 13.1839 11.3362 13.3333 11.5202 13.3333C11.7042 13.3333 11.8535 13.1839 11.8535 12.9999C11.8535 12.8159 11.7042 12.6666 11.5189 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 22.6667C18.2227 22.6667 20 20.8894 20 18.6667H12C12 20.8894 13.7773 22.6667 16 22.6667V22.6667Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  36: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 16C28 9.384 22.616 4 16 4C9.38267 4 4 9.38267 4 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16C4 22.6173 9.38267 28 16 28C22.6173 28 28 22.616 28 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4373 12.6666C20.2533 12.6666 20.104 12.8159 20.1053 12.9999C20.1053 13.1839 20.2546 13.3333 20.4386 13.3333C20.6226 13.3333 20.772 13.1839 20.772 12.9999C20.772 12.8159 20.6226 12.6666 20.4373 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5189 12.6666C11.3349 12.6666 11.1855 12.8159 11.1869 12.9999C11.1869 13.1839 11.3362 13.3333 11.5202 13.3333C11.7042 13.3333 11.8535 13.1839 11.8535 12.9999C11.8535 12.8159 11.7042 12.6666 11.5189 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 22.6667C18.2227 22.6667 20 20.8894 20 18.6667H12C12 20.8894 13.7773 22.6667 16 22.6667V22.6667Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  40: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 16C28 9.384 22.616 4 16 4C9.38267 4 4 9.38267 4 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16C4 22.6173 9.38267 28 16 28C22.6173 28 28 22.616 28 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4373 12.6666C20.2533 12.6666 20.104 12.8159 20.1053 12.9999C20.1053 13.1839 20.2546 13.3333 20.4386 13.3333C20.6226 13.3333 20.772 13.1839 20.772 12.9999C20.772 12.8159 20.6226 12.6666 20.4373 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5189 12.6666C11.3349 12.6666 11.1855 12.8159 11.1869 12.9999C11.1869 13.1839 11.3362 13.3333 11.5202 13.3333C11.7042 13.3333 11.8535 13.1839 11.8535 12.9999C11.8535 12.8159 11.7042 12.6666 11.5189 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 22.6667C18.2227 22.6667 20 20.8894 20 18.6667H12C12 20.8894 13.7773 22.6667 16 22.6667V22.6667Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
  48: (
    <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 16C28 9.384 22.616 4 16 4C9.38267 4 4 9.38267 4 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 16C4 22.6173 9.38267 28 16 28C22.6173 28 28 22.616 28 16" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M20.4373 12.6666C20.2533 12.6666 20.104 12.8159 20.1053 12.9999C20.1053 13.1839 20.2546 13.3333 20.4386 13.3333C20.6226 13.3333 20.772 13.1839 20.772 12.9999C20.772 12.8159 20.6226 12.6666 20.4373 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11.5189 12.6666C11.3349 12.6666 11.1855 12.8159 11.1869 12.9999C11.1869 13.1839 11.3362 13.3333 11.5202 13.3333C11.7042 13.3333 11.8535 13.1839 11.8535 12.9999C11.8535 12.8159 11.7042 12.6666 11.5189 12.6666" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 22.6667C18.2227 22.6667 20 20.8894 20 18.6667H12C12 20.8894 13.7773 22.6667 16 22.6667V22.6667Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
  ),
}

export const IconSmileEmojiSelector: FC<IIconSize> = ({ size= 24 }) => IconSize[size];
