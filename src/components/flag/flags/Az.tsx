import * as React from "react";

function SvgAz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="az_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="az_svg__b">
          <stop stopColor="#24AAD5" offset="0%" />
          <stop stopColor="#1899C2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="az_svg__c">
          <stop stopColor="#ED1845" offset="0%" />
          <stop stopColor="#DE0C39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="az_svg__d">
          <stop stopColor="#21BF75" offset="0%" />
          <stop stopColor="#19AD68" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#az_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#az_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#az_svg__c)" d="M0 5h15v5H0z" />
        <path fill="url(#az_svg__d)" d="M0 10h15v5H0z" />
        <path
          d="M8.333 6.253a1.25 1.25 0 100 2.495 1.5 1.5 0 110-2.495zM8.499 8a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#az_svg__a)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgAz;
