import * as React from "react";

function SvgEt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__b">
          <stop stopColor="#20AA46" offset="0%" />
          <stop stopColor="#168835" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__c">
          <stop stopColor="#E92F3B" offset="0%" />
          <stop stopColor="#D81824" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__d">
          <stop stopColor="#FADF50" offset="0%" />
          <stop stopColor="#FCDC34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__e">
          <stop stopColor="#205CCA" offset="0%" />
          <stop stopColor="#154BAD" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="et_svg__f">
          <stop stopColor="#FFDB3D" offset="0%" />
          <stop stopColor="#FDD420" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#et_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#et_svg__b)" d="M0 0h15v5H0z" />
        <path fill="url(#et_svg__c)" d="M0 10h15v5H0z" />
        <path fill="url(#et_svg__d)" d="M0 5h15v5H0z" />
        <g transform="translate(4 4)">
          <circle fill="url(#et_svg__e)" cx={3.5} cy={3.5} r={3.5} />
          <path
            d="M3.5 4.475L2.03 5.523 2.574 3.8l-1.45-1.074 1.804-.016L3.5 1l.573 1.711 1.805.016-1.45 1.074.541 1.722L3.5 4.475zm0-.614l.544.388-.2-.637.536-.398-.668-.006-.212-.634-.212.634-.668.006.537.398-.201.637.544-.388z"
            fill="url(#et_svg__f)"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgEt;
