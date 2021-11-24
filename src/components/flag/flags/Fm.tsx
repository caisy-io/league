import * as React from "react";

function SvgFm(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fm_svg__a">
          <stop stopColor="#95CEF5" offset="0%" />
          <stop stopColor="#78B3DC" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fm_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#fm_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M7.5 5.185l-.897.618.302-1.058-.855-.674 1.082-.035L7.5 3l.368 1.036 1.082.035-.855.674.302 1.058-.897-.618zm0 6.197L6.603 12l.302-1.057-.855-.675 1.082-.035.368-1.036.368 1.036 1.082.035-.855.675L8.397 12l-.897-.618zm3.05-3.099l-.897.618.302-1.057-.855-.675 1.082-.035.368-1.035.367 1.035L12 7.17l-.855.675.301 1.057-.896-.618zm-6.1 0l-.896.618.301-1.057L3 7.169l1.083-.035L4.45 6.1l.368 1.035L5.9 7.17l-.855.675.302 1.057-.897-.618z"
          fill="url(#fm_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgFm;
