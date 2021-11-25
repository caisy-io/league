import * as React from "react";

function SvgBi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bi_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bi_svg__d">
          <stop stopColor="#E4233B" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bi_svg__e">
          <stop stopColor="#34CD4E" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bi_svg__f">
          <stop stopColor="#DF2239" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <path id="bi_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bi_svg__c" fill="#fff">
          <use xlinkHref="#bi_svg__a" />
        </mask>
        <use fill="url(#bi_svg__b)" xlinkHref="#bi_svg__a" />
        <g mask="url(#bi_svg__c)">
          <path fill="url(#bi_svg__d)" d="M3 1.997h21v15H3z" transform="translate(-6 -2)" />
          <path fill="url(#bi_svg__e)" d="M2.92 1.997l9 7.5-9 7.5z" transform="translate(-6 -2)" />
          <path fill="url(#bi_svg__e)" transform="matrix(-1 0 0 1 33 -2)" d="M15 1.997l9 7.5-9 7.5z" />
          <path
            d="M11.279 6.793L2.039.56.92 2.218l9.24 6.232a3.499 3.499 0 000 2.094L.92 16.777l1.118 1.658 9.24-6.233a3.486 3.486 0 002.222.795c.844 0 1.617-.298 2.222-.795l9.24 6.233 1.118-1.658-9.24-6.233a3.499 3.499 0 000-2.094l9.24-6.232L24.962.56l-9.24 6.233a3.486 3.486 0 00-2.222-.796c-.843 0-1.617.299-2.221.796z"
            fill="url(#bi_svg__b)"
            transform="translate(-6 -2)"
          />
          <path
            d="M13.5 8.497l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm-1.5 2.5l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207zm3 0l-.707.207.207-.707-.207-.707.707.207.707-.207-.207.707.207.707-.707-.207z"
            fill="url(#bi_svg__f)"
            fillRule="nonzero"
            transform="translate(-6 -2)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgBi;
