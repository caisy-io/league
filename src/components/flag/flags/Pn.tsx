import * as React from "react";

function SvgPn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__d">
          <stop stopColor="#1F8BDE" offset="0%" />
          <stop stopColor="#1075C2" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__f">
          <stop stopColor="#F7E14A" offset="0%" />
          <stop stopColor="#F7DE38" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__i">
          <stop stopColor="#4B8C36" offset="0%" />
          <stop stopColor="#397127" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__k">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pn_svg__l">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="pn_svg__a" d="M0 0h15v15H0z" />
        <path
          d="M0 2.5V.364C0 .163.172 0 .398 0h3.204C3.822 0 4 .162 4 .364V2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z"
          id="pn_svg__e"
        />
        <path
          d="M0 2.5V.364C0 .163.172 0 .398 0h3.204C3.822 0 4 .162 4 .364V2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z"
          id="pn_svg__h"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="pn_svg__c" fill="#fff">
          <use xlinkHref="#pn_svg__a" />
        </mask>
        <use fill="url(#pn_svg__b)" xlinkHref="#pn_svg__a" />
        <g mask="url(#pn_svg__c)">
          <path
            d="M0 2.5V.364C0 .163.172 0 .398 0h3.204C3.822 0 4 .162 4 .364V2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z"
            fill="url(#pn_svg__d)"
            transform="translate(9 9)"
          />
          <g transform="translate(9 9)">
            <mask id="pn_svg__g" fill="#fff">
              <use xlinkHref="#pn_svg__e" />
            </mask>
            <path fill="url(#pn_svg__f)" mask="url(#pn_svg__g)" d="M-.4 4.286L2 0l2.4 4.286v1.428H-.4z" />
          </g>
          <g transform="translate(9 9)">
            <mask id="pn_svg__j" fill="#fff">
              <use xlinkHref="#pn_svg__h" />
            </mask>
            <path fill="url(#pn_svg__i)" mask="url(#pn_svg__j)" d="M0 4.37v.987h4V4.37L2 .799z" />
          </g>
        </g>
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#pn_svg__k)"
          mask="url(#pn_svg__c)"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#pn_svg__l)"
          mask="url(#pn_svg__c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#pn_svg__k)"
          mask="url(#pn_svg__c)"
        />
        <path fill="url(#pn_svg__l)" mask="url(#pn_svg__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </g>
    </svg>
  );
}

export default SvgPn;
