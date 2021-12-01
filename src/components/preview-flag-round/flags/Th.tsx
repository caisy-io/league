import * as React from "react";

function SvgTh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="th_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="th_svg__b">
          <stop stopColor="#F12532" offset="0%" />
          <stop stopColor="#EB212E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="th_svg__c">
          <stop stopColor="#322B6C" offset="0%" />
          <stop stopColor="#241F4E" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#th_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#th_svg__b)" fillRule="nonzero" />
        <path fill="url(#th_svg__a)" d="M0 3h15v9H0z" />
        <path fill="url(#th_svg__c)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgTh;
