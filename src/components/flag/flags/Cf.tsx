import * as React from "react";

function SvgCf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__b">
          <stop stopColor="#083D96" offset="0%" />
          <stop stopColor="#053380" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__c">
          <stop stopColor="#37AE39" offset="0%" />
          <stop stopColor="#2E9630" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__d">
          <stop stopColor="#FFD13F" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__e">
          <stop stopColor="#E42346" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cf_svg__f">
          <stop stopColor="#FFD03B" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cf_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#cf_svg__b)" d="M0 0h15v4H0z" />
        <path fill="url(#cf_svg__c)" d="M0 7h15v4H0z" />
        <path fill="url(#cf_svg__d)" d="M0 11h15v4H0z" />
        <path fill="url(#cf_svg__a)" d="M0 4h15v3H0z" />
        <path fill="url(#cf_svg__e)" d="M6 0h4v15H6z" />
        <path
          fill="url(#cf_svg__f)"
          d="M3 2.536L2.38 3l.229-.761L2 1.763l.758-.007L3 1l.24.757.76.007-.61.475.228.761z"
        />
      </g>
    </svg>
  );
}

export default SvgCf;
