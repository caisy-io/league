import * as React from "react";

function SvgTl(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tl_svg__a">
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tl_svg__b">
          <stop stopColor="#FFCC51" offset="0%" />
          <stop stopColor="#FFC63C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tl_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tl_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tl_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#tl_svg__b)" d="M0 0l9 7.5L0 15z" />
        <path fill="url(#tl_svg__c)" d="M0 0l6 7.5L0 15z" />
        <path
          fill="url(#tl_svg__d)"
          transform="rotate(-30 2.5 7.5)"
          d="M2.5 8.305L1.572 9l.342-1.142L1 7.146l1.138-.011L2.499 6l.362 1.135L4 7.146l-.915.712L3.427 9z"
        />
      </g>
    </svg>
  );
}

export default SvgTl;
