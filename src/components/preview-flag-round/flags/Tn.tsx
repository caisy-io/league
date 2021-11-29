import * as React from "react";

function SvgTn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tn_svg__a">
          <stop stopColor="#E92434" offset="0%" />
          <stop stopColor="#E11324" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tn_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tn_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M8.858 4.273a3.5 3.5 0 100 6.453 3.25 3.25 0 010-6.453zM7.5 12a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm1.766-3.622l1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442.919-1.113z"
          fill="url(#tn_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgTn;
