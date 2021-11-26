import * as React from "react";

function SvgZw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zw_svg__a">
          <stop stopColor="#369D0C" offset="0%" />
          <stop stopColor="#319209" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zw_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zw_svg__c">
          <stop stopColor="#FFD40E" offset="0%" />
          <stop stopColor="#FFD201" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zw_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="zw_svg__e">
          <stop stopColor="#F12F1F" offset="0%" />
          <stop stopColor="#DE2010" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M1 0h14v2H1V0zm0 13h14v2H1v-2zm0-9h14v2H1V4zm0 5h14v2H1V9z"
          fill="url(#zw_svg__a)"
          fillRule="nonzero"
        />
        <path fill="url(#zw_svg__b)" d="M1 6h14v3H1z" />
        <path d="M1 2h14v2H1V2zm0 9h14v2H1v-2z" fill="url(#zw_svg__c)" fillRule="nonzero" />
        <path fill="url(#zw_svg__b)" d="M0 15V0h1l10 7.5L1 15z" />
        <path fill="url(#zw_svg__d)" d="M0 13.75L8.333 7.5 0 1.25z" />
        <path
          fill="url(#zw_svg__e)"
          d="M3 8.475L1.53 9.523 2.074 7.8.623 6.727l1.804-.016L3 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
}

export default SvgZw;
