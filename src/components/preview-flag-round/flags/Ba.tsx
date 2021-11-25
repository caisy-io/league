import * as React from "react";

function SvgBa(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ba_svg__a">
          <stop stopColor="#0B36B2" offset="0%" />
          <stop stopColor="#042993" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ba_svg__b">
          <stop stopColor="#FFD045" offset="0%" />
          <stop stopColor="#FECA2F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ba_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ba_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ba_svg__b)" d="M15 15V0H5z" />
        <path
          d="M10.4 12.83l-.602.17.176-.58-.176-.58.601.17.601-.17-.176.58L11 13l-.6-.17zm-1.7-2.46l-.601.17.176-.58-.176-.58.6.17.601-.17-.176.58.176.58-.6-.17zM7 7.91l-.6.17.175-.58-.176-.58.601.17.6-.17-.175.58.176.58L7 7.91zM5.3 5.45l-.6.17.176-.58-.176-.58.6.17.601-.17-.176.58.176.58-.6-.17zM3.6 2.99l-.6.17.176-.58L3 2l.6.17.602-.17-.176.58.176.58-.601-.17z"
          fill="url(#ba_svg__c)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgBa;
