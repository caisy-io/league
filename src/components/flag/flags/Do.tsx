import * as React from "react";

function SvgDo(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="do_svg__b">
          <stop stopColor="#083D7A" offset="0%" />
          <stop stopColor="#032F61" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="do_svg__d">
          <stop stopColor="#DF1E35" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="do_svg__e">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <path id="do_svg__a" d="M0 0h15v15H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="do_svg__c" fill="#fff">
          <use xlinkHref="#do_svg__a" />
        </mask>
        <use fill="#D8D8D8" fillRule="nonzero" xlinkHref="#do_svg__a" />
        <path d="M-3 0h9v6h-9V0zM9 9h9v6H9V9z" fill="url(#do_svg__b)" fillRule="nonzero" mask="url(#do_svg__c)" />
        <path d="M-3 9h9v6h-9V9zM9 0h9v6H9V0z" fill="url(#do_svg__d)" fillRule="nonzero" mask="url(#do_svg__c)" />
        <path fill="url(#do_svg__e)" mask="url(#do_svg__c)" d="M6 6h-9v3h9v6h3V9h9V6H9V0H6z" />
        <path
          d="M6.44 6.44a1.5 1.5 0 002.12 2.12 1.5 1.5 0 000-2.12"
          fillOpacity={0.2}
          fill="#C93127"
          mask="url(#do_svg__c)"
        />
        <circle fill="#042F60" mask="url(#do_svg__c)" cx={7.5} cy={7.5} r={1} />
        <path
          d="M8.56 8.56a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122L8.56 8.56zm0 0a1.5 1.5 0 01-2.12-2.12l.353.353a1 1 0 101.414 0l.354-.354a1.5 1.5 0 010 2.122L8.56 8.56z"
          fill="#0F6D1A"
          fillRule="nonzero"
          mask="url(#do_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgDo;
