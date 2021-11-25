import * as React from "react";

function SvgBv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bv_svg__b">
          <stop stopColor="#F14247" offset="0%" />
          <stop stopColor="#ED2F35" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bv_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bv_svg__e">
          <stop stopColor="#0A3A85" offset="0%" />
          <stop stopColor="#032A67" offset="100%" />
        </linearGradient>
        <path id="bv_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bv_svg__c" fill="#fff">
          <use xlinkHref="#bv_svg__a" />
        </mask>
        <use fill="url(#bv_svg__b)" xlinkHref="#bv_svg__a" />
        <g mask="url(#bv_svg__c)">
          <path fill="url(#bv_svg__d)" d="M0 9h6v6h3V9h12V6H9V0H6v6H0z" />
          <path fill="url(#bv_svg__e)" d="M0 8h7v7h1V8h13V7H8V0H7v7H0z" />
        </g>
      </g>
    </svg>
  );
}

export default SvgBv;
