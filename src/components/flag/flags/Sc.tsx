import * as React from "react";

function SvgSc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__b">
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__c">
          <stop stopColor="#0858B4" offset="0%" />
          <stop stopColor="#013F87" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__e">
          <stop stopColor="#ED3535" offset="0%" />
          <stop stopColor="#D62828" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__f">
          <stop stopColor="#08964F" offset="0%" />
          <stop stopColor="#017B3E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__g">
          <stop stopColor="#FFDD67" offset="0%" />
          <stop stopColor="#FDD856" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sc_svg__h">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <path id="sc_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="sc_svg__d" fill="#fff">
          <use xlinkHref="#sc_svg__a" />
        </mask>
        <use fill="url(#sc_svg__b)" xlinkHref="#sc_svg__a" />
        <path fill="url(#sc_svg__c)" mask="url(#sc_svg__d)" d="M0 0h7L0 15z" />
        <path fill="url(#sc_svg__e)" mask="url(#sc_svg__d)" d="M14 0h7v5L0 15z" />
        <path fill="url(#sc_svg__f)" mask="url(#sc_svg__d)" d="M21 15v-5L0 15z" />
        <path fill="url(#sc_svg__g)" mask="url(#sc_svg__d)" d="M7 0h7L0 15z" />
        <path fill="url(#sc_svg__h)" mask="url(#sc_svg__d)" d="M21 10V5L0 15z" />
      </g>
    </svg>
  );
}

export default SvgSc;
