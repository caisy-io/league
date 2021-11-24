import * as React from "react";

function SvgGi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gi_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gi_svg__d">
          <stop stopColor="#E71924" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gi_svg__e">
          <stop stopColor="#EA1824" offset="0%" />
          <stop stopColor="#D6101B" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gi_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gi_svg__g">
          <stop stopColor="#ECCE3E" offset="0%" />
          <stop stopColor="#D9BC2D" offset="100%" />
        </linearGradient>
        <path id="gi_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gi_svg__c" fill="#fff">
          <use xlinkHref="#gi_svg__a" />
        </mask>
        <use fill="url(#gi_svg__b)" xlinkHref="#gi_svg__a" />
        <path fill="url(#gi_svg__b)" mask="url(#gi_svg__c)" d="M0 0h15v10H0z" />
        <path fill="url(#gi_svg__d)" mask="url(#gi_svg__c)" d="M0 10h15v5H0z" />
        <path
          d="M6 6H5V4.49A.495.495 0 004.495 4h-.99A.49.49 0 003 4.49V8L2 9h11l-1-1V4.49a.495.495 0 00-.505-.49h-.99a.49.49 0 00-.505.49V6H9V3.49A.49.49 0 008.505 3h-2.01A.49.49 0 006 3.49V6z"
          fill="url(#gi_svg__e)"
          mask="url(#gi_svg__c)"
        />
        <path
          d="M4 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1zm3.5 2a.5.5 0 110-1 .5.5 0 010 1zm0-3a.5.5 0 110-1 .5.5 0 010 1zM11 8a.5.5 0 110-1 .5.5 0 010 1zm0-2a.5.5 0 110-1 .5.5 0 010 1z"
          fill="url(#gi_svg__f)"
          fillRule="nonzero"
          mask="url(#gi_svg__c)"
        />
        <path
          d="M7 9.943V12H6v1h2V9.943c.583-.137 1-.508 1-.943 0-.552-.672-1-1.5-1S6 8.448 6 9c0 .435.417.806 1 .943z"
          fill="url(#gi_svg__g)"
          mask="url(#gi_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgGi;
