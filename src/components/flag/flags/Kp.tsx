import * as React from "react";

function SvgKp(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kp_svg__a">
          <stop stopColor="#1461B6" offset="0%" />
          <stop stopColor="#0B52A1" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kp_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kp_svg__c">
          <stop stopColor="#F53846" offset="0%" />
          <stop stopColor="#EB2130" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v3H0V0zm0 12h15v3H0v-3z" fill="url(#kp_svg__a)" fillRule="nonzero" />
        <path fill="url(#kp_svg__b)" d="M0 3h15v9H0z" />
        <path fill="url(#kp_svg__c)" d="M0 4h15v7H0z" />
        <path
          d="M7.5 10a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-1.497l1.47 1.02-.516-1.713 1.424-1.083-1.788-.039L7.5 5l-.59 1.688-1.788.04L6.546 7.81 6.03 9.523l1.47-1.02z"
          fill="url(#kp_svg__b)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgKp;
