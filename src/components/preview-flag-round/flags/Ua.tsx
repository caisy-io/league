import * as React from "react";

function SvgUa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ua_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ua_svg__b">
          <stop stopColor="#156DD1" offset="0%" />
          <stop stopColor="#0D5EB9" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ua_svg__c">
          <stop stopColor="#FFD948" offset="0%" />
          <stop stopColor="#FFD430" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ua_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ua_svg__b)" d="M0 0h15v7.5H0z" />
        <path fill="url(#ua_svg__c)" d="M0 7.5h15V15H0z" />
      </g>
    </svg>
  );
}

export default SvgUa;
