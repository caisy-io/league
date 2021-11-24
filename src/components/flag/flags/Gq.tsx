import * as React from "react";

function SvgGq(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gq_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gq_svg__b">
          <stop stopColor="#EC3938" offset="0%" />
          <stop stopColor="#E12524" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gq_svg__c">
          <stop stopColor="#51B422" offset="0%" />
          <stop stopColor="#429919" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gq_svg__d">
          <stop stopColor="#258DE7" offset="0%" />
          <stop stopColor="#1276CC" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gq_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#gq_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#gq_svg__c)" d="M0 0h15v5H0z" />
        <path fill="url(#gq_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#gq_svg__d)" d="M0 0l5 7.5L0 15z" />
        <path
          d="M7.446 8.83a.73.73 0 00.175-.425l.008-1.264a.25.25 0 00-.253-.243h-.242c-.14 0-.176-.078-.08-.174l.652-.652a.247.247 0 01.348 0l.652.652c.096.096.057.174-.08.174h-.242a.253.253 0 00-.254.243v1.264c0 .134.08.322.17.414l-.09-.092c.093.094.063.17-.082.17h-.496c-.14 0-.176-.08-.078-.181l-.108.114z"
          fill="#159940"
        />
      </g>
    </svg>
  );
}

export default SvgGq;
