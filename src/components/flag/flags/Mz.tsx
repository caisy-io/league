import * as React from "react";

function SvgMz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__a">
          <stop stopColor="#FFE547" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__b">
          <stop stopColor="#118C81" offset="0%" />
          <stop stopColor="#0D7168" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__e">
          <stop stopColor="#EF2147" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mz_svg__f">
          <stop stopColor="#FDE444" offset="0%" />
          <stop stopColor="#FCE032" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mz_svg__a)" d="M0 11h15v4H0z" />
        <path fill="url(#mz_svg__b)" d="M0 0h15v4H0z" />
        <path fill="url(#mz_svg__c)" d="M0 4h15v7H0z" />
        <path fill="url(#mz_svg__d)" d="M0 5h15v5H0z" />
        <path fill="url(#mz_svg__e)" d="M0 0l7 7.5L0 15z" />
        <path
          fill="url(#mz_svg__f)"
          d="M2.5 8.292L1.573 9l.354-1.146L1 7.145h1.146L2.5 6l.354 1.145H4l-.927.709L3.427 9z"
        />
      </g>
    </svg>
  );
}

export default SvgMz;
