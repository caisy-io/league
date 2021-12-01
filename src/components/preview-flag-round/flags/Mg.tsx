import * as React from "react";

function SvgMg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mg_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mg_svg__b">
          <stop stopColor="#149047" offset="0%" />
          <stop stopColor="#0F7E3D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mg_svg__c">
          <stop stopColor="#F84F4B" offset="0%" />
          <stop stopColor="#FA3F3B" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mg_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#mg_svg__b)" d="M0 7.5h15V15H0z" />
        <path fill="url(#mg_svg__c)" d="M0 0h15v8H0z" />
        <path fill="url(#mg_svg__a)" d="M0 0h5v15H0z" />
      </g>
    </svg>
  );
}

export default SvgMg;
