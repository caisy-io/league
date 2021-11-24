import * as React from "react";

function SvgNp(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="np_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="np_svg__d">
          <stop stopColor="#EE1B44" offset="0%" />
          <stop stopColor="#DD153C" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="np_svg__e">
          <stop stopColor="#0543A8" offset="0%" />
          <stop stopColor="#003893" offset="100%" />
        </linearGradient>
        <path
          d="M0 0h1.602c.299 0 .742.126.983.275L14.116 7.45c.489.304.399.55-.184.55H6.429l7.764 6.341c.446.364.325.659-.272.659H0V0z"
          id="np_svg__b"
        />
        <path
          d="M0 0h1.602c.299 0 .742.126.983.275L14.116 7.45c.489.304.399.55-.184.55H6.429l7.764 6.341c.446.364.325.659-.272.659H0V0z"
          id="np_svg__f"
        />
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M0 0h1.602c.299 0 .742.126.983.275L14.116 7.45c.489.304.399.55-.184.55H6.429l7.764 6.341c.446.364.325.659-.272.659H0V0z"
          fill="url(#np_svg__a)"
        />
        <mask id="np_svg__c" fill="#fff">
          <use xlinkHref="#np_svg__b" />
        </mask>
        <g mask="url(#np_svg__c)">
          <path
            d="M0 0h1.602c.299 0 .742.126.983.275L14.116 7.45c.489.304.399.55-.184.55H6.429l7.764 6.341c.446.364.325.659-.272.659H0V0z"
            fill="url(#np_svg__d)"
          />
          <path d="M.536.5v14h13.039l-8.571-7h8.227L2.29.691A1.673 1.673 0 001.603.5H.536z" stroke="url(#np_svg__e)" />
        </g>
        <mask id="np_svg__g" fill="#fff">
          <use xlinkHref="#np_svg__f" />
        </mask>
        <path
          d="M5.505 5.85a3.93 3.93 0 00.845-.318c-.255.868-1.101 1.47-2.066 1.47-.965 0-1.81-.602-2.066-1.47.253.132.538.24.847.32l.417-.352-.681-.574.917.044-.047-.856.615.636.615-.636-.047.856.917-.044-.682.574.416.35zM4.285 12l-.819.848.062-1.14-1.221.057.907-.765-.908-.765 1.221.058-.06-1.14.819.847.82-.848-.063 1.14 1.222-.057-.908.765.909.765-1.222-.058.061 1.14-.82-.847z"
          fill="url(#np_svg__a)"
          fillRule="nonzero"
          mask="url(#np_svg__g)"
        />
      </g>
    </svg>
  );
}

export default SvgNp;
