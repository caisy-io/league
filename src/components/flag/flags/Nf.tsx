import * as React from "react";

function SvgNf(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nf_svg__a">
          <stop stopColor="#219646" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nf_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nf_svg__c">
          <stop stopColor="#259D4B" offset="0%" />
          <stop stopColor="#197837" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M10.714 0H15v15h-4.286V0zM0 0h4.286v15H0V0z" fill="url(#nf_svg__a)" fillRule="nonzero" />
        <path fill="url(#nf_svg__b)" d="M4.286 0h6.428v15H4.286z" />
        <path
          d="M6.62 4.639l.352-1.244A.586.586 0 017.5 3a.58.58 0 01.528.396L8.38 4.64a.418.418 0 00-.434.254.405.405 0 00.135.478c.15.112.357.11.506-.002l.258.913a.423.423 0 00-.354.079.407.407 0 00.097.698c.155.064.334.03.454-.085l.27.96a.419.419 0 00-.516.202.404.404 0 00.149.526.42.42 0 00.548-.09l.507 1.79H7.917V12h-.834v-1.636H5l.507-1.792c.132.164.37.204.55.092a.405.405 0 00.15-.528.42.42 0 00-.52-.2l.272-.961a.42.42 0 00.454.086.407.407 0 00.096-.7.423.423 0 00-.355-.078l.258-.913a.423.423 0 00.506.002.405.405 0 00.135-.478.418.418 0 00-.434-.254l.001-.001z"
          fill="url(#nf_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgNf;
