import * as React from "react";

function SvgGw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gw_svg__a">
          <stop stopColor="#1AB558" offset="0%" />
          <stop stopColor="#169E4D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gw_svg__b">
          <stop stopColor="#FFD952" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gw_svg__c">
          <stop stopColor="#E72B42" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gw_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gw_svg__a)" d="M0 7h15v8H0z" />
        <path fill="url(#gw_svg__b)" d="M0 0h15v7.5H0z" />
        <path fill="url(#gw_svg__c)" d="M0 0h8v15H0z" />
        <path
          fill="url(#gw_svg__d)"
          d="M4 8.459L2.53 9.523l.558-1.727-1.466-1.069 1.814-.003L4 5l.564 1.724 1.814.003-1.466 1.07.557 1.726z"
        />
      </g>
    </svg>
  );
}

export default SvgGw;
