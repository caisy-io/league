import * as React from "react";

function SvgAd(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ad_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ad_svg__b">
          <stop stopColor="#1537D1" offset="0%" />
          <stop stopColor="#0522A5" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ad_svg__c">
          <stop stopColor="#EA3058" offset="0%" />
          <stop stopColor="#CE173E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ad_svg__d">
          <stop stopColor="#FFCF3C" offset="0%" />
          <stop stopColor="#FECB2F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ad_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#ad_svg__b)" d="M0 0h15v15H0z" />
        <path fill="url(#ad_svg__c)" d="M7 0h8v15H7z" />
        <path fill="url(#ad_svg__d)" d="M5 0h5v15H5z" />
        <path fill="#FFEDB1" d="M6.5 6.5h1V7h-1z" />
        <path
          d="M6.665 7.96c.025.295.292.54.587.54h.496a.607.607 0 00.587-.54l.122-1.46H6.543l.122 1.46zm-.624-1.465A.446.446 0 016.495 6h2.01c.273 0 .477.216.454.495l-.126 1.506c-.046.552-.53.999-1.085.999h-.496a1.105 1.105 0 01-1.085-.999L6.04 6.495h.001z"
          fill="#D32E28"
          fillRule="nonzero"
        />
        <path fill="#D32E28" d="M6.5 7h2v.5h-2z" />
      </g>
    </svg>
  );
}

export default SvgAd;
