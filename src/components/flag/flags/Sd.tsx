import * as React from "react";

function SvgSd(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sd_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sd_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sd_svg__c">
          <stop stopColor="#EA1F44" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sd_svg__d">
          <stop stopColor="#12933B" offset="0%" />
          <stop stopColor="#0D722D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sd_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#sd_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#sd_svg__c)" d="M0 0h15v5H0z" />
        <path fill="url(#sd_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#sd_svg__d)" d="M0 0l7 7.5L0 15z" />
      </g>
    </svg>
  );
}

export default SvgSd;
