import * as React from "react";

function SvgMu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mu_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mu_svg__e">
          <stop stopColor="#1DBB63" offset="0%" />
          <stop stopColor="#17A455" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mu_svg__c">
          <stop stopColor="#222B82" offset="0%" />
          <stop stopColor="#1B236C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mu_svg__d">
          <stop stopColor="#FFD741" offset="0%" />
          <stop stopColor="#FFD430" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mu_svg__b">
          <stop stopColor="#F4374A" offset="0%" />
          <stop stopColor="#E92C3F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mu_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#mu_svg__b)" d="M0 0h15v4H0z" />
        <path fill="url(#mu_svg__c)" d="M0 3.75h15v4H0z" />
        <path fill="url(#mu_svg__d)" d="M0 7.5h15v4H0z" />
        <path fill="url(#mu_svg__e)" d="M0 11.25h15V15H0z" />
      </g>
    </svg>
  );
}

export default SvgMu;
