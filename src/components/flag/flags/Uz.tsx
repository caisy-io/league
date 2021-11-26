import * as React from "react";

function SvgUz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="uz_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="uz_svg__c">
          <stop stopColor="#04AAC8" offset="0%" />
          <stop stopColor="#009AB6" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="uz_svg__e">
          <stop stopColor="#23C840" offset="0%" />
          <stop stopColor="#1EB639" offset="100%" />
        </linearGradient>
        <path id="uz_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="uz_svg__d" fill="#fff">
          <use xlinkHref="#uz_svg__a" />
        </mask>
        <use fill="url(#uz_svg__b)" xlinkHref="#uz_svg__a" />
        <path fill="url(#uz_svg__c)" mask="url(#uz_svg__d)" d="M0 0h21v5H0z" />
        <path fill="url(#uz_svg__e)" mask="url(#uz_svg__d)" d="M0 10h21v5H0z" />
        <path
          d="M0 5h21v5H0V5zm4.334-3.747a1.5 1.5 0 100 2.495 1.25 1.25 0 110-2.495zM5.5 4a.5.5 0 110-1 .5.5 0 010 1zm2-2a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zm-2 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#uz_svg__b)"
          fillRule="nonzero"
          mask="url(#uz_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgUz;
