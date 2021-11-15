import * as React from "react";

function SvgLc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lc_svg__a">
          <stop stopColor="#86D7FF" offset="0%" />
          <stop stopColor="#6BCDFE" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lc_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lc_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lc_svg__d">
          <stop stopColor="#FFDA57" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#lc_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#lc_svg__b)" d="M4.5 0L9 11H0z" transform="translate(3 2)" />
        <path fill="url(#lc_svg__c)" d="M4.5 2L8 11H1z" transform="translate(3 2)" />
        <path fill="url(#lc_svg__d)" d="M4.5 5L9 11H0z" transform="translate(3 2)" />
      </g>
    </svg>
  );
}

export default SvgLc;
