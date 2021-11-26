import * as React from "react";

function SvgSb(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sb_svg__b">
          <stop stopColor="#1DBE4F" offset="0%" />
          <stop stopColor="#159B3F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sb_svg__c">
          <stop stopColor="#0660D4" offset="0%" />
          <stop stopColor="#0051BB" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sb_svg__e">
          <stop stopColor="#2C7442" offset="0%" />
          <stop stopColor="#225B34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sb_svg__f">
          <stop stopColor="#FFD646" offset="0%" />
          <stop stopColor="#FED02F" offset="100%" />
        </linearGradient>
        <path id="sb_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="sb_svg__d" fill="#fff">
          <use xlinkHref="#sb_svg__a" />
        </mask>
        <use fill="url(#sb_svg__b)" xlinkHref="#sb_svg__a" />
        <path fill="url(#sb_svg__c)" mask="url(#sb_svg__d)" d="M0 0h15L0 15z" />
        <path fill="url(#sb_svg__e)" mask="url(#sb_svg__d)" d="M15 0v15H0z" />
        <path fill="url(#sb_svg__f)" mask="url(#sb_svg__d)" d="M0 7h15v2H0z" />
        <path
          d="M2.806 2.925l-.498.294.095-.622L2 2.157l.557-.091.249-.566.25.566.556.092-.403.439.095.622-.498-.294zm3.388 0l-.497.294.095-.622-.404-.44.558-.091.248-.566.25.566.556.092-.403.439.095.622-.498-.294zm0 2.28l-.497.295.095-.623-.404-.44.558-.09.248-.566.25.566.556.091-.403.44.095.622-.498-.294zm-3.388 0l-.498.295.095-.623L2 4.437l.557-.09.249-.566.25.566.556.091-.403.44.095.622-.498-.294zM4.5 4.066l-.497.295.094-.623-.403-.44.557-.091.249-.566.25.567.556.09-.403.44.095.623-.498-.294z"
          fill="#FFF"
          fillRule="nonzero"
          mask="url(#sb_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgSb;
