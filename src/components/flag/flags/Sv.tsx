import * as React from "react";

function SvgSv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sv_svg__a">
          <stop stopColor="#1B57C4" offset="0%" />
          <stop stopColor="#154BAD" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sv_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sv_svg__c">
          <stop stopColor="#3C7839" offset="0%" />
          <stop stopColor="#31642E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#sv_svg__a)" fillRule="nonzero" />
        <path fill="url(#sv_svg__b)" d="M0 5h15v5H0z" />
        <path d="M1.3.9a2 2 0 102.4 0L3 3H2L1.3.9z" fill="url(#sv_svg__c)" transform="translate(5 5)" />
        <path fill="#F9C92E" d="M7.5 5.5L8 8H7z" />
      </g>
    </svg>
  );
}

export default SvgSv;
