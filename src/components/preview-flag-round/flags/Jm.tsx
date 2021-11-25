import * as React from "react";

function SvgJm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jm_svg__b">
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jm_svg__c">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="jm_svg__e">
          <stop stopColor="#FFD646" offset="0%" />
          <stop stopColor="#FED02F" offset="100%" />
        </linearGradient>
        <path id="jm_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="jm_svg__d" fill="#fff">
          <use xlinkHref="#jm_svg__a" />
        </mask>
        <use fill="url(#jm_svg__b)" fillRule="nonzero" xlinkHref="#jm_svg__a" />
        <path fill="url(#jm_svg__c)" mask="url(#jm_svg__d)" d="M0-.003l6.429 7.5L0 14.997zm15 0v15l-6.429-7.5z" />
        <path
          fill="url(#jm_svg__e)"
          mask="url(#jm_svg__d)"
          d="M7.5 6.291L-.687-1.44-1.486.218l7.709 7.28-7.709 7.279.799 1.658L7.5 8.704l8.187 7.73.799-1.657-7.708-7.28L16.486.218l-.799-1.658z"
        />
      </g>
    </svg>
  );
}

export default SvgJm;
