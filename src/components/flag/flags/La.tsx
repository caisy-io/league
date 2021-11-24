import * as React from "react";

function SvgLa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="la_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="la_svg__b">
          <stop stopColor="#073A88" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="la_svg__c">
          <stop stopColor="#E2273E" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#la_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#la_svg__b)" d="M0 4h15v7H0z" />
        <path d="M0 0h15v4H0V0zm0 11h15v4H0v-4z" fill="url(#la_svg__c)" fillRule="nonzero" />
        <circle fill="url(#la_svg__a)" cx={7.5} cy={7.5} r={2.5} />
      </g>
    </svg>
  );
}

export default SvgLa;
