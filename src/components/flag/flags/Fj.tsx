import * as React from "react";

function SvgFj(props) {
  return (
    <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" {...props}>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fj_svg__b">
          <stop stopColor="#FFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fj_svg__c">
          <stop stopColor="#79CFF6" offset="0%" />
          <stop stopColor="#68BFE6" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fj_svg__e">
          <stop stopColor="#042C90" offset="0%" />
          <stop stopColor="#00247E" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fj_svg__i">
          <stop stopColor="#EB1D43" offset="0%" />
          <stop stopColor="#D21034" offset="100%" />
        </linearGradient>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="fj_svg__k">
          <stop stopColor="#DB1E36" offset="0%" />
          <stop stopColor="#D51931" offset="100%" />
        </linearGradient>
        <path id="fj_svg__a" d="M0 0h15v15H0z" />
        <path d="M0 2.5V0h4v2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z" id="fj_svg__f" />
        <path d="M0 2.5V0h4v2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z" id="fj_svg__h" />
      </defs>
      <g fill="none" fillRule="evenodd">
        <mask id="fj_svg__d" fill="#fff">
          <use xlinkHref="#fj_svg__a" />
        </mask>
        <use fill="url(#fj_svg__b)" xlinkHref="#fj_svg__a" />
        <path fill="url(#fj_svg__c)" mask="url(#fj_svg__d)" d="M0 0h21v15H0z" />
        <path fill="url(#fj_svg__e)" mask="url(#fj_svg__d)" d="M0 0h9v7H0z" />
        <g mask="url(#fj_svg__d)">
          <path d="M0 2.5V0h4v2.5C4 4.286 2 5 2 5s-2-.714-2-2.5z" fill="url(#fj_svg__b)" transform="translate(9 9)" />
          <g transform="translate(9 9)">
            <mask id="fj_svg__g" fill="#fff">
              <use xlinkHref="#fj_svg__f" />
            </mask>
            <path
              d="M.8 2.321c-.22 0-.4-.28-.4-.625s.18-.625.4-.625c.22 0 .4.28.4.625 0 .346-.18.625-.4.625zm2.4 0c-.22 0-.4-.28-.4-.625s.18-.625.4-.625c.22 0 .4.28.4.625 0 .346-.18.625-.4.625z"
              fill="#2A915C"
              fillRule="nonzero"
              mask="url(#fj_svg__g)"
            />
          </g>
          <g transform="translate(9 9)">
            <mask id="fj_svg__j" fill="#fff">
              <use xlinkHref="#fj_svg__h" />
            </mask>
            <path
              fill="url(#fj_svg__i)"
              mask="url(#fj_svg__j)"
              d="M0 0h4v.714H2.4v1.429H4v.714H2.4V5h-.8V2.857H0v-.714h1.6V.714H0z"
            />
          </g>
        </g>
        <g mask="url(#fj_svg__d)" fill="url(#fj_svg__k)">
          <path d="M3.5 3L0 0h.5L4 2.5h1L9 0v.25a.537.537 0 01-.208.399L5.5 3v1l3.312 2.839c.104.089.072.161-.062.161a.898.898 0 01-.458-.149L5 4.5H4L0 7v-.5L3.5 4V3z" />
        </g>
        <g mask="url(#fj_svg__d)">
          <path
            d="M3.25 3.115L-.676-.25H.5l.145.047L4.08 2.25h.848L9.25-.451V.25c0 .222-.128.47-.313.602L5.75 3.13v.756L8.975 6.65c.282.242.138.601-.225.601-.193 0-.442-.08-.604-.195L4.92 4.75h-.848L-.25 7.451v-1.08l3.5-2.5v-.756z"
            stroke="#FFF"
            strokeWidth={0.5}
          />
          <path
            d="M1 3.5v2h3.5v2.505c0 .273.214.495.505.495h.99a.496.496 0 00.505-.495V5.5h3.51a.49.49 0 00.49-.505v-.99a.495.495 0 00-.49-.505H6.5V1h-2v2.5H1z"
            fill="url(#fj_svg__b)"
            transform="translate(-1 -1)"
          />
          <path fill="url(#fj_svg__k)" d="M1 4h4V1h1v3h4v1H6v3H5V5H1z" transform="translate(-1 -1)" />
        </g>
      </g>
    </svg>
  );
}

export default SvgFj;
