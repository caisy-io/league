import * as React from "react";

function SvgBs(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bs_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bs_svg__b">
          <stop stopColor="#22B7D5" offset="0%" />
          <stop stopColor="#1CACC8" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bs_svg__c">
          <stop stopColor="#FCE569" offset="0%" />
          <stop stopColor="#FADF52" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bs_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bs_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 10h15v5H0v-5zM0 0h15v5H0V0z" fill="url(#bs_svg__b)" fillRule="nonzero" />
        <path fill="url(#bs_svg__c)" d="M0 5h15v5H0z" />
        <path fill="url(#bs_svg__d)" d="M0 0l7 7.5L0 15z" />
      </g>
    </svg>
  );
}

export default SvgBs;
