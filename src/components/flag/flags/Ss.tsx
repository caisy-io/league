import * as React from "react";

function SvgSs(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__a">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__b">
          <stop stopColor="#E22A32" offset="0%" />
          <stop stopColor="#D61C24" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__d">
          <stop stopColor="#2CA244" offset="0%" />
          <stop stopColor="#218736" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__e">
          <stop stopColor="#185AC6" offset="0%" />
          <stop stopColor="#104CAD" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ss_svg__f">
          <stop stopColor="#FDE14A" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ss_svg__a)" d="M0 0h15v4H0z" />
        <path fill="url(#ss_svg__b)" d="M0 5h15v5H0z" />
        <path fill="url(#ss_svg__c)" d="M0 4h15v1H0z" />
        <path fill="url(#ss_svg__d)" d="M0 11h15v4H0z" />
        <path fill="url(#ss_svg__c)" d="M0 10h15v1H0z" />
        <path fill="url(#ss_svg__e)" d="M0 0l7 7.5L0 15z" />
        <path
          fill="url(#ss_svg__f)"
          d="M3.067 7.987l-.683 1.28-.205-1.437L.75 7.576l1.304-.639-.2-1.437 1.01 1.042 1.306-.634-.68 1.283 1.007 1.046z"
        />
      </g>
    </svg>
  );
}

export default SvgSs;
