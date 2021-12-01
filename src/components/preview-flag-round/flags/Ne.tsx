import * as React from "react";

function SvgNe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ne_svg__a">
          <stop stopColor="#F0642F" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ne_svg__b">
          <stop stopColor="#2DCC45" offset="0%" />
          <stop stopColor="#1FAF35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ne_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ne_svg__d">
          <stop stopColor="#E85C27" offset="0%" />
          <stop stopColor="#DF531D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ne_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#ne_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#ne_svg__c)" d="M0 5h15v5H0z" />
        <circle fill="url(#ne_svg__d)" cx={8} cy={7.5} r={2} />
      </g>
    </svg>
  );
}

export default SvgNe;
