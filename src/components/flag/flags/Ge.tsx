import * as React from "react";

function SvgGe(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ge_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ge_svg__c">
          <stop stopColor="#FF2B37" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
        <path id="ge_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="ge_svg__d" fill="#fff">
          <use xlinkHref="#ge_svg__a" />
        </mask>
        <use fill="url(#ge_svg__b)" xlinkHref="#ge_svg__a" />
        <path fill="url(#ge_svg__c)" mask="url(#ge_svg__d)" d="M6 6h-9v3h9v6h3V9h9V6H9V0H6z" />
        <path
          d="M11.68 3.9l-.147-.9h.734l-.147.9.88-.15v.75l-.88-.15.147.9h-.734l.147-.9-.88.15v-.75l.88.15zm-8.8 0L2.733 3h.734l-.147.9.88-.15v.75l-.88-.15.147.9h-.734l.147-.9L2 4.5v-.75l.88.15zm0 6.75l-.147-.9h.734l-.147.9.88-.15v.75l-.88-.15.147.9h-.734l.147-.9-.88.15v-.75l.88.15zm8.8 0l-.147-.9h.734l-.147.9.88-.15v.75l-.88-.15.147.9h-.734l.147-.9-.88.15v-.75l.88.15z"
          fill="#FD0D1B"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgGe;
