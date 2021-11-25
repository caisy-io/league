import * as React from "react";

function SvgBo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bo_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bo_svg__b">
          <stop stopColor="#058C3F" offset="0%" />
          <stop stopColor="#007A34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bo_svg__c">
          <stop stopColor="#E63426" offset="0%" />
          <stop stopColor="#D52B1E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bo_svg__d">
          <stop stopColor="#FFEB1F" offset="0%" />
          <stop stopColor="#FAE400" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bo_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#bo_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#bo_svg__c)" d="M0 0h15v5H0z" />
        <path fill="url(#bo_svg__d)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgBo;
