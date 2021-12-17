import React, { FC } from "react";
import { SIconBase } from "./styles/SIconBase";
import { IIconSize } from "../utils/types";

interface IIconSolid extends IIconSize {
  solid?: boolean;
}

const IconSize = {
  12: (solid) => solid ? (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M9.35267 2.75938L14.4587 11.6954C15.052 12.734 14.302 14.0267 13.106 14.0267H2.894C1.69734 14.0267 0.947338 12.734 1.54134 11.6954L6.64734 2.75938C7.24534 1.71204 8.75467 1.71204 9.35267 2.75938Z"/>
      <path className="white-stroke" d="M7.99984 8.74663V6.2533" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M7.99917 10.75C7.90717 10.75 7.83251 10.8247 7.83317 10.9167C7.83317 11.0087 7.90784 11.0834 7.99984 11.0834C8.09184 11.0834 8.16651 11.0087 8.16651 10.9167C8.16651 10.8247 8.09184 10.75 7.99917 10.75" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99984 8.74663V6.2533" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99917 10.75C7.90717 10.75 7.83251 10.8247 7.83317 10.9167C7.83317 11.0087 7.90784 11.0834 7.99984 11.0834C8.09184 11.0834 8.16651 11.0087 8.16651 10.9167C8.16651 10.8247 8.09184 10.75 7.99917 10.75" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.35267 2.75938L14.4587 11.6954C15.052 12.734 14.302 14.0267 13.106 14.0267H2.894C1.69734 14.0267 0.947338 12.734 1.54134 11.6954L6.64734 2.75938C7.24534 1.71204 8.75467 1.71204 9.35267 2.75938Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
  ),
  16: (solid) => solid ? (
    <SIconBase solid={solid} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M9.35267 2.75938L14.4587 11.6954C15.052 12.734 14.302 14.0267 13.106 14.0267H2.894C1.69734 14.0267 0.947338 12.734 1.54134 11.6954L6.64734 2.75938C7.24534 1.71204 8.75467 1.71204 9.35267 2.75938Z"/>
      <path className="white-stroke" d="M7.99984 8.74663V6.2533" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M7.99917 10.75C7.90717 10.75 7.83251 10.8247 7.83317 10.9167C7.83317 11.0087 7.90784 11.0834 7.99984 11.0834C8.09184 11.0834 8.16651 11.0087 8.16651 10.9167C8.16651 10.8247 8.09184 10.75 7.99917 10.75" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase  width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.99984 8.74663V6.2533" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7.99917 10.75C7.90717 10.75 7.83251 10.8247 7.83317 10.9167C7.83317 11.0087 7.90784 11.0834 7.99984 11.0834C8.09184 11.0834 8.16651 11.0087 8.16651 10.9167C8.16651 10.8247 8.09184 10.75 7.99917 10.75" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M9.35267 2.75938L14.4587 11.6954C15.052 12.734 14.302 14.0267 13.106 14.0267H2.894C1.69734 14.0267 0.947338 12.734 1.54134 11.6954L6.64734 2.75938C7.24534 1.71204 8.75467 1.71204 9.35267 2.75938Z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  20: (solid) => solid ? (
    <SIconBase solid={solid} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M11.691 3.44916L18.0735 14.6192C18.8151 15.9175 17.8776 17.5333 16.3826 17.5333H3.61763C2.12179 17.5333 1.18429 15.9175 1.92679 14.6192L8.30929 3.44916C9.05679 2.13999 10.9435 2.13999 11.691 3.44916Z"/>
      <path className="white-stroke" d="M10.0002 10.9333V7.81665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M9.99933 13.4375C9.88433 13.4375 9.791 13.5308 9.79183 13.6458C9.79183 13.7608 9.88517 13.8541 10.0002 13.8541C10.1152 13.8541 10.2085 13.7608 10.2085 13.6458C10.2085 13.5308 10.1152 13.4375 9.99933 13.4375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0002 10.9333V7.81665" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9.99933 13.4375C9.88433 13.4375 9.791 13.5308 9.79183 13.6458C9.79183 13.7608 9.88517 13.8541 10.0002 13.8541C10.1152 13.8541 10.2085 13.7608 10.2085 13.6458C10.2085 13.5308 10.1152 13.4375 9.99933 13.4375" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M11.691 3.44916L18.0735 14.6192C18.8151 15.9175 17.8776 17.5333 16.3826 17.5333H3.61763C2.12179 17.5333 1.18429 15.9175 1.92679 14.6192L8.30929 3.44916C9.05679 2.13999 10.9435 2.13999 11.691 3.44916Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  24: (solid) => solid ? (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M14.0288 4.13894L21.6878 17.5429C22.5778 19.1009 21.4528 21.0399 19.6588 21.0399H4.34076C2.54576 21.0399 1.42076 19.1009 2.31176 17.5429L9.97076 4.13894C10.8678 2.56794 13.1318 2.56794 14.0288 4.13894Z"/>
      <path className="white-stroke" d="M12 13.12V9.38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.12V9.38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.0288 4.13894L21.6878 17.5429C22.5778 19.1009 21.4528 21.0399 19.6588 21.0399H4.34076C2.54576 21.0399 1.42076 19.1009 2.31176 17.5429L9.97076 4.13894C10.8678 2.56794 13.1318 2.56794 14.0288 4.13894Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  28: (solid) => solid ? (
    <SIconBase solid={solid} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M14.0288 4.13894L21.6878 17.5429C22.5778 19.1009 21.4528 21.0399 19.6588 21.0399H4.34076C2.54576 21.0399 1.42076 19.1009 2.31176 17.5429L9.97076 4.13894C10.8678 2.56794 13.1318 2.56794 14.0288 4.13894Z"/>
      <path className="white-stroke" d="M12 13.12V9.38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 13.12V9.38" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M11.999 16.125C11.861 16.125 11.749 16.237 11.75 16.375C11.75 16.513 11.862 16.625 12 16.625C12.138 16.625 12.25 16.513 12.25 16.375C12.25 16.237 12.138 16.125 11.999 16.125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M14.0288 4.13894L21.6878 17.5429C22.5778 19.1009 21.4528 21.0399 19.6588 21.0399H4.34076C2.54576 21.0399 1.42076 19.1009 2.31176 17.5429L9.97076 4.13894C10.8678 2.56794 13.1318 2.56794 14.0288 4.13894Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  32: (solid) => solid ? (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z"/>
      <path className="white-stroke" d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  36: (solid) => solid ? (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z"/>
      <path className="white-stroke" d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  40: (solid) => solid ? (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z"/>
      <path className="white-stroke" d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
  48: (solid) => solid ? (
    <SIconBase solid={solid} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="solid-fill" fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z"/>
      <path className="white-stroke" d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path className="white-stroke" d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </SIconBase>
    ) : (
      <SIconBase width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.0002 17.4934V12.5067" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15.9988 21.5C15.8148 21.5 15.6655 21.6493 15.6668 21.8333C15.6668 22.0173 15.8162 22.1666 16.0002 22.1666C16.1842 22.1666 16.3335 22.0173 16.3335 21.8333C16.3335 21.6493 16.1842 21.5 15.9988 21.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7053 5.51863L28.9173 23.3906C30.104 25.468 28.604 28.0533 26.212 28.0533H5.78801C3.39468 28.0533 1.89468 25.468 3.08268 23.3906L13.2947 5.51863C14.4907 3.42397 17.5093 3.42397 18.7053 5.51863Z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </SIconBase>
    ),
};

export const IconWarning: FC<IIconSolid> = ({ size = 24, solid }) => IconSize[size](solid);
