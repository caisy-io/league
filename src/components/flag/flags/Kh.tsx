import * as React from "react";

function SvgKh(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kh_svg__a">
          <stop stopColor="#0F3EB6" offset="0%" />
          <stop stopColor="#09339F" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kh_svg__b">
          <stop stopColor="#ED1A3C" offset="0%" />
          <stop stopColor="#DE0B2D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kh_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v4H0V0zm0 11h15v4H0v-4z" fill="url(#kh_svg__a)" fillRule="nonzero" />
        <path fill="url(#kh_svg__b)" d="M0 4h15v7H0z" />
        <path
          d="M4.5 8h1v2h-2l1-2zM6 8h3v2H6V8zm3.5 0h1l1 2h-2V8zm0-1.492A.51.51 0 0110 6a.5.5 0 01.5.508V7.5h-1v-.992zM6 6.545h1v-.547c0-.275.232-.498.5-.498.276 0 .5.222.5.498v.547h1V7.5H6v-.955zm-1.5-.037A.51.51 0 015 6a.5.5 0 01.5.508V7.5h-1v-.992z"
          fill="url(#kh_svg__c)"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgKh;
