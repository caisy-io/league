import * as React from "react";

function SvgKz(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kz_svg__a">
          <stop stopColor="#30C6E0" offset="0%" />
          <stop stopColor="#1CB0C9" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="kz_svg__b">
          <stop stopColor="#FFCD4B" offset="0%" />
          <stop stopColor="#FEC531" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#kz_svg__a)" d="M0 0h15v15H0z" />
        <path
          d="M1 1.252C1 1.113 1.107 1 1.252 1h.496c.139 0 .252.107.252.252v.496A.248.248 0 011.748 2h-.496A.249.249 0 011 1.748v-.496zm0 2C1 3.113 1.107 3 1.252 3h.496c.139 0 .252.107.252.252v.496A.248.248 0 011.748 4h-.496A.249.249 0 011 3.748v-.496zm0 2C1 5.113 1.107 5 1.252 5h.496c.139 0 .252.107.252.252v.496A.248.248 0 011.748 6h-.496A.249.249 0 011 5.748v-.496zm0 2C1 7.113 1.107 7 1.252 7h.496c.139 0 .252.107.252.252v.496A.248.248 0 011.748 8h-.496A.249.249 0 011 7.748v-.496zm0 2C1 9.113 1.107 9 1.252 9h.496c.139 0 .252.107.252.252v.496a.248.248 0 01-.252.252h-.496A.249.249 0 011 9.748v-.496zm0 2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496a.248.248 0 01-.252.252h-.496A.249.249 0 011 11.748v-.496zm0 2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496a.248.248 0 01-.252.252h-.496A.249.249 0 011 13.748v-.496zm1-1c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496a.248.248 0 01-.252.252h-.496A.249.249 0 012 12.748v-.496zm0-2c0-.139.107-.252.252-.252h.496c.139 0 .252.107.252.252v.496a.248.248 0 01-.252.252h-.496A.249.249 0 012 10.748v-.496zm0-2C2 8.113 2.107 8 2.252 8h.496c.139 0 .252.107.252.252v.496A.248.248 0 012.748 9h-.496A.249.249 0 012 8.748v-.496zm0-2C2 6.113 2.107 6 2.252 6h.496c.139 0 .252.107.252.252v.496A.248.248 0 012.748 7h-.496A.249.249 0 012 6.748v-.496zm0-2C2 4.113 2.107 4 2.252 4h.496c.139 0 .252.107.252.252v.496A.248.248 0 012.748 5h-.496A.249.249 0 012 4.748v-.496zm0-2C2 2.113 2.107 2 2.252 2h.496c.139 0 .252.107.252.252v.496A.248.248 0 012.748 3h-.496A.249.249 0 012 2.748v-.496z"
          fill="url(#kz_svg__b)"
          fillRule="nonzero"
        />
        <g transform="translate(5 4)" fill="url(#kz_svg__b)">
          <circle cx={4} cy={4} r={2.182} />
          <path
            d="M4 6.57L3.11 7.9l-.226-1.584-1.378.811.484-1.524-1.594.132 1.097-1.163L0 4l1.493-.572L.396 2.264l1.594.133L1.506.873l1.378.81L3.11.1 4 1.43 4.89.1l.226 1.584L6.494.873 6.01 2.397l1.594-.132-1.097 1.163L8 4l-1.493.572 1.097 1.164-1.594-.133.484 1.524-1.378-.81L4.89 7.9 4 6.57zm0-.025a2.545 2.545 0 100-5.09 2.545 2.545 0 000 5.09z"
            fillRule="nonzero"
          />
        </g>
      </g>
    </svg>
  );
}

export default SvgKz;
