import * as React from "react";

function SvgLb(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lb_svg__a">
          <stop stopColor="#F03340" offset="0%" />
          <stop stopColor="#EB212E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lb_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="lb_svg__c">
          <stop stopColor="#1FC065" offset="0%" />
          <stop stopColor="#17A555" offset="100%" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h15v4H0V0zm0 11h15v4H0v-4z" fill="url(#lb_svg__a)" fillRule="nonzero" />
        <path fill="url(#lb_svg__b)" d="M0 4h15v7H0z" />
        <path
          d="M6.891 9.17a.497.497 0 00-.003-.702l.206.206a.972.972 0 00-.837-.232L5.225 8.7c-.267.067-.3-.017-.08-.183l1.191-.892c.224-.168.184-.304-.103-.304H5.75c-.28 0-.309-.1-.064-.222l1.112-.556c.245-.123.223-.222-.064-.222H6.25c-.28 0-.323-.138-.103-.304l1.19-.892a.719.719 0 01.81 0l1.19.892c.224.168.184.304-.103.304H8.75c-.28 0-.309.1-.064.222l1.112.556c.245.123.223.222-.064.222H9.25c-.28 0-.323.138-.103.304l1.19.892c.224.168.191.25-.08.183l-1.03-.258a.977.977 0 00-.838.232l.206-.206a.496.496 0 00-.003.703l.3.3c.193.193.134.35-.145.35h-2.01c-.273 0-.339-.156-.145-.35l.3-.3z"
          fill="url(#lb_svg__c)"
        />
      </g>
    </svg>
  );
}

export default SvgLb;
