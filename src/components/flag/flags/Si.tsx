import * as React from "react";

function SvgSi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="si_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="si_svg__c">
          <stop stopColor="#0C47B7" offset="0%" />
          <stop stopColor="#073DA4" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="si_svg__e">
          <stop stopColor="#E53B35" offset="0%" />
          <stop stopColor="#D32E28" offset="100%" />
        </linearGradient>
        <path id="si_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="si_svg__d" fill="#fff">
          <use xlinkHref="#si_svg__a" />
        </mask>
        <use fill="url(#si_svg__b)" xlinkHref="#si_svg__a" />
        <path fill="url(#si_svg__c)" mask="url(#si_svg__d)" d="M0 3h21v7H0z" />
        <path fill="url(#si_svg__e)" mask="url(#si_svg__d)" d="M0 10h21v5H0z" />
        <path
          d="M0 5V0h21v5H6.933V4s-.705-.5-1.433-.5C4.772 3.5 4 4 4 4v1H0zm5.5 2a1 1 0 110-2 1 1 0 010 2z"
          fill="url(#si_svg__b)"
          fillRule="nonzero"
          mask="url(#si_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgSi;
