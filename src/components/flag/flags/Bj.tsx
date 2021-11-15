import * as React from "react";

function SvgBj(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bj_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bj_svg__b">
          <stop stopColor="#F12641" offset="0%" />
          <stop stopColor="#E71834" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bj_svg__c">
          <stop stopColor="#FFD648" offset="0%" />
          <stop stopColor="#FCD036" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bj_svg__d">
          <stop stopColor="#17A668" offset="0%" />
          <stop stopColor="#118653" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bj_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#bj_svg__b)" d="M0 7.5h15V15H0z" />
        <path fill="url(#bj_svg__c)" d="M0 0h15v7.5H0z" />
        <path fill="url(#bj_svg__d)" d="M0 0h6v15H0z" />
      </g>
    </svg>
  );
}

export default SvgBj;
