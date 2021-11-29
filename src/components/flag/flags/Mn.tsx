import * as React from "react";

function SvgMn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mn_svg__a">
          <stop stopColor="#146BBC" offset="0%" />
          <stop stopColor="#0B5396" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mn_svg__b">
          <stop stopColor="#E43642" offset="0%" />
          <stop stopColor="#C32A34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mn_svg__c">
          <stop stopColor="#F8D246" offset="0%" />
          <stop stopColor="#F9CE2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mn_svg__a)" d="M5 0h5v15H5z" />
        <path d="M0 0h5v15H0V0zm10 0h5v15h-5V0z" fill="url(#mn_svg__b)" fillRule="nonzero" />
        <path
          d="M3 10h1v3H3v-3zm-2 0h1v3H1v-3zm1 2h1l-.5 1-.5-1zm0-2h1l-.5 1-.5-1zm0-1l.5-.5.5.5H2zm.5 1a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#mn_svg__c)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgMn;
