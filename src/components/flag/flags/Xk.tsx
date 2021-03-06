import * as React from "react";

function SvgXk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xk_svg__a">
          <stop stopColor="#2F5FBF" offset="0%" />
          <stop stopColor="#244EA3" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xk_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="xk_svg__c">
          <stop stopColor="#E9C072" offset="0%" />
          <stop stopColor="#CFA557" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#xk_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M4.4 1.05l-.518.145L4.033.7 3.882.205 4.4.35l.518-.145L4.767.7l.151.495L4.4 1.05zm2.2 0l-.518.145L6.233.7 6.082.205 6.6.35l.518-.145L6.967.7l.151.495L6.6 1.05zm2.2.7l-.518.145.151-.495-.151-.495.518.145.518-.145-.151.495.151.495L8.8 1.75zm1.467 1.4l-.519.145L9.9 2.8l-.152-.495.519.145.518-.145-.152.495.152.495-.518-.145zm-9.534 0l-.518.145.152-.495-.152-.495.518.145.519-.145L1.1 2.8l.152.495-.519-.145zM2.2 1.75l-.518.145.151-.495-.151-.495.518.145.518-.145-.151.495.151.495L2.2 1.75z"
          fill="url(#xk_svg__b)"
          fillRule="nonzero"
          transform="translate(2 4)"
        />
        <path
          fill="url(#xk_svg__c)"
          d="M4.4 5.6l-.733-.35-.734-1.4h.734l.733-.7.367-.7.733-.35.367.35.733.35v.35l.367.35 1.1.7L7.7 5.25 6.6 6.3l-.367-.7-1.1.7V7l-.366-.35z"
          transform="translate(2 4)"
        />
      </g>
    </svg>
  );
}

export default SvgXk;
