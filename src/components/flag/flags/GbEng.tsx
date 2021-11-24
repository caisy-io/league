import * as React from "react";

function SvgGbEng(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-eng_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-eng_svg__c">
          <stop stopColor="#E82739" offset="0%" />
          <stop stopColor="#CA1A2B" offset="100%" />
        </linearGradient>
        <path id="gb-eng_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gb-eng_svg__d" fill="#fff">
          <use xlinkHref="#gb-eng_svg__a" />
        </mask>
        <use fill="url(#gb-eng_svg__b)" xlinkHref="#gb-eng_svg__a" />
        <path fill="url(#gb-eng_svg__c)" mask="url(#gb-eng_svg__d)" d="M6 6h-9v3h9v6h3V9h9V6H9V0H6z" />
      </g>
    </svg>
  );
}

export default SvgGbEng;
