import * as React from "react";

function SvgMv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mv_svg__a">
          <stop stopColor="#F32249" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mv_svg__b">
          <stop stopColor="#15A04F" offset="0%" />
          <stop stopColor="#0F7E3D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mv_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mv_svg__a)" d="M0 0h15v15H0z" />
        <rect fill="url(#mv_svg__b)" x={1} y={2} width={13} height={11} rx={0.5} />
        <path d="M9.246 4.08a3.5 3.5 0 100 6.84 3.501 3.501 0 010-6.838V4.08z" fill="url(#mv_svg__c)" />
      </g>
    </svg>
  );
}

export default SvgMv;
