import * as React from "react";

function SvgMm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mm_svg__a">
          <stop stopColor="#F13D4F" offset="0%" />
          <stop stopColor="#E92C3F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mm_svg__b">
          <stop stopColor="#4AC94B" offset="0%" />
          <stop stopColor="#3BB13C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mm_svg__c">
          <stop stopColor="#FFD043" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mm_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mm_svg__a)" d="M0 10h15v5H0z" />
        <path fill="url(#mm_svg__b)" d="M0 5h15v5H0z" />
        <path fill="url(#mm_svg__c)" d="M0 0h15v5H0z" />
        <path
          fill="url(#mm_svg__d)"
          d="M7.28 9.255l-2.645 1.886.976-3.099L3 6.11l3.247-.029L7.28 3l1.032 3.08 3.248.03-2.61 1.932.975 3.099z"
        />
      </g>
    </svg>
  );
}

export default SvgMm;
