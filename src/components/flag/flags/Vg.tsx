import * as React from "react";

function SvgVg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vg_svg__b">
          <stop stopColor="#07319C" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vg_svg__d">
          <stop stopColor="#008339" offset="0%" />
          <stop stopColor="#00612A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vg_svg__e">
          <stop stopColor="#FFD033" offset="0%" />
          <stop stopColor="#FEC403" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vg_svg__f">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="vg_svg__g">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="vg_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="vg_svg__c" fill="#fff">
          <use xlinkHref="#vg_svg__a" />
        </mask>
        <use fill="url(#vg_svg__b)" xlinkHref="#vg_svg__a" />
        <g mask="url(#vg_svg__c)">
          <g transform="translate(9 9.25)">
            <path
              d="M.595 2.188V.625C.595.279.86 0 1.19 0h1.786c.329 0 .595.276.595.625v1.563c0 1.562-1.488 2.187-1.488 2.187S.595 3.75.595 2.187z"
              fill="url(#vg_svg__d)"
            />
            <path
              d="M1.488 1.25A.305.305 0 011.19.937c0-.172.134-.312.298-.312.164 0 .298.14.298.313a.305.305 0 01-.298.312zm0 .625a.305.305 0 01-.298-.313c0-.172.134-.312.298-.312.164 0 .298.14.298.313a.305.305 0 01-.298.312zm0 .625a.305.305 0 01-.298-.313c0-.172.134-.312.298-.312.164 0 .298.14.298.313a.305.305 0 01-.298.312zm0 .625a.305.305 0 01-.298-.313c0-.172.134-.312.298-.312.164 0 .298.14.298.313a.305.305 0 01-.298.312zm1.19 0a.305.305 0 01-.297-.313c0-.172.133-.312.298-.312.164 0 .297.14.297.313a.305.305 0 01-.297.312zm0-.625a.305.305 0 01-.297-.313c0-.172.133-.312.298-.312.164 0 .297.14.297.313a.305.305 0 01-.297.312zm0-.625a.305.305 0 01-.297-.313c0-.172.133-.312.298-.312.164 0 .297.14.297.313a.305.305 0 01-.297.312zm0-.625a.305.305 0 01-.297-.313c0-.172.133-.312.298-.312.164 0 .297.14.297.313a.305.305 0 01-.297.312z"
              fill="url(#vg_svg__e)"
              fillRule="nonzero"
            />
            <circle fill="url(#vg_svg__f)" cx={2.083} cy={1.875} r={1} />
            <path
              d="M.298 3.75c0 .596.813.938 1.785.938.973 0 1.786-.342 1.786-.938a.305.305 0 00-.298-.313.305.305 0 00-.297.313c0 .006-.072.078-.249.152-.24.1-.577.16-.942.16-.364 0-.702-.06-.941-.16-.177-.075-.25-.146-.25-.152a.305.305 0 00-.297-.313.305.305 0 00-.297.313z"
              fill="url(#vg_svg__e)"
            />
          </g>
        </g>
        <g mask="url(#vg_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#vg_svg__f)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#vg_svg__g)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#vg_svg__f)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#vg_svg__g)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgVg;
