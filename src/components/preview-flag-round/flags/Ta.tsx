import * as React from "react";

function SvgTa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ta_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ta_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ta_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="ta_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ta_svg__c" fill="#fff">
          <use xlinkHref="#ta_svg__a" />
        </mask>
        <use fill="url(#ta_svg__b)" xlinkHref="#ta_svg__a" />
        <g mask="url(#ta_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#ta_svg__d)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#ta_svg__e)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#ta_svg__d)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#ta_svg__e)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
      <path fill="#2fadf5" d="M12.6 10.3v1c-.1.9-.6 1.7-1.6 2.1-1.1-.4-1.5-1.3-1.6-2.1V9.4h3.2v.9z" />
      <path fill="#FFF" d="M12.6 11.3v.1c-.1.8-.6 1.6-1.5 2-1.1-.4-1.5-1.2-1.6-2v-.1" />
      <path fill="#2fadf5" d="M11 12.4l-.5-1.1h1.1z" />
      <path fill="#FFF" d="M11 10.2l-.5 1.1h1.1z" />
      <ellipse fill="#dc9f47" cx={13.2} cy={12} rx={0.4} ry={1.1} />
      <ellipse fill="#dc9f47" cx={8.8} cy={12} rx={0.4} ry={1.1} />
      <path
        fill="#FFF"
        d="M11 6.9L10.2 8h1.7zM9.3 13.1s.8.7 1.7.7 1.7-.7 1.7-.7l.2.4s-.5.8-1.9.8-1.9-.8-1.9-.8l.2-.4z"
      />
      <ellipse fill="#A5A5A5" cx={11} cy={8.7} rx={0.9} ry={0.6} />
    </svg>
  );
}

export default SvgTa;
