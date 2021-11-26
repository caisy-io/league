import * as React from "react";

function SvgCg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cg_svg__b">
          <stop stopColor="#F33630" offset="0%" />
          <stop stopColor="#DC241E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="cg_svg__d">
          <stop stopColor="#009643" offset="0%" />
          <stop stopColor="#09C15B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cg_svg__e">
          <stop stopColor="#FCDF4A" offset="0%" />
          <stop stopColor="#FCE154" offset="100%" />
        </linearGradient>
        <path id="cg_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="cg_svg__c" fill="#fff">
          <use xlinkHref="#cg_svg__a" />
        </mask>
        <path fill="url(#cg_svg__b)" mask="url(#cg_svg__c)" d="M3 14L14.25 0H15v15H3z" />
        <path fill="url(#cg_svg__d)" mask="url(#cg_svg__c)" d="M12 1L.75 15H0V0h12z" />
        <path fill="url(#cg_svg__e)" mask="url(#cg_svg__c)" d="M16.201-1.547L1.812 19.313l-2.57-3.473 14.39-20.86z" />
      </g>
    </svg>
  );
}

export default SvgCg;
