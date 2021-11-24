import * as React from "react";

function SvgTt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tt_svg__b">
          <stop stopColor="#ED233C" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tt_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tt_svg__e">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <path id="tt_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="tt_svg__d" fill="#fff">
          <use xlinkHref="#tt_svg__a" />
        </mask>
        <use fill="url(#tt_svg__b)" xlinkHref="#tt_svg__a" />
        <path
          fill="url(#tt_svg__c)"
          mask="url(#tt_svg__d)"
          d="M-1.406-.938L5.29-3.805l14.157 16.87L21.562 15l-7.174 2.878L.49 1.315z"
        />
        <path
          fill="url(#tt_svg__e)"
          mask="url(#tt_svg__d)"
          d="M16.782 18.956L-.694-1.872l3.59-3.013 17.477 20.827-3.59 3.013z"
        />
      </g>
    </svg>
  );
}

export default SvgTt;
