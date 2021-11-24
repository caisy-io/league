import * as React from "react";

function SvgBr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="br_svg__a">
          <stop stopColor="#05AB41" offset="0%" />
          <stop stopColor="#019C39" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="br_svg__b">
          <stop stopColor="#053087" offset="0%" />
          <stop stopColor="#012877" offset="100%" />
        </linearGradient>
        <ellipse id="br_svg__c" cx={2.676} cy={2.864} rx={2.676} ry={2.864} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#br_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M1.323 7.723c-.178-.122-.175-.325 0-.446l5.854-4.054a.613.613 0 01.646 0l5.854 4.054c.178.122.175.325 0 .446l-5.854 4.054a.613.613 0 01-.646 0L1.323 7.723z"
          fill="#FDD216"
        />
        <ellipse
          cx={2.676}
          cy={2.864}
          rx={2.676}
          ry={2.864}
          fill="url(#br_svg__b)"
          transform="translate(4.824 4.636)"
        />
        <g transform="translate(4.824 4.636)">
          <mask id="br_svg__d" fill="#fff">
            <use xlinkHref="#br_svg__c" />
          </mask>
          <path
            d="M-.076 2.433c.202-.176 1.118-.032 2.702.42 1.127.322 2.426 1.032 2.724 1.424l.24.318.595-.515-.24-.317c-.422-.557-1.852-1.339-3.122-1.701C.846 1.497-.05 1.358-.558 1.798l-.297.256.481.636.298-.257z"
            fill="#FFF"
            mask="url(#br_svg__d)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgBr;
