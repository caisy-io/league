import * as React from "react";

function SvgLy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ly_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ly_svg__b">
          <stop stopColor="#34B857" offset="0%" />
          <stop stopColor="#2B9E4A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ly_svg__c">
          <stop stopColor="#F41F34" offset="0%" />
          <stop stopColor="#E60B21" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ly_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ly_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#ly_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#ly_svg__c)" d="M0 0h15v5H0z" />
        <path
          d="M8.333 6.253a1.25 1.25 0 100 2.495 1.5 1.5 0 110-2.495zM8.499 8a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#ly_svg__d)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgLy;
