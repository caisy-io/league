import * as React from "react";

function SvgHt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <rect id="ht_svg__d" x={0} y={0} width={7} height={6} rx={0.5} />
        <rect id="ht_svg__f" x={0} y={0} width={7} height={6} rx={0.5} />
        <rect id="ht_svg__h" x={0} y={0} width={7} height={6} rx={0.5} />
        <rect id="ht_svg__j" x={0} y={0} width={7} height={6} rx={0.5} />
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ht_svg__a">
          <stop stopColor="#112EBC" offset="0%" />
          <stop stopColor="#0620A0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ht_svg__b">
          <stop stopColor="#E3264A" offset="0%" />
          <stop stopColor="#D20F34" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="ht_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#ht_svg__a)" d="M0 0h15v7H0z" />
        <path fill="url(#ht_svg__b)" d="M0 7h15v8H0z" />
        <rect width={7} height={6} rx={0.5} fill="url(#ht_svg__c)" transform="translate(4 5)" />
        <g transform="translate(4 5)">
          <mask id="ht_svg__e" fill="#fff">
            <use xlinkHref="#ht_svg__d" />
          </mask>
          <g mask="url(#ht_svg__e)">
            <path d="M0 5l1.105-.553C1.6 4.2 2.443 4 3 4h1.002c.552 0 1.404.202 1.894.447L7 5v1H0V5z" fill="#AABCAE" />
            <path
              d="M.25 5.155v.595h6.5v-.595l-.967-.484C5.326 4.443 4.513 4.25 4 4.25H2.999c-.516 0-1.321.19-1.782.421l-.967.484z"
              stroke="#366C14"
              strokeWidth={0.5}
            />
          </g>
        </g>
        <g transform="translate(4 5)">
          <mask id="ht_svg__g" fill="#fff">
            <use xlinkHref="#ht_svg__f" />
          </mask>
          <circle fill="#D4B872" mask="url(#ht_svg__g)" cx={3.5} cy={2.5} r={1.5} />
        </g>
        <g transform="translate(4 5)">
          <mask id="ht_svg__i" fill="#fff">
            <use xlinkHref="#ht_svg__h" />
          </mask>
          <g mask="url(#ht_svg__i)">
            <path
              d="M1 3.006c0-.28.18-.362.39-.193l1.72 1.374a.66.66 0 00.78 0l1.72-1.375c.215-.172.39-.081.39.194v1.488c0 .28-.215.506-.498.506H1.498A.505.505 0 011 4.494V3.006z"
              fill="#C28321"
            />
            <path
              d="M1.25 3.02v1.474c0 .14.114.256.248.256h4.004c.14 0 .248-.11.248-.256V3.02L4.047 4.383a.91.91 0 01-1.094 0L1.25 3.02z"
              stroke="#0D3488"
              strokeWidth={0.5}
            />
          </g>
        </g>
        <g transform="translate(4 5)">
          <mask id="ht_svg__k" fill="#fff">
            <use xlinkHref="#ht_svg__j" />
          </mask>
          <path
            d="M2.172 1.172C2.077 1.077 2.114 1 2.256 1h2.488c.141 0 .175.08.084.172L3.672 2.328a.247.247 0 01-.344 0L2.172 1.172z"
            fill="#216C30"
            mask="url(#ht_svg__k)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgHt;
