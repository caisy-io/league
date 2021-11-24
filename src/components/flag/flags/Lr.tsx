import * as React from "react";

function SvgLr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lr_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lr_svg__c">
          <stop stopColor="#E1244A" offset="0%" />
          <stop stopColor="#BE1134" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lr_svg__e">
          <stop stopColor="#0C3F8E" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <path id="lr_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="lr_svg__d" fill="#fff">
          <use xlinkHref="#lr_svg__a" />
        </mask>
        <use fill="url(#lr_svg__b)" xlinkHref="#lr_svg__a" />
        <path
          d="M10 0h11v2H10V0zm0 4h11v2H10V4zm0 4h11v2H10V8zM0 12h21v2H0v-2z"
          fill="url(#lr_svg__c)"
          fillRule="nonzero"
          mask="url(#lr_svg__d)"
        />
        <path fill="url(#lr_svg__e)" mask="url(#lr_svg__d)" d="M0 0h10v10H0z" />
        <g mask="url(#lr_svg__d)" fill="#000">
          <path d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z" />
        </g>
        <g mask="url(#lr_svg__d)" fill="url(#lr_svg__b)">
          <path d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgLr;
