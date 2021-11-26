import * as React from "react";

function SvgUm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="um_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="um_svg__c">
          <stop stopColor="#D02F44" offset="0%" />
          <stop stopColor="#B12537" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="um_svg__e">
          <stop stopColor="#46467F" offset="0%" />
          <stop stopColor="#3C3C6D" offset="100%" />
        </linearGradient>
        <path id="um_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="um_svg__d" fill="#fff">
          <use xlinkHref="#um_svg__a" />
        </mask>
        <use fill="url(#um_svg__b)" xlinkHref="#um_svg__a" />
        <path
          d="M0 0h21v1H0V0zm0 2h21v1H0V2zm0 2h21v1H0V4zm0 2h21v1H0V6zm0 2h21v1H0V8zm0 2h21v1H0v-1zm0 2h21v1H0v-1zm0 2h21v1H0v-1z"
          fill="url(#um_svg__c)"
          fillRule="nonzero"
          mask="url(#um_svg__d)"
        />
        <path fill="url(#um_svg__e)" mask="url(#um_svg__d)" d="M0 0h9v7H0z" />
        <path
          d="M1.5 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm-5 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1 1a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#um_svg__b)"
          fillRule="nonzero"
          mask="url(#um_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgUm;
