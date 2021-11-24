import * as React from "react";

function SvgEc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ec_svg__a">
          <stop stopColor="#0748AE" offset="0%" />
          <stop stopColor="#003993" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ec_svg__b">
          <stop stopColor="#DE2035" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ec_svg__c">
          <stop stopColor="#FFD935" offset="0%" />
          <stop stopColor="#FDD216" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ec_svg__d">
          <stop stopColor="#FBDC44" offset="0%" />
          <stop stopColor="#FFDC32" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ec_svg__a)" d="M0 7h15v4H0z" />
        <path fill="url(#ec_svg__b)" d="M0 11h15v4H0z" />
        <path fill="url(#ec_svg__c)" d="M0 0h15v7H0z" />
        <path d="M2.3 3a2 2 0 102.4 0L4 5.1H3L2.3 3z" fill="url(#ec_svg__d)" transform="translate(4 3)" />
        <path fill="#5FC0DC" d="M7.5 5.5L8 8H7z" />
        <path
          d="M6.677 3.823a.25.25 0 00-.256-.06l-1.5.5a.25.25 0 10.158.474l1.353-.451.891.89a.25.25 0 00.354 0l.89-.89 1.354.451a.25.25 0 10.158-.474l-1.5-.5a.25.25 0 00-.256.06l-.823.823-.823-.823z"
          fill="#3F2821"
          opacity={0.66}
        />
      </g>
    </svg>
  );
}

export default SvgEc;
