import * as React from "react";

function SvgSn(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sn_svg__a">
          <stop stopColor="#F13642" offset="0%" />
          <stop stopColor="#E1202C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sn_svg__b">
          <stop stopColor="#17A052" offset="0%" />
          <stop stopColor="#108442" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sn_svg__c">
          <stop stopColor="#FFF166" offset="0%" />
          <stop stopColor="#FDEE54" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sn_svg__a)" d="M7 0h8v15H7z" />
        <path fill="url(#sn_svg__b)" d="M0 0h5v15H0z" />
        <path fill="url(#sn_svg__c)" d="M5 0h5v15H5z" />
        <path
          fill="url(#sn_svg__b)"
          d="M7.5 8.338L6.573 9l.312-1.132L6 7.145l1.12-.037L7.5 6l.38 1.108L9 7.145l-.885.723L8.427 9z"
        />
      </g>
    </svg>
  );
}

export default SvgSn;
