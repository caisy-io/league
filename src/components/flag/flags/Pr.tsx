import * as React from "react";

function SvgPr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pr_svg__a">
          <stop stopColor="#FA2222" offset="0%" />
          <stop stopColor="#ED0000" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pr_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pr_svg__c">
          <stop stopColor="#1D63F9" offset="0%" />
          <stop stopColor="#0650F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pr_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 3h15v3H0V3zm0 6h15v3H0V9z" fill="url(#pr_svg__b)" fillRule="nonzero" />
        <path fill="url(#pr_svg__c)" d="M0 0l10 7.5L0 15z" />
        <path
          fill="url(#pr_svg__b)"
          d="M3.5 8.456L2.03 9.523l.561-1.728-1.469-1.068h1.816L3.5 5l.562 1.727h1.816l-1.47 1.068.561 1.728z"
        />
      </g>
    </svg>
  );
}

export default SvgPr;
