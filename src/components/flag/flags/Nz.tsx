import * as React from "react";

function SvgNz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nz_svg__b">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nz_svg__d">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nz_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="nz_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="nz_svg__c" fill="#fff">
          <use xlinkHref="#nz_svg__a" />
        </mask>
        <use fill="url(#nz_svg__b)" xlinkHref="#nz_svg__a" />
        <g mask="url(#nz_svg__c)">
          <path
            d="M5 4.23L.648.5H2.66L6.16 3h.697L11.5.098V1.25c0 .303-.167.627-.418.806L8 4.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L6.84 6h-.697L1.5 8.902v-1.66l3.5-2.5V4.23z"
            fill="url(#nz_svg__d)"
            transform="translate(-2 -1)"
          />
          <path
            d="M5.5 4L2 1h.5L6 3.5h1L11 1v.25a.537.537 0 01-.208.399L7.5 4v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L7 5.5H6L2 8v-.5L5.5 5V4z"
            fill="url(#nz_svg__e)"
            transform="translate(-2 -1)"
          />
          <path
            d="M2 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H7.5V1h-2v2.5H2z"
            fill="url(#nz_svg__d)"
            transform="translate(-2 -1)"
          />
          <path fill="url(#nz_svg__e)" d="M2 4h4V1h1v3h4v1H7v3H6V5H2z" transform="translate(-2 -1)" />
        </g>
        <path
          d="M10.787 12.867L10.37 13l.122-.453-.122-.454.418.133.417-.133-.122.454.122.453-.418-.133zm0-6.093l-.417.133.122-.454L10.37 6l.418.133.417-.133-.122.453.122.454-.418-.133zm1.77 1.924l-.416.133.122-.453-.122-.454.417.133.417-.133-.122.454.122.453-.417-.133zm-3.54.642l-.417.132.122-.453-.122-.453.417.132.417-.132-.122.453.122.453-.417-.132z"
          fill="#CA1931"
          fillRule="nonzero"
          mask="url(#nz_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgNz;
