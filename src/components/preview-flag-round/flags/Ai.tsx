import * as React from "react";

function SvgAi(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ai_svg__b">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ai_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ai_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ai_svg__i">
          <stop stopColor="#FFA51B" offset="0%" />
          <stop stopColor="#FF9A00" offset="100%" />
        </linearGradient>
        <path id="ai_svg__a" d="M0 0h15v15H0z" />
        <path d="M0 2.5V0l1 .5L2 0l1 .5L4 0v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="ai_svg__f" />
        <path d="M0 2.5V0l1 .5L2 0l1 .5L4 0v2.5C4 4 2 5 2 5S0 4 0 2.5z" id="ai_svg__h" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ai_svg__d" fill="#fff">
          <use xlinkHref="#ai_svg__a" />
        </mask>
        <use fill="url(#ai_svg__b)" xlinkHref="#ai_svg__a" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#ai_svg__c)"
          mask="url(#ai_svg__d)"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#ai_svg__e)"
          mask="url(#ai_svg__d)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#ai_svg__c)"
          mask="url(#ai_svg__d)"
        />
        <path fill="url(#ai_svg__e)" mask="url(#ai_svg__d)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <g mask="url(#ai_svg__d)">
          <path d="M9 11.5V9l1 .5 1-.5 1 .5 1-.5v2.5c0 1.5-2 2.5-2 2.5s-2-1-2-2.5z" fill="#000" />
          <path
            d="M0 2.5V0l1 .5L2 0l1 .5L4 0v2.5C4 4 2 5 2 5S0 4 0 2.5z"
            fill="url(#ai_svg__c)"
            transform="translate(9 9)"
          />
          <g transform="translate(9 9)">
            <mask id="ai_svg__g" fill="#fff">
              <use xlinkHref="#ai_svg__f" />
            </mask>
            <path fill="#9ACCFF" mask="url(#ai_svg__g)" d="M0 4h4v1H0z" />
          </g>
          <g transform="translate(9 9)">
            <mask id="ai_svg__j" fill="#fff">
              <use xlinkHref="#ai_svg__h" />
            </mask>
            <path
              d="M2 2a.5.5 0 110-1 .5.5 0 010 1zM1 3a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1z"
              fill="url(#ai_svg__i)"
              fillRule="nonzero"
              mask="url(#ai_svg__j)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgAi;
