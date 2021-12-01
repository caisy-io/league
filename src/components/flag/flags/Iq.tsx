import * as React from "react";

function SvgIq(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iq_svg__a">
          <stop stopColor="#DF1E35" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iq_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="iq_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#iq_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#iq_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#iq_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M11 6.256c0-.141.092-.21.232-.14l.536.268a.444.444 0 01.232.365V8.75a.247.247 0 01-.252.249h-.496A.254.254 0 0111 8.744V6.256zm-6 0c0-.141.092-.21.232-.14l.536.268A.444.444 0 016 6.749V8.75a.247.247 0 01-.252.25h-.496A.254.254 0 015 8.744V6.256zm4 .493c0-.138.092-.295.232-.365l.536-.268c.128-.064.232-.002.232.14v2.488A.25.25 0 019.748 9h-.496A.248.248 0 019 8.751V6.749z"
          fill="#0F7A40"
          fillRule="nonzero"
        />
        <path
          d="M7 7.748c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H7.252A.255.255 0 017 8.752V7.748zm-4 0c0-.137.092-.294.232-.364l.536-.268c.128-.064.232-.004.232.126v.803h1.5V9H3.252A.255.255 0 013 8.752V7.748z"
          fill="#0F7A40"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgIq;
