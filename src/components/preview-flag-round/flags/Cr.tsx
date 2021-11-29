import * as React from "react";

function SvgCr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cr_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cr_svg__b">
          <stop stopColor="#06358F" offset="0%" />
          <stop stopColor="#042E7D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cr_svg__c">
          <stop stopColor="#E61F37" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cr_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#cr_svg__b)" fillRule="nonzero" />
        <path fill="url(#cr_svg__a)" d="M0 3h15v9H0z" />
        <path fill="url(#cr_svg__c)" d="M0 5h15v5H0z" />
      </g>
    </svg>
  );
}

export default SvgCr;
