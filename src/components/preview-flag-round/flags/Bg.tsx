import * as React from "react";

function SvgBg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bg_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bg_svg__b">
          <stop stopColor="#06A77C" offset="0%" />
          <stop stopColor="#00966E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bg_svg__c">
          <stop stopColor="#E32E19" offset="0%" />
          <stop stopColor="#D62612" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#bg_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#bg_svg__b)" d="M0 5h15v5H0z" />
        <path fill="url(#bg_svg__c)" d="M0 10h15v5H0z" />
        <path fill="url(#bg_svg__a)" d="M0 0h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgBg;
