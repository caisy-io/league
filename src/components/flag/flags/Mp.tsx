import * as React from "react";

function SvgMp(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mp_svg__a">
          <stop stopColor="#1E8BD6" offset="0%" />
          <stop stopColor="#1074BA" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mp_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="mp_svg__c">
          <stop stopColor="#A9A7A9" offset="0%" />
          <stop stopColor="#8C8A8C" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#mp_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M5.5 10.5a5 5 0 100-10 5 5 0 000 10zm0-1a4 4 0 110-8 4 4 0 010 8z"
          fill="url(#mp_svg__b)"
          fillRule="nonzero"
          transform="translate(2 2)"
        />
        <path
          d="M3.938 3.997C3.972 3.447 4.443 3 4.999 3h1.002c.552 0 1.027.453 1.061.997l.376 6.006a.927.927 0 01-.947.997H4.509a.935.935 0 01-.947-.997l.376-6.006z"
          fill="url(#mp_svg__c)"
          transform="translate(2 2)"
        />
        <path
          fill="url(#mp_svg__b)"
          d="M5.5 7.515L3.443 8.982l.759-2.41-2.03-1.504 2.526-.022L5.5 2.65l.802 2.396 2.527.022-2.03 1.504.758 2.41z"
          transform="translate(2 2)"
        />
      </g>
    </svg>
  );
}

export default SvgMp;
