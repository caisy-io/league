import * as React from "react";

function SvgDj(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dj_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dj_svg__b">
          <stop stopColor="#1DC837" offset="0%" />
          <stop stopColor="#13AD2B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dj_svg__c">
          <stop stopColor="#82C5F5" offset="0%" />
          <stop stopColor="#6AB3E8" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dj_svg__d">
          <stop stopColor="#E21C21" offset="0%" />
          <stop stopColor="#D7151A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#dj_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#dj_svg__b)" d="M0 7h15v8H0z" />
        <path fill="url(#dj_svg__c)" d="M0 0h15v7.5H0z" />
        <path fill="url(#dj_svg__a)" d="M0 0l7 7.5L0 15z" />
        <path
          fill="url(#dj_svg__d)"
          d="M2.5 8.305L1.571 9l.343-1.143L1 7.145l1.138-.01L2.5 6l.362 1.135L4 7.145l-.915.713L3.426 9z"
        />
      </g>
    </svg>
  );
}

export default SvgDj;
