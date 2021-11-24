import * as React from "react";

function SvgCz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cz_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cz_svg__b">
          <stop stopColor="#E8252A" offset="0%" />
          <stop stopColor="#D7151A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cz_svg__c">
          <stop stopColor="#17579E" offset="0%" />
          <stop stopColor="#10457F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cz_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#cz_svg__b)" d="M0 7.5h15v8H0z" />
        <path fill="url(#cz_svg__a)" d="M0 0h15v7.5H0z" />
        <path fill="url(#cz_svg__c)" d="M0 0l7 7.5L0 15z" />
      </g>
    </svg>
  );
}

export default SvgCz;
