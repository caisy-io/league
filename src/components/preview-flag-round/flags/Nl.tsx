import * as React from "react";

function SvgNl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nl_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nl_svg__b">
          <stop stopColor="#CA2B39" offset="0%" />
          <stop stopColor="#AC1F2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nl_svg__c">
          <stop stopColor="#2C56A2" offset="0%" />
          <stop stopColor="#244889" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#nl_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#nl_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#nl_svg__c)" d="M0 10h15v5H0z" />
        <path fill="url(#nl_svg__a)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgNl;
