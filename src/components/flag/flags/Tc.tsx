import * as React from "react";

function SvgTc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tc_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tc_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tc_svg__e">
          <stop stopColor="#FFD033" offset="0%" />
          <stop stopColor="#FEC403" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tc_svg__f">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="tc_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="tc_svg__c" fill="#fff">
          <use xlinkHref="#tc_svg__a" />
        </mask>
        <use fill="url(#tc_svg__b)" xlinkHref="#tc_svg__a" />
        <g mask="url(#tc_svg__c)">
          <g transform="translate(9 9)">
            <path
              d="M0 2.5V.714C0 .32.355 0 .8 0h2.4c.442 0 .8.315.8.714V2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z"
              fill="url(#tc_svg__d)"
            />
            <path
              d="M2.115 4.55c.21-.107.422-.239.618-.396.546-.44.867-.983.867-1.654V.714c0-.2-.177-.357-.4-.357H.8C.577.357.4.516.4.714V2.5c0 .67.32 1.215.867 1.654.222.178.468.33.733.452l.115-.056z"
              fill="url(#tc_svg__e)"
            />
            <circle fill="#BA5B1F" cx={2.8} cy={1.429} r={1} />
            <circle fill="#FF9F3E" transform="rotate(-20 1.05 1.45)" cx={1.05} cy={1.45} r={1} />
            <circle fill="#FF937F" transform="rotate(25 1.369 1.462)" cx={1.369} cy={1.462} r={1} />
            <path fill="#01A827" d="M1.6 2.857l.4-.714.4.714v.714h-.8z" />
          </g>
        </g>
        <g mask="url(#tc_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#tc_svg__d)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#tc_svg__f)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#tc_svg__d)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#tc_svg__f)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgTc;
