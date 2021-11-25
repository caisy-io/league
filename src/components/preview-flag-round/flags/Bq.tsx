import * as React from "react";

function SvgBq(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="100%" x2="50%" y2="0%" id="bq_svg__b">
          <stop stopColor="#F0F0F0" offset="0%" />
          <stop stopColor="#FFF" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bq_svg__c">
          <stop stopColor="#024AA6" offset="0%" />
          <stop stopColor="#012A87" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="bq_svg__e">
          <stop stopColor="#EFE118" offset="0%" />
          <stop stopColor="#F9D90F" offset="100%" />
        </linearGradient>
        <path id="bq_svg__a" d="M0 0h15v14.909H0z" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="bq_svg__d" fill="#fff">
          <use xlinkHref="#bq_svg__a" />
        </mask>
        <use fill="url(#bq_svg__b)" xlinkHref="#bq_svg__a" />
        <path fill="url(#bq_svg__c)" mask="url(#bq_svg__d)" d="M21 14.909H0L21 0z" />
        <path fill="url(#bq_svg__e)" mask="url(#bq_svg__d)" d="M0 0v6.212L8.75 0z" />
        <g mask="url(#bq_svg__d)">
          <g transform="translate(3 3.5)">
            <circle stroke="#000" strokeWidth={0.5} cx={2.757} cy={3.038} r={2.578} />
            <path
              fill="#DC171D"
              d="M3.265 2.267h.924l-.462.802.457.794H3.27l-.473.821-.473-.821H1.4l.462-.803-.456-.793h.913l.473-.822z"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgBq;
