import * as React from "react";

function SvgDk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dk_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="dk_svg__c">
          <stop stopColor="#EF264D" offset="0%" />
          <stop stopColor="#E1143C" offset="100%" />
        </linearGradient>
        <path id="dk_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="dk_svg__d" fill="#fff">
          <use xlinkHref="#dk_svg__a" />
        </mask>
        <use fill="url(#dk_svg__b)" xlinkHref="#dk_svg__a" />
        <path fill="url(#dk_svg__c)" mask="url(#dk_svg__d)" d="M0 0h21v15H0z" />
        <path fill="url(#dk_svg__b)" mask="url(#dk_svg__d)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
      </g>
    </svg>
  );
}

export default SvgDk;
