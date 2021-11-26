import * as React from "react";

function SvgTr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tr_svg__a">
          <stop stopColor="#E92434" offset="0%" />
          <stop stopColor="#E11324" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tr_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tr_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M10.052 4.737A3.907 3.907 0 007.75 4C5.679 4 4 5.567 4 7.5S5.679 11 7.75 11c.868 0 1.667-.275 2.302-.737a4.5 4.5 0 110-5.526zm1.214 3.34l-.92 1.113.064-1.442-1.343-.53 1.39-.386.09-1.44.796 1.203 1.398-.36-.898 1.13.775 1.216-1.352-.505v.001z"
          fill="url(#tr_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgTr;
