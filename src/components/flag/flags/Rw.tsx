import * as React from "react";

function SvgRw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rw_svg__a">
          <stop stopColor="#2D754D" offset="0%" />
          <stop stopColor="#235F3E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rw_svg__b">
          <stop stopColor="#25B1EB" offset="0%" />
          <stop stopColor="#1AA3DC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rw_svg__c">
          <stop stopColor="#FAD546" offset="0%" />
          <stop stopColor="#FAD12F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="rw_svg__d">
          <stop stopColor="#EDC738" offset="0%" />
          <stop stopColor="#E5BE2A" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#rw_svg__a)" d="M0 11h15v4H0z" />
        <path fill="url(#rw_svg__b)" d="M0 0h15v7H0z" />
        <path fill="url(#rw_svg__c)" d="M0 7h15v4H0z" />
        <path
          fill="url(#rw_svg__d)"
          d="M11.998 4.5l-.765.848.058-1.14-1.14.057.847-.765-.848-.765 1.14.058-.057-1.14.765.847.765-.848-.058 1.14 1.14-.057-.847.765.848.765-1.14-.058.057 1.14z"
        />
      </g>
    </svg>
  );
}

export default SvgRw;
