import * as React from "react";

function SvgEu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eu_svg__a">
          <stop stopColor="#043CAE" offset="0%" />
          <stop stopColor="#00339A" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eu_svg__b">
          <stop stopColor="#FFD429" offset="0%" />
          <stop stopColor="#FC0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#eu_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M7.5 3.163l-.681.2.2-.682-.2-.681.681.2.681-.2-.2.681.2.682-.681-.2zm0 9.638L6.819 13l.2-.681-.2-.682.681.2.681-.2-.2.682.2.681-.681-.2zm4.819-4.82l-.682.2.2-.681-.2-.681.682.2.681-.2-.2.681.2.681-.681-.2zm-9.638 0l-.681.2.2-.681-.2-.681.681.2.682-.2-.2.681.2.681-.682-.2zm8.992-2.408l-.681.199.2-.681-.2-.682.68.2.682-.2-.2.682.2.681-.681-.2zM3.327 10.39l-.681.2.2-.682-.2-.681.681.2.681-.2-.2.681.2.682-.68-.2zM9.91 3.81l-.681.2.2-.682-.2-.681.681.2.682-.2-.2.681.2.681-.682-.2zm-4.818 8.346l-.682.2.2-.682-.2-.681.682.2.681-.2-.2.68.2.682-.681-.2zm6.582-1.764l-.681.2.2-.682-.2-.681.68.2.682-.2-.2.681.2.682-.681-.2zM3.327 5.573l-.681.199.2-.681-.2-.682.681.2.681-.2-.2.682.2.681-.68-.2zm6.582 6.582l-.681.2.2-.682-.2-.681.681.2.682-.2-.2.68.2.682-.682-.2zM5.091 3.809l-.682.2.2-.682-.2-.681.682.2.681-.2-.2.681.2.681-.681-.2z"
          fill="url(#eu_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgEu;
