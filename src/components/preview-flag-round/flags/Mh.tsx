import * as React from "react";

function SvgMh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mh_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mh_svg__c">
          <stop stopColor="#064DAE" offset="0%" />
          <stop stopColor="#003D91" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mh_svg__e">
          <stop stopColor="#F18D36" offset="0%" />
          <stop stopColor="#DB761E" offset="100%" />
        </linearGradient>
        <path id="mh_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="mh_svg__d" fill="#fff">
          <use xlinkHref="#mh_svg__a" />
        </mask>
        <use fill="url(#mh_svg__b)" xlinkHref="#mh_svg__a" />
        <path fill="url(#mh_svg__c)" mask="url(#mh_svg__d)" d="M0 0h21v15H0z" />
        <path fill="url(#mh_svg__e)" mask="url(#mh_svg__d)" d="M21 0v4L0 15z" />
        <path
          d="M21 8V4L0 15l21-7zM4.839 4.372L4.5 2l-.339 2.372-.911-1.037.468 1.383-1.383-.468 1.037.911L1 5.5l2.372.339-1.037.911 1.383-.468-.468 1.383.911-1.037L4.5 9l.339-2.372.911 1.037-.468-1.383 1.383.468-1.037-.911L8 5.5l-2.372-.339 1.037-.911-1.383.468.468-1.383-.911 1.037z"
          fill="url(#mh_svg__b)"
          fillRule="nonzero"
          mask="url(#mh_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgMh;
