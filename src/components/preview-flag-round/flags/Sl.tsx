import * as React from "react";

function SvgSl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sl_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sl_svg__b">
          <stop stopColor="#35CE4F" offset="0%" />
          <stop stopColor="#2AB441" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sl_svg__c">
          <stop stopColor="#1C87DB" offset="0%" />
          <stop stopColor="#1175C4" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sl_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#sl_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#sl_svg__c)" d="M0 10h15v5H0z" />
        <path fill="url(#sl_svg__a)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgSl;
