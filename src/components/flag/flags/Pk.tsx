import * as React from "react";

function SvgPk(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pk_svg__a">
          <stop stopColor="#0A632F" offset="0%" />
          <stop stopColor="#05411E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="pk_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#pk_svg__a)" d="M0 0h15v15H0z" />
        <path fill="url(#pk_svg__b)" d="M0 0h4v15H0z" />
        <g fillRule="nonzero">
          <path
            d="M12.86 8.134a3.198 3.198 0 01-.92 1.995c-1.31 1.31-3.513 1.233-4.918-.173-1.407-1.406-1.484-3.608-.173-4.918a3.194 3.194 0 011.994-.92 3.154 3.154 0 00-.648.499c-1.19 1.19-1.223 3.088-.073 4.239 1.15 1.15 3.048 1.117 4.238-.074.199-.199.366-.417.5-.648zm-1.547-1.587l-.172 1.12-.54-1.017-1.125.152.786-.801-.522-1.026 1.026.521.801-.786-.151 1.124 1.018.54-1.121.173z"
            fill="#000"
          />
          <path
            d="M5.427 7.102c-.58.491-1.309.76-2.06.76C1.512 7.862.01 6.25.01 4.262s1.502-3.6 3.355-3.6c.777 0 1.493.284 2.061.76a3.154 3.154 0 00-.81-.105c-1.685 0-3.05 1.318-3.05 2.945 0 1.627 1.365 2.945 3.05 2.945.28 0 .552-.036.81-.105zm.028-2.216l-.914.67.338-1.1-.902-.689 1.122-.01.356-1.095.357 1.095 1.123.01-.903.688.338 1.102-.915-.67z"
            fill="url(#pk_svg__b)"
            transform="rotate(-45 10.39 -1.354)"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgPk;
