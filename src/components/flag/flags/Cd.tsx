import * as React from "react";

function SvgCd(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cd_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cd_svg__c">
          <stop stopColor="#158AFF" offset="0%" />
          <stop stopColor="#007FFF" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cd_svg__e">
          <stop stopColor="#CE1120" offset="0%" />
          <stop stopColor="#E11B2B" offset="100%" />
        </linearGradient>
        <path id="cd_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="cd_svg__d" fill="#fff">
          <use xlinkHref="#cd_svg__a" />
        </mask>
        <use fill="url(#cd_svg__b)" xlinkHref="#cd_svg__a" />
        <path fill="url(#cd_svg__c)" mask="url(#cd_svg__d)" d="M.004.003h15v15h-15z" />
        <g mask="url(#cd_svg__d)">
          <path fill="#FDD216" d="M24.273 3.906l-25.84 13.166-2.723-5.346L21.55-1.44z" />
          <path fill="url(#cd_svg__e)" transform="rotate(153 13.007 8.034)" d="M.767 7.634h29v4h-29z" />
        </g>
        <path
          fill="#FDD216"
          d="M3.504 4.478l-1.47 1.047.542-1.721-1.45-1.074 1.805-.016.573-1.711.573 1.71 1.804.017-1.45 1.074.542 1.721z"
        />
      </g>
    </svg>
  );
}

export default SvgCd;
