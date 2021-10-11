import React, { FC } from "react";

const IFrame: FC<{ node: any }> = ({ node: { attrs } }) => (
  <iframe
    src={attrs.src}
    allow={attrs.allow}
    title={attrs.title}
    frameBorder={attrs.frameborder}
    height={attrs.height}
    width={attrs.width}
    allowFullScreen={attrs.allowfullscreen}
  />
);

export default IFrame;
