import * as React from "react";

function SvgGt(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gt_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gt_svg__b">
          <stop stopColor="#63AEE3" offset="0%" />
          <stop stopColor="#4998D0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#gt_svg__a)" d="M0 0h15v15H0z" />
        <path d="M7.143 0H15v15H7.143V0zM0 0h5v15H0V0z" fill="url(#gt_svg__b)" fillRule="nonzero" />
        <path fill="url(#gt_svg__a)" d="M5 0h5v15H5z" />
        <g transform="translate(6 7)">
          <path
            d="M0 .366C0 1.02.285 1.623.748 1.95c.144.102.327.042.41-.132.083-.175.035-.4-.109-.5C.771 1.12.6.757.6.365.6.164.466 0 .3 0 .134 0 0 .164 0 .366zM2.308 1.91C2.739 1.573 3 .99 3 .366 3 .164 2.866 0 2.7 0c-.166 0-.3.164-.3.366 0 .375-.157.724-.416.926a.392.392 0 00-.144.327.379.379 0 00.164.312c.097.06.213.052.304-.022z"
            fill="#628A40"
            fillRule="nonzero"
          />
          <circle fill="#DCC26D" cx={1.5} cy={0.5} r={1} />
        </g>
      </g>
    </svg>
  );
}

export default SvgGt;
