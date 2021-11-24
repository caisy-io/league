import * as React from "react";

function SvgBn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bn_svg__b">
          <stop stopColor="#F7E250" offset="0%" />
          <stop stopColor="#F7DF38" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bn_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bn_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <path id="bn_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bn_svg__d" fill="#fff">
          <use xlinkHref="#bn_svg__a" />
        </mask>
        <use fill="url(#bn_svg__b)" xlinkHref="#bn_svg__a" />
        <path fill="url(#bn_svg__c)" mask="url(#bn_svg__d)" d="M-1.5-.279L17.965 9.64l-.732 2.819L-2.233 2.54z" />
        <path fill="url(#bn_svg__e)" mask="url(#bn_svg__d)" d="M-2.233 2.541l19.466 9.919-.733 2.819L-2.965 5.36z" />
      </g>
    </svg>
  );
}

export default SvgBn;
