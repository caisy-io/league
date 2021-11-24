import * as React from "react";

function SvgLgbt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__b">
          <stop stopColor="#F71E24" offset="0%" />
          <stop stopColor="#FB141B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__c">
          <stop stopColor="#FB6C2C" offset="0%" />
          <stop stopColor="#FC6420" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__d">
          <stop stopColor="#FDFC42" offset="0%" />
          <stop stopColor="#FFFD38" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__e">
          <stop stopColor="#238F35" offset="0%" />
          <stop stopColor="#1C7E2C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__f">
          <stop stopColor="#0F62FA" offset="0%" />
          <stop stopColor="#0059FC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lgbt_svg__g">
          <stop stopColor="#820E95" offset="0%" />
          <stop stopColor="#760089" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#lgbt_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#lgbt_svg__b)" d="M0 0h15v2.5H0z" />
        <path fill="url(#lgbt_svg__c)" d="M0 2.5h15V5H0z" />
        <path fill="url(#lgbt_svg__d)" d="M0 5h15v2.5H0z" />
        <path fill="url(#lgbt_svg__e)" d="M0 7.5h15V10H0z" />
        <path fill="url(#lgbt_svg__f)" d="M0 10h15v2.5H0z" />
        <path fill="url(#lgbt_svg__g)" d="M0 12.5h15V15H0z" />
      </g>
    </svg>
  );
}

export default SvgLgbt;
