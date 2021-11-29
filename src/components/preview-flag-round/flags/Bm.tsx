import * as React from "react";

function SvgBm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bm_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bm_svg__d">
          <stop stopColor="#DC1F37" offset="0%" />
          <stop stopColor="#CF142C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bm_svg__e">
          <stop stopColor="#042C90" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bm_svg__f">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bm_svg__j">
          <stop stopColor="#E20B0C" offset="0%" />
          <stop stopColor="#D40001" offset="100%" />
        </linearGradient>
        <path id="bm_svg__a" d="M0 0h15v15H0z" />
        <path d="M0 2.5V0h4v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="bm_svg__g" />
        <path d="M0 2.5V0h4v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="bm_svg__i" />
        <path d="M0 2.5V0h4v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="bm_svg__l" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bm_svg__c" fill="#fff">
          <use xlinkHref="#bm_svg__a" />
        </mask>
        <use fill="url(#bm_svg__b)" xlinkHref="#bm_svg__a" />
        <g mask="url(#bm_svg__c)">
          <path fill="url(#bm_svg__d)" d="M2 1h15v15H2z" transform="translate(-2 -1)" />
          <path fill="url(#bm_svg__e)" d="M2 1h9v7H2z" transform="translate(-2 -1)" />
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#bm_svg__b)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#bm_svg__f)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#bm_svg__b)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#bm_svg__f)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
        <g mask="url(#bm_svg__c)">
          <path d="M0 2.5V0h4v2.5C4 4 2 5 2 5S0 4 0 2.5z" fill="url(#bm_svg__b)" transform="translate(9 8)" />
          <g transform="translate(9 8)">
            <mask id="bm_svg__h" fill="#fff">
              <use xlinkHref="#bm_svg__g" />
            </mask>
            <circle fill="#65B5D2" mask="url(#bm_svg__h)" cx={2} cy={3} r={1} />
          </g>
          <g transform="translate(9 8)">
            <mask id="bm_svg__k" fill="#fff">
              <use xlinkHref="#bm_svg__i" />
            </mask>
            <path
              d="M2 2a.5.5 0 110-1 .5.5 0 010 1zM1 3a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
              fill="url(#bm_svg__j)"
              fillRule="nonzero"
              mask="url(#bm_svg__k)"
            />
          </g>
          <g transform="translate(9 8)">
            <mask id="bm_svg__m" fill="#fff">
              <use xlinkHref="#bm_svg__l" />
            </mask>
            <path fill="#2F8F22" mask="url(#bm_svg__m)" d="M0 4h4v1H0z" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgBm;
