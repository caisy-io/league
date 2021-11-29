import * as React from "react";

function SvgLs(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ls_svg__a">
          <stop stopColor="#0C33B8" offset="0%" />
          <stop stopColor="#05279D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ls_svg__b">
          <stop stopColor="#1DB158" offset="0%" />
          <stop stopColor="#149447" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ls_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ls_svg__d">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ls_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#ls_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#ls_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M1 2.5l.342-1.025c.087-.263.228-.266.316 0L2 2.5l.861 1.291c.077.116.057.279-.055.356 0 0-.306.353-1.306.353S.194 4.147.194 4.147a.27.27 0 01-.055-.356L1 2.5z"
          fill="url(#ls_svg__d)"
          transform="translate(6 5)"
        />
        <path
          d="M7.5 7.5a1 1 0 110-2 1 1 0 010 2zm0 0c.276 0 .5-.724.5-1a.5.5 0 00-1 0c0 .276.224 1 .5 1z"
          fill="#242424"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgLs;
