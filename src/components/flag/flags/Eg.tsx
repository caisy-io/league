import * as React from "react";

function SvgEg(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eg_svg__a">
          <stop stopColor="#E41D33" offset="0%" />
          <stop stopColor="#CE1126" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eg_svg__b">
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="eg_svg__c">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#eg_svg__a)" d="M0 0h15v5H0z" />
        <path fill="url(#eg_svg__b)" d="M0 10h15v5H0z" />
        <path fill="url(#eg_svg__c)" d="M0 5h15v5H0z" />
        <path
          d="M5 6.495C5 6.222 5.232 6 5.5 6h.248c.139 0 .298.092.368.232L6.5 7s.55-1 1-1c.5 0 1 1 1 1l.384-.768A.445.445 0 019.252 6H9.5c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L8.5 8H8v.5c0 .276-.232.5-.5.5a.505.505 0 01-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222v-2.01z"
          fillOpacity={0.25}
          fill="#F4B32E"
        />
        <path
          d="M9.5 8.066V6.5h-.191l-.54 1.079.731.487zM5.691 6.5h-.19L5.5 6.495v1.57l.73-.486L5.691 6.5zm1.809 1v1-1h.691l-.138-.276c-.05-.1-.146-.265-.266-.424-.12-.16-.23-.26-.271-.29-.11.084-.209.183-.29.296-.126.163-.23.33-.288.435l-.142.259H7.5zm.874-.724c.08.13.126.224.126.224l.112-.224s.231-.195.157-.313l.115-.231A.445.445 0 019.252 6H9.5c.276 0 .5.216.5.495v2.01c0 .273-.184.372-.41.222L8.5 8H8v.5c0 .276-.232.5-.5.5a.505.505 0 01-.5-.5V8h-.5l-1.09.727c-.226.15-.41.057-.41-.222v-2.01C5 6.222 5.232 6 5.5 6h.248c.139 0 .298.092.368.232l.12.24c-.071.108.147.293.147.293L6.5 7s.053-.097.14-.23l.178-.253C7.013 6.262 7.269 6 7.5 6c.25 0 .502.252.69.503l.184.273z"
          fill="#C6A846"
          fillRule="nonzero"
        />
      </g>
    </svg>
  );
}

export default SvgEg;
