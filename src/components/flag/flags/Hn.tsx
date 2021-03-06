import * as React from "react";

function SvgHn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hn_svg__a">
          <stop stopColor="#0884E6" offset="0%" />
          <stop stopColor="#0074D0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hn_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="hn_svg__c">
          <stop stopColor="#0E88E9" offset="0%" />
          <stop stopColor="#0074D0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v5H0V0zm0 10h15v5H0v-5z" fill="url(#hn_svg__a)" fillRule="nonzero" />
        <path fill="url(#hn_svg__b)" d="M0 5h15v5H0z" />
        <path
          d="M7.5 8l-.707.207L7 7.5l-.207-.707L7.5 7l.707-.207L8 7.5l.207.707L7.5 8zm4-1l-.707.207L11 6.5l-.207-.707L11.5 6l.707-.207L12 6.5l.207.707L11.5 7zm0 2l-.707.207L11 8.5l-.207-.707L11.5 8l.707-.207L12 8.5l.207.707L11.5 9zm-8 0l-.707.207L3 8.5l-.207-.707L3.5 8l.707-.207L4 8.5l.207.707L3.5 9zm0-2l-.707.207L3 6.5l-.207-.707L3.5 6l.707-.207L4 6.5l.207.707L3.5 7z"
          fill="url(#hn_svg__c)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgHn;
