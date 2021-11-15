import * as React from "react";

function SvgFo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fo_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fo_svg__c">
          <stop stopColor="#1879D6" offset="0%" />
          <stop stopColor="#0F67BB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fo_svg__e">
          <stop stopColor="#F13E4F" offset="0%" />
          <stop stopColor="#EB2D3F" offset="100%" />
        </linearGradient>
        <path id="fo_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="fo_svg__d" fill="#fff">
          <use xlinkHref="#fo_svg__a" />
        </mask>
        <use fill="url(#fo_svg__b)" xlinkHref="#fo_svg__a" />
        <path fill="url(#fo_svg__c)" mask="url(#fo_svg__d)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
        <path fill="url(#fo_svg__e)" mask="url(#fo_svg__d)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
      </g>
    </svg>
  );
}

export default SvgFo;
