import * as React from "react";

function SvgTg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tg_svg__a">
          <stop stopColor="#FFD44D" offset="0%" />
          <stop stopColor="#FFCD2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tg_svg__b">
          <stop stopColor="#159A74" offset="0%" />
          <stop stopColor="#0C6A4F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tg_svg__c">
          <stop stopColor="#ED1F45" offset="0%" />
          <stop stopColor="#D01739" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tg_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tg_svg__a)" d="M0 0h15v15H0z" />
        <path d="M6.429 0H15v3H6.429V0zm0 6H15v3H6.429V6zM0 12h15v3H0v-3z" fill="url(#tg_svg__b)" fillRule="nonzero" />
        <path fill="url(#tg_svg__c)" d="M0 0h9v9H0z" />
        <path
          fill="url(#tg_svg__d)"
          d="M4.5 5.67L2.737 6.927l.65-2.065-1.74-1.29 2.165-.019L4.5 1.5l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
}

export default SvgTg;
