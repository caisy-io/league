import * as React from "react";

function SvgTv(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tv_svg__b">
          <stop stopColor="#72AFC8" offset="0%" />
          <stop stopColor="#5D98B0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tv_svg__d">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tv_svg__e">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tv_svg__f">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="tv_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="tv_svg__c" fill="#fff">
          <use xlinkHref="#tv_svg__a" />
        </mask>
        <use fill="url(#tv_svg__b)" xlinkHref="#tv_svg__a" />
        <path
          d="M6.434 12.873L6 13l.127-.434L6 12.133l.434.127.433-.127-.127.433.127.434-.433-.127zm1.84-.613l-.434.127.127-.434-.127-.433.433.126.434-.126-.127.433.127.434-.434-.127zm1.84 0l-.434.127.127-.434-.127-.433.433.126.434-.126-.127.433.127.434-.434-.127zm1.226-1.227l-.434.127.127-.433-.127-.434.434.127.433-.127-.127.434.127.433-.433-.127zm1.226-1.226l-.433.127.127-.434-.127-.434.433.127.434-.127-.127.434.127.434-.434-.127zm-3.68.613l-.433.127.127-.434-.127-.433.434.127.433-.127-.127.433.127.434-.433-.127zm1.227-2.453l-.433.127.127-.434-.127-.433.433.127.434-.127-.127.433.127.434-.434-.127zm1.227-.613l-.434.126.127-.433-.127-.434.434.127.433-.127-.127.434.127.433-.433-.126zm1.226-.614l-.433.127.127-.433L12.133 6l.433.127L13 6l-.127.434.127.433-.434-.127z"
          fill="#FFCD2F"
          fillRule="nonzero"
          mask="url(#tv_svg__c)"
        />
        <path fill="url(#tv_svg__d)" mask="url(#tv_svg__c)" d="M0 0h9v7H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#tv_svg__e)"
          mask="url(#tv_svg__c)"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#tv_svg__f)"
          mask="url(#tv_svg__c)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#tv_svg__e)"
          mask="url(#tv_svg__c)"
        />
        <path fill="url(#tv_svg__f)" mask="url(#tv_svg__c)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
      </g>
    </svg>
  );
}

export default SvgTv;
