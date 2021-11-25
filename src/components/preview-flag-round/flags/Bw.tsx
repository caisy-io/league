import * as React from "react";

function SvgBw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bw_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bw_svg__b">
          <stop stopColor="#8BBDEA" offset="0%" />
          <stop stopColor="#78ABDA" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bw_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bw_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#bw_svg__b)" fillRule="nonzero" />
        <path fill="url(#bw_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#bw_svg__c)" d="M0 6h15v3H0z" />
      </g>
    </svg>
  );
}

export default SvgBw;
