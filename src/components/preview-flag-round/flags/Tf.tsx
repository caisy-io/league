import * as React from "react";

function SvgTf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tf_svg__a">
          <stop stopColor="#073AB6" offset="0%" />
          <stop stopColor="#002B93" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tf_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tf_svg__c">
          <stop stopColor="#F44653" offset="0%" />
          <stop stopColor="#EE2A39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tf_svg__d">
          <stop stopColor="#1035BB" offset="0%" />
          <stop stopColor="#042396" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tf_svg__a)" d="M0 0h15v15H0z" />
        <path d="M0 0h9.5v7.25c0 .138-.107.25-.254.25H0V0z" fill="url(#tf_svg__b)" />
        <path fill="url(#tf_svg__c)" d="M6 0h3v7H6z" />
        <path fill="url(#tf_svg__d)" d="M0 0h3v7H0z" />
        <path fill="url(#tf_svg__b)" d="M3 0h3v7H3z" />
        <path
          d="M9.714 9h3.572l-.357.714h-1.072v.357h.714l-.357.715h-.357v1.071h-.714V9.714H10.07L9.714 9zm2.857 1.786l.715 1.071h-1.429l.714-1.071zm-2.142 0l.714 1.071H9.714l.715-1.071zm1.071 2.143l-.714-1.072h1.428L11.5 12.93zm2.143-2.5a.357.357 0 110-.715.357.357 0 010 .715zm-4.286 0a.357.357 0 110-.715.357.357 0 010 .715zm.714 2.857a.357.357 0 110-.715.357.357 0 010 .715zm2.858 0a.357.357 0 110-.715.357.357 0 010 .715zM11.5 14a.357.357 0 110-.714.357.357 0 010 .714z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgTf;
