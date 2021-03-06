import * as React from "react";

function SvgCn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cn_svg__a">
          <stop stopColor="#F1361D" offset="0%" />
          <stop stopColor="#DF2910" offset="100%" />
        </linearGradient>
        <linearGradient x1="37.059%" y1="1.704%" x2="62.941%" y2="98.296%" id="cn_svg__b">
          <stop stopColor="#FFDC42" offset="0%" />
          <stop stopColor="#FDD217" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cn_svg__c">
          <stop stopColor="#FFDC42" offset="0%" />
          <stop stopColor="#FDD217" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cn_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M10.13 4.483l-.63.383.017-.737-.383-.629.737.017.629-.383-.017.737.383.629-.737-.017h.001zM8.28 2.449l-.726-.123.497-.545.123-.727.545.497.727.123-.497.545-.123.727-.545-.497H8.28zm.366 6.53l-.615.404-.01-.737-.404-.615.737-.01.615-.404.01.737.404.615-.737.01zm1.267-1.987l-.732.082.327-.66-.082-.733.66.327.733-.082-.327.66.082.733-.66-.327h-.001z"
          fill="url(#cn_svg__b)"
          fillRule="nonzero"
        />
        <path
          fill="url(#cn_svg__c)"
          d="M5 6.17L3.237 7.427l.65-2.065-1.74-1.29 2.165-.019L5 2l.688 2.053 2.165.02-1.74 1.289.65 2.065z"
        />
      </g>
    </svg>
  );
}

export default SvgCn;
