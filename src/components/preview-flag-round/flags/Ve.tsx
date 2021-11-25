import * as React from "react";

function SvgVe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ve_svg__a">
          <stop stopColor="#063191" offset="0%" />
          <stop stopColor="#03287C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ve_svg__b">
          <stop stopColor="#E2213B" offset="0%" />
          <stop stopColor="#CD1931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ve_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ve_svg__d">
          <stop stopColor="#FFD044" offset="0%" />
          <stop stopColor="#FFCB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ve_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#ve_svg__b)" d="M0 10h15v5H0z" />
        <path
          d="M7.5 7a.5.5 0 110-1 .5.5 0 010 1zm-2 .5a.5.5 0 110-1 .5.5 0 010 1zm4 0a.5.5 0 110-1 .5.5 0 010 1zM4.5 9a.5.5 0 110-1 .5.5 0 010 1zm6 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#ve_svg__c)"
          fillRule="nonzero"
        />
        <path fill="url(#ve_svg__d)" d="M0 0h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgVe;
