import * as React from "react";

function SvgCk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ck_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ck_svg__c">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ck_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="ck_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ck_svg__d" fill="#fff">
          <use xlinkHref="#ck_svg__a" />
        </mask>
        <use fill="url(#ck_svg__b)" xlinkHref="#ck_svg__a" />
        <path fill="url(#ck_svg__c)" mask="url(#ck_svg__d)" d="M0 0h21v15H0z" />
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#ck_svg__b)"
          mask="url(#ck_svg__d)"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#ck_svg__e)"
          mask="url(#ck_svg__d)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#ck_svg__b)"
          mask="url(#ck_svg__d)"
        />
        <path fill="url(#ck_svg__e)" mask="url(#ck_svg__d)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <path
          d="M10.5 8.714a.357.357 0 110-.714.357.357 0 010 .714zm0 4.286a.357.357 0 110-.714.357.357 0 010 .714zm-1.786-2.5a.357.357 0 11-.714 0 .357.357 0 01.714 0zm4.286 0a.357.357 0 11-.714 0 .357.357 0 01.714 0zm-3.763 1.263a.357.357 0 11-.496.514.357.357 0 01.496-.514zm3.03-3.03a.357.357 0 11-.495.513.357.357 0 01.496-.514zm-.504 3.03a.357.357 0 11.514.496.357.357 0 01-.514-.496zm-3.03-3.03a.357.357 0 11.513.495.357.357 0 01-.514-.496z"
          fill="#FFF"
          fillRule="nonzero"
          mask="url(#ck_svg__d)"
        />
      </g>
    </svg>
  );
}

export default SvgCk;
