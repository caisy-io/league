import * as React from "react";

function SvgTk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tk_svg__a">
          <stop stopColor="#0637C5" offset="0%" />
          <stop stopColor="#002CAA" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="tk_svg__b">
          <stop stopColor="#FDD33F" offset="0%" />
          <stop stopColor="#FED02F" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#tk_svg__a)" d="M0 0h15v15H0z" />
        <g fillRule="nonzero">
          <path
            d="M2.167 7.333H13V8H1.444l.723-.667zm5.416-4C9.75 2 12.278.667 12.278.667s-1.187 2.048-1.084 3c.138 1.271 1.806 3 1.806 3H2.889s2.528-2 4.694-3.334z"
            fill="url(#tk_svg__b)"
            transform="translate(1 3)"
          />
          <path
            d="M3.167 8.333l-.51.138L2.805 8l-.15-.471.51.138.511-.138-.15.471.15.471-.51-.138zM3.889 4l-.51.138.149-.471-.15-.472.51.138.512-.138-.15.472.15.471L3.888 4zm1.444 2l-.51.138.15-.471-.15-.472.51.138.51-.138-.149.472.15.471L5.334 6zm-3.61 0l-.511.138.15-.471-.15-.472.51.138.51-.138-.149.472.15.471L1.723 6z"
            fill="#FFF"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgTk;
