import * as React from "react";

function SvgCw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cw_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cw_svg__b">
          <stop stopColor="#0543A8" offset="0%" />
          <stop stopColor="#00307D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cw_svg__c">
          <stop stopColor="#FCC747" offset="0%" />
          <stop stopColor="#FEC539" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cw_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#cw_svg__b)" d="M0 0h15v15H0z" />
        <path fill="url(#cw_svg__c)" d="M0 10h15v2H0z" />
        <path
          d="M6.5 6.267l-1.176.851.447-1.381-1.173-.855 1.451-.003L6.5 3.5l.45 1.38 1.452.002-1.173.855.447 1.381L6.5 6.267zM3 3.575l-.882.639.335-1.036-.88-.642 1.089-.001L3 1.5l.338 1.035 1.089.001-.88.642.335 1.036L3 3.575z"
          fill="url(#cw_svg__a)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgCw;
