import * as React from "react";

function SvgLi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="li_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="li_svg__b">
          <stop stopColor="#0A3B97" offset="0%" />
          <stop stopColor="#042E7D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="li_svg__c">
          <stop stopColor="#E6273E" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#li_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#li_svg__b)" d="M0 0h15v8H0z" />
        <path fill="url(#li_svg__c)" d="M0 7.5h15V15H0z" />
      </g>
    </svg>
  );
}

export default SvgLi;
