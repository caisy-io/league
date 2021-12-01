import * as React from "react";

function SvgTw(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="93.767%" id="tw_svg__a">
          <stop stopColor="#FE3030" offset="0%" />
          <stop stopColor="red" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tw_svg__b">
          <stop stopColor="#0909B6" offset="0%" />
          <stop stopColor="#000096" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tw_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tw_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#tw_svg__b)" d="M0 8h11V0H0z" />
        <path
          fill="url(#tw_svg__c)"
          d="M5.5 5.25l-.957 1.06.073-1.426-1.426.073L4.25 4l-1.06-.957 1.426.073-.073-1.426.957 1.06.957-1.06-.073 1.426 1.426-.073L6.75 4l1.06.957-1.426-.073.073 1.426z"
        />
      </g>
    </svg>
  );
}

export default SvgTw;
