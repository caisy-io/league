import * as React from "react";

function SvgGy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gy_svg__b">
          <stop stopColor="#08C55F" offset="0%" />
          <stop stopColor="#009F49" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gy_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gy_svg__e">
          <stop stopColor="#FFD831" offset="0%" />
          <stop stopColor="#FDD117" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gy_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gy_svg__g">
          <stop stopColor="#E92034" offset="0%" />
          <stop stopColor="#CE1225" offset="100%" />
        </linearGradient>
        <path id="gy_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gy_svg__c" fill="#fff">
          <use xlinkHref="#gy_svg__a" />
        </mask>
        <use fill="url(#gy_svg__b)" xlinkHref="#gy_svg__a" />
        <g mask="url(#gy_svg__c)">
          <path fill="url(#gy_svg__d)" d="M0 15V0h1l21 7v1L1 15z" transform="translate(-1)" />
          <path fill="url(#gy_svg__e)" d="M1 1.054v12.892L20.338 7.5z" transform="translate(-1)" />
          <path fill="url(#gy_svg__f)" d="M0 15V0h1l11.5 7.5L1 15z" transform="translate(-1)" />
          <path fill="url(#gy_svg__g)" d="M1 13.806L10.67 7.5 1 1.194z" transform="translate(-1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgGy;
