import * as React from "react";

function SvgTj(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tj_svg__a">
          <stop stopColor="#D9101C" offset="0%" />
          <stop stopColor="#CA0814" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tj_svg__b">
          <stop stopColor="#0F7811" offset="0%" />
          <stop stopColor="#0A650C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tj_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tj_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#tj_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#tj_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M7.066 8A3.266 3.266 0 017 7.5a.5.5 0 011 0c0 .09-.024.283-.066.5h.57c.274 0 .496.232.496.5 0 .276-.216.5-.495.5h-2.01A.503.503 0 016 8.5c0-.276.216-.5.495-.5h.571zM6.5 7a.5.5 0 110-1 .5.5 0 010 1zm2 0a.5.5 0 110-1 .5.5 0 010 1zm2 1a.5.5 0 110-1 .5.5 0 010 1zm-6 0a.5.5 0 110-1 .5.5 0 010 1z"
          fill="#FAD14E"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgTj;
