import * as React from "react";

function SvgAu(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="au_svg__a">
          <stop stopColor="#0A17A7" offset="0%" />
          <stop stopColor="#030E88" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="au_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="au_svg__e">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="au_svg__b" d="M0 0h10v8H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#au_svg__a)" d="M0 0h15v15H0z" />
        <mask id="au_svg__d" fill="#fff">
          <use xlinkHref="#au_svg__b" />
        </mask>
        <path
          d="M3 3.23L-1.352-.5H.66L4.16 2h.697L9.5-.902V.25c0 .303-.167.627-.418.806L6 3.257v.513l3.137 2.69c.462.395.204 1.04-.387 1.04-.245 0-.545-.096-.75-.242L4.84 5h-.697L-.5 7.902v-1.66l3.5-2.5V3.23z"
          fill="url(#au_svg__c)"
          mask="url(#au_svg__d)"
        />
        <path
          d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z"
          fill="url(#au_svg__e)"
          mask="url(#au_svg__d)"
        />
        <path
          d="M0 2.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V4.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H5.5V0h-2v2.5H0z"
          fill="url(#au_svg__c)"
          mask="url(#au_svg__d)"
        />
        <path fill="url(#au_svg__e)" mask="url(#au_svg__d)" d="M0 3h4V0h1v3h4v1H5v3H4V4H0z" />
        <path
          d="M4.379 12.386l-.543.298.104-.63-.44-.446.607-.092.272-.573.27.573.608.092-.44.446.105.63-.543-.298zm6.464.481l-.435.133.127-.453-.127-.454.435.133.435-.133-.127.454.127.453-.435-.133zm0-6.093l-.435.133.127-.454L10.408 6l.435.133.435-.133-.127.453.127.454-.435-.133zm1.847 1.924l-.436.133.128-.453-.128-.454.436.133.435-.133-.127.454.127.453-.435-.133zm-3.694.642l-.435.132.127-.453-.127-.453.435.132.435-.132-.127.453.127.453-.435-.132zm2.77.801l-.218.067.064-.227-.064-.227.218.067.218-.067-.064.227.064.227-.218-.067z"
          fill="#FFF"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgAu;
