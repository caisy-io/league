import * as React from "react";

function SvgCy(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cy_svg__a">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="cy_svg__b">
          <stop stopColor="#E7832C" offset="0%" />
          <stop stopColor="#D7751F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#cy_svg__a)" d="M0 0h15v15H0z" />
        <g transform="translate(4 4)">
          <path
            d="M7.67.165c.182-.092.24-.031.131.133l-.33.495a2.123 2.123 0 01-.496.496l-.495.33c-.164.11-.413.314-.555.456l.15-.15a.36.36 0 00-.002.511l.218.219a.36.36 0 010 .509l-.218.218a.53.53 0 01-.584.09l-.069-.034a.364.364 0 00-.494.164l-.034.069a1.01 1.01 0 01-.51.444l-.4.134c-.23.07-.469.108-.71.115a.637.637 0 00-.528.33l-.033.067a.365.365 0 01-.488.168l-.81-.404a2.655 2.655 0 01-.577-.416l-.218-.218a1.018 1.018 0 01-.254-.618c0-.201.165-.364.363-.364H.364c.2 0 .477-.113.618-.254l.218-.219c.172-.152.39-.241.618-.254.2 0 .415-.152.479-.346l.134-.4a.417.417 0 01.465-.275l1.117.224c.194.038.506.03.703-.018l.75-.188c.235-.063.463-.148.682-.253l.068-.034.659-.33.068-.033.66-.33.068-.034z"
            fill="url(#cy_svg__b)"
          />
          <circle fill="#445128" cx={4} cy={6.909} r={1} />
          <path
            d="M5.206 6.89a.364.364 0 11-.23-.69c.246-.088.48-.206.698-.35.258-.171.447-.361.546-.558a.364.364 0 11.65.325c-.162.327-.438.603-.792.838-.272.18-.565.326-.872.435zM3.024 6.2a.364.364 0 11-.23.69 4.009 4.009 0 01-.873-.435c-.353-.235-.629-.511-.792-.838a.364.364 0 01.65-.325c.1.197.29.387.546.558.218.144.453.262.699.35z"
            fill="#445128"
            fillRule="nonzero"
            opacity={0.75}
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgCy;
