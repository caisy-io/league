import * as React from "react";

function SvgPa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pa_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pa_svg__b">
          <stop stopColor="#E52448" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pa_svg__c">
          <stop stopColor="#1367AE" offset="0%" />
          <stop stopColor="#0A5492" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pa_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#pa_svg__b)" d="M0 0h15v7H0z" />
        <path fill="url(#pa_svg__c)" d="M0 7h15v8H0z" />
        <path d="M0 7V0h7.143v7H0zm7.143 8V7H15v8H7.143z" fill="url(#pa_svg__a)" fillRule="nonzero" />
        <path
          fill="url(#pa_svg__c)"
          d="M3.402 4.32l-1.176.798.396-1.365L1.5 2.882l1.42-.045.482-1.337.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
        <path
          fill="url(#pa_svg__b)"
          d="M11.402 12.32l-1.176.798.396-1.365-1.122-.871 1.42-.045.482-1.337.482 1.337 1.42.045-1.122.871.396 1.365z"
        />
      </g>
    </svg>
  );
}

export default SvgPa;
