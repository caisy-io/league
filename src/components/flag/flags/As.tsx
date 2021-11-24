import * as React from "react";

function SvgAs(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="as_svg__a">
          <stop stopColor="#071585" offset="0%" />
          <stop stopColor="#000B64" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="as_svg__b">
          <stop stopColor="#D32636" offset="0%" />
          <stop stopColor="#BA1827" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="as_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="35.4%" y2="89.131%" id="as_svg__d">
          <stop stopColor="#AB5423" offset="0%" />
          <stop stopColor="#5A3719" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#as_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#as_svg__b)" d="M15 15L0 7.5 15 0z" />
        <path fill="url(#as_svg__c)" d="M15 1L2 7.5 15 14z" />
        <g transform="translate(7 4)">
          <path
            d="M3 3.029c-.088-.089-.604.117-.604.117L1.5 2.25s-.046-.497.375-.75c.319-.191.915-.12 1.5-.375C4.308.717 5.25 0 5.25 0l-.601 1.655s.689.354.601.595c-.026.07-.697.289-.75.375-.099.165.393.215.24.404-.44.545-.99 1.096-.99 1.096L3 3.75s.112-.608 0-.721z"
            fill="url(#as_svg__d)"
          />
          <circle fill="#FFC322" cx={1.125} cy={3.375} r={1} />
          <path d="M.375 4.5h3.75a.375.375 0 000-.75H.375a.375.375 0 000 .75z" fill="#FFC322" />
          <path d="M1.648 5.595L4.273 4.47a.375.375 0 10-.296-.69L1.352 4.905a.375.375 0 10.296.69z" fill="#FFC322" />
        </g>
      </g>
    </svg>
  );
}

export default SvgAs;
