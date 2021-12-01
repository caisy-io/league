import * as React from "react";

function SvgSg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sg_svg__a">
          <stop stopColor="#E12237" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sg_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sg_svg__a)" d="M0 0h15v8H0z" />
        <path
          d="M0 8h15v7H0V8zm6.874-6.343a2.5 2.5 0 100 4.686 3 3 0 110-4.686zM5.5 4a.5.5 0 110-1 .5.5 0 010 1zm1 2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm1-2a.5.5 0 110-1 .5.5 0 010 1zm-2-1.5a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#sg_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgSg;
