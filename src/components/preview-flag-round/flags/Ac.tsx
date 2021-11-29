import * as React from "react";

function SvgAc(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ac_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ac_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ac_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="ac_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ac_svg__c" fill="#fff">
          <use xlinkHref="#ac_svg__a" />
        </mask>
        <use fill="url(#ac_svg__b)" xlinkHref="#ac_svg__a" />
        <g mask="url(#ac_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#ac_svg__d)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#ac_svg__e)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#ac_svg__d)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#ac_svg__e)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
      <path fill="#FFF" d="M13 10.8c0 1.4-.2 2.9-2 3.6-1.8-.7-2-2.2-2-3.6h4z" />
      <path fill="#29DBFF" d="M13 11.4c-.1 1.2-.4 2.4-2 3-1.6-.6-1.9-1.8-2-3" />
      <path fill="#FFF" d="M12.9 12c-.1.9-.6 1.9-2 2.4-1.4-.5-1.8-1.5-2-2.4" />
      <path fill="#29DBFF" d="M12.8 12.6c-.2.6-.7 1.4-1.8 1.9-1.1-.4-1.6-1.2-1.8-1.9" />
      <path fill="#FFF" d="M12.5 13.1c-.2.4-.6.9-1.6 1.3-1-.4-1.3-.9-1.6-1.3" />
      <path fill="#29DBFF" d="M12 13.8c-.3.3-.4.4-1.1.6-.7-.3-.8-.4-1-.6" />
      <path
        fill="#3a3"
        d="M11 12.6l-1 1.3c-.1 0-.4-.3-.5-.5l1.5-1.8 1.4 1.8c-.1.2-.4.5-.5.5M11 7.4L10 9l1 1.4.9-1.5z"
      />
      <ellipse transform="rotate(-8.864 13.824 12.198)" fill="#dc9f47" cx={13.8} cy={12.2} rx={0.5} ry={1.6} />
      <ellipse transform="rotate(-82.224 8.164 12.197)" fill="#dc9f47" cx={8.2} cy={12.2} rx={1.6} ry={0.5} />
    </svg>
  );
}

export default SvgAc;
