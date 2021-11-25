import * as React from "react";

function SvgGg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gg_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gg_svg__c">
          <stop stopColor="#F33349" offset="0%" />
          <stop stopColor="#E51D34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gg_svg__e">
          <stop stopColor="#FCE24C" offset="0%" />
          <stop stopColor="#F9DC38" offset="100%" />
        </linearGradient>
        <path id="gg_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gg_svg__d" fill="#fff">
          <use xlinkHref="#gg_svg__a" />
        </mask>
        <use fill="url(#gg_svg__b)" xlinkHref="#gg_svg__a" />
        <path fill="url(#gg_svg__c)" mask="url(#gg_svg__d)" d="M6 6h-9v3h9v6h3V9h9V6H9V0H6z" />
        <path
          fill="url(#gg_svg__e)"
          mask="url(#gg_svg__d)"
          d="M7 8v4l-.5 1h2L8 12V8h4l1 .5v-2L12 7H8V3l.5-1h-2L7 3v4H3l-1-.5v2L3 8z"
        />
      </g>
    </svg>
  );
}

export default SvgGg;
