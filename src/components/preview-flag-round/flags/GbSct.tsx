import * as React from "react";

function SvgGbSct(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-sct_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gb-sct_svg__c">
          <stop stopColor="#1479D0" offset="0%" />
          <stop stopColor="#0A68BA" offset="100%" />
        </linearGradient>
        <path id="gb-sct_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="gb-sct_svg__d" fill="#fff">
          <use xlinkHref="#gb-sct_svg__a" />
        </mask>
        <use fill="url(#gb-sct_svg__b)" xlinkHref="#gb-sct_svg__a" />
        <path fill="url(#gb-sct_svg__c)" mask="url(#gb-sct_svg__d)" d="M-.053-.003h14.936v15H-.053z" />
        <path
          fill="url(#gb-sct_svg__b)"
          mask="url(#gb-sct_svg__d)"
          d="M7.415 6.291L-.737-1.44-1.532.218l7.675 7.28-7.675 7.279.795 1.658 8.152-7.731 8.152 7.73.795-1.657-7.675-7.28L16.362.218l-.795-1.658z"
        />
      </g>
    </svg>
  );
}

export default SvgGbSct;
