import * as React from "react";

function SvgSh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__d">
          <stop stopColor="#A7D2FF" offset="0%" />
          <stop stopColor="#91C6FD" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__f">
          <stop stopColor="#EE7B2D" offset="0%" />
          <stop stopColor="#CC621A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__m">
          <stop stopColor="#FFFC4B" offset="0%" />
          <stop stopColor="#FFFC38" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__o">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sh_svg__p">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="sh_svg__a" d="M0 0h15v15H0z" />
        <path
          d="M0 2.917V.425C0 .19.172 0 .398 0h3.204C3.822 0 4 .19 4 .425v2.492C4 4.583 2 5 2 5s-2-.417-2-2.083z"
          id="sh_svg__e"
        />
        <path
          d="M0 2.917V.425C0 .19.172 0 .398 0h3.204C3.822 0 4 .19 4 .425v2.492C4 4.583 2 5 2 5s-2-.417-2-2.083z"
          id="sh_svg__h"
        />
        <path
          d="M0 2.917V.425C0 .19.172 0 .398 0h3.204C3.822 0 4 .19 4 .425v2.492C4 4.583 2 5 2 5s-2-.417-2-2.083z"
          id="sh_svg__j"
        />
        <path
          d="M0 2.917V.425C0 .19.172 0 .398 0h3.204C3.822 0 4 .19 4 .425v2.492C4 4.583 2 5 2 5s-2-.417-2-2.083z"
          id="sh_svg__l"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="sh_svg__c" fill="#fff">
          <use xlinkHref="#sh_svg__a" />
        </mask>
        <use fill="url(#sh_svg__b)" xlinkHref="#sh_svg__a" />
        <g mask="url(#sh_svg__c)">
          <path
            d="M0 2.917V.425C0 .19.172 0 .398 0h3.204C3.822 0 4 .19 4 .425v2.492C4 4.583 2 5 2 5s-2-.417-2-2.083z"
            fill="url(#sh_svg__d)"
            transform="translate(9 9)"
          />
          <g transform="translate(9 9)">
            <mask id="sh_svg__g" fill="#fff">
              <use xlinkHref="#sh_svg__e" />
            </mask>
            <path
              d="M.4 5.417c.662 0 .8-1.163.8-2.084 0-.92-.138-1.25-.8-1.25s-1.2.33-1.2 1.25c0 .921.538 2.084 1.2 2.084z"
              fill="url(#sh_svg__f)"
              mask="url(#sh_svg__g)"
            />
          </g>
          <g transform="translate(9 9)">
            <mask id="sh_svg__i" fill="#fff">
              <use xlinkHref="#sh_svg__h" />
            </mask>
            <ellipse fill="#A75113" mask="url(#sh_svg__i)" cx={2} cy={3.75} rx={1.2} ry={1} />
          </g>
          <g transform="translate(9 9)">
            <mask id="sh_svg__k" fill="#fff">
              <use xlinkHref="#sh_svg__j" />
            </mask>
            <circle fill="#FFF" mask="url(#sh_svg__k)" cx={2} cy={2.917} r={1} />
          </g>
          <g transform="translate(9 9)">
            <mask id="sh_svg__n" fill="#fff">
              <use xlinkHref="#sh_svg__l" />
            </mask>
            <path fill="url(#sh_svg__m)" mask="url(#sh_svg__n)" d="M0 0h4v1.667H0z" />
          </g>
        </g>
        <g mask="url(#sh_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#sh_svg__o)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#sh_svg__p)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#sh_svg__o)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#sh_svg__p)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgSh;
