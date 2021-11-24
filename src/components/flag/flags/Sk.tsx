import * as React from "react";

function SvgSk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sk_svg__a">
          <stop stopColor="#0C47B7" offset="0%" />
          <stop stopColor="#073DA4" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sk_svg__b">
          <stop stopColor="#E53B35" offset="0%" />
          <stop stopColor="#D32E28" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sk_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="sk_svg__d">
          <stop stopColor="#F73744" offset="0%" />
          <stop stopColor="#EC212F" offset="100%" />
        </linearGradient>
        <path
          d="M.711 1.001A1.048 1.048 0 011.751 0H6.25c.553 0 1.018.447 1.04 1.001L7.46 5.5c.022.553-.297 1.289-.72 1.652L5.146 8.518c-.633.542-1.662.54-2.292 0L1.259 7.15C.84 6.79.517 6.052.539 5.498L.71 1l.001.001z"
          id="sk_svg__e"
        />
        <path
          d="M.711 1.001A1.048 1.048 0 011.751 0H6.25c.553 0 1.018.447 1.04 1.001L7.46 5.5c.022.553-.297 1.289-.72 1.652L5.146 8.518c-.633.542-1.662.54-2.292 0L1.259 7.15C.84 6.79.517 6.052.539 5.498L.71 1l.001.001z"
          id="sk_svg__g"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#sk_svg__a)" d="M0 5h15v5H0z" />
        <path fill="url(#sk_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#sk_svg__c)" d="M0 0h15v5H0z" />
        <path
          d="M2.751 0H7.25c1.09 0 1.997.872 2.039 1.963L9.46 6.46c.033.86-.415 1.89-1.07 2.45l-1.594 1.367c-1.007.863-2.589.861-3.594 0L1.61 8.91C.957 8.352.506 7.32.539 6.46l.173-4.497A2.048 2.048 0 012.752 0h-.001z"
          fill="url(#sk_svg__c)"
          transform="translate(2.5 2)"
        />
        <path
          d="M.711 1.001A1.048 1.048 0 011.751 0H6.25c.553 0 1.018.447 1.04 1.001L7.46 5.5c.022.553-.297 1.289-.72 1.652L5.146 8.518c-.633.542-1.662.54-2.292 0L1.259 7.15C.84 6.79.517 6.052.539 5.498L.71 1l.001.001z"
          transform="translate(3.5 3)"
          fill="url(#sk_svg__d)"
        />
        <g transform="translate(3.5 3)">
          <mask id="sk_svg__f" fill="#fff">
            <use xlinkHref="#sk_svg__e" />
          </mask>
          <path
            d="M3.5 5.245A.25.25 0 003.252 5H2.248A.246.246 0 012 4.748v-.496C2 4.113 2.118 4 2.248 4h1.004a.246.246 0 00.248-.252v-.496A.249.249 0 003.248 3h-.496a.249.249 0 01-.252-.252v-.496c0-.139.107-.252.252-.252h.496a.248.248 0 00.252-.252v-.496c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496c0 .139.107.252.252.252h.496c.139 0 .252.107.252.252v.496A.248.248 0 015.248 3h-.496a.249.249 0 00-.252.252v.496c0 .139.118.252.248.252h1.004C5.89 4 6 4.107 6 4.252v.496A.255.255 0 015.752 5H4.748a.245.245 0 00-.248.245v1.51A.245.245 0 014.248 7h-.496a.247.247 0 01-.252-.245v-1.51z"
            fill="url(#sk_svg__c)"
            mask="url(#sk_svg__f)"
          />
        </g>
        <g transform="translate(3.5 3)">
          <mask id="sk_svg__h" fill="#fff">
            <use xlinkHref="#sk_svg__g" />
          </mask>
          <path
            d="M3.097 7.07C1.882 7.26 1 7.828 1 8.5 1 9.328 2.343 10 4 10s3-.672 3-1.5c0-.671-.882-1.24-2.097-1.43a1 1 0 00-1.806 0z"
            fill="#1251A1"
            mask="url(#sk_svg__h)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgSk;
