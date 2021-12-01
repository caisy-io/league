import * as React from "react";

function SvgKr(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kr_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kr_svg__b">
          <stop stopColor="#E01B41" offset="0%" />
          <stop stopColor="#C51335" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kr_svg__d">
          <stop stopColor="#0E4B9C" offset="0%" />
          <stop stopColor="#053677" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kr_svg__f">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <ellipse id="kr_svg__c" cx={2.567} cy={2.545} rx={2.567} ry={2.545} />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#kr_svg__a)" d="M0 0h15v15H0z" />
        <ellipse
          cx={2.567}
          cy={2.545}
          rx={2.567}
          ry={2.545}
          fill="url(#kr_svg__b)"
          transform="translate(4.933 5.455)"
        />
        <g transform="translate(4.933 5.455)">
          <mask id="kr_svg__e" fill="#fff">
            <use xlinkHref="#kr_svg__c" />
          </mask>
          <path
            d="M0 2.91c.733.68 1.833 1.09 2.567 0 .733-1.092 2.2-1.092 2.566 0 .367 1.09 0 2.18 0 2.18H0s-.733-2.862 0-2.18z"
            fill="url(#kr_svg__d)"
            mask="url(#kr_svg__e)"
          />
        </g>
        <path
          d="M8.22 1.398a.18.18 0 01.065-.253l.316-.18a.186.186 0 01.253.07l.913 1.567a.18.18 0 01-.066.253l-.316.18a.187.187 0 01-.254-.07L8.22 1.399zm.953-.546A.18.18 0 019.239.6l.314-.18c.09-.05.203-.02.254.069l.912 1.568a.18.18 0 01-.066.252l-.315.18a.187.187 0 01-.254-.069L9.172.852zM.28 5.943a.18.18 0 01.066-.252l.315-.18c.09-.05.203-.02.254.069l.912 1.568a.18.18 0 01-.066.252l-.315.18a.187.187 0 01-.254-.069L.281 5.943zm.952-.545a.18.18 0 01.066-.253l.316-.18c.09-.05.203-.02.254.07l.912 1.567a.18.18 0 01-.066.253l-.316.18a.187.187 0 01-.253-.07l-.913-1.567zm7.898-.364a.183.183 0 01.255-.069l.315.18a.184.184 0 01.066.253l-.913 1.568a.183.183 0 01-.253.069l-.316-.18a.184.184 0 01-.066-.253l.912-1.568zm.954.546a.183.183 0 01.254-.07l.314.18a.185.185 0 01.066.253l-.912 1.568a.183.183 0 01-.254.07L9.238 7.4a.184.184 0 01-.066-.252l.912-1.568zM1.193.489a.183.183 0 01.254-.07L1.762.6c.088.05.118.164.066.252L.916 2.42a.183.183 0 01-.255.07l-.314-.18a.184.184 0 01-.066-.253L1.193.489zm.953.545a.183.183 0 01.253-.069l.316.18a.185.185 0 01.066.253l-.912 1.568a.183.183 0 01-.255.069l-.315-.18a.184.184 0 01-.066-.253l.913-1.568z"
          fill="url(#kr_svg__f)"
          fillRule="nonzero"
          opacity={0.75}
          transform="translate(2 4)"
        />
      </g>
    </svg>
  );
}

export default SvgKr;
