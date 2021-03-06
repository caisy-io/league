import * as React from "react";

function SvgSr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sr_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sr_svg__b">
          <stop stopColor="#43924C" offset="0%" />
          <stop stopColor="#3A7E42" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sr_svg__c">
          <stop stopColor="#CD153A" offset="0%" />
          <stop stopColor="#B31031" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sr_svg__d">
          <stop stopColor="#F5D24B" offset="0%" />
          <stop stopColor="#ECC736" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sr_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#sr_svg__b)" fillRule="nonzero" />
        <path fill="url(#sr_svg__a)" d="M0 3h15v9H0z" />
        <path fill="url(#sr_svg__c)" d="M0 5h15v5H0z" />
        <path
          fill="url(#sr_svg__d)"
          d="M7.378 8.775l-1.47.998.495-1.706L5 6.977l1.776-.056.602-1.671.602 1.67 1.776.057-1.403 1.09.494 1.706z"
        />
      </g>
    </svg>
  );
}

export default SvgSr;
