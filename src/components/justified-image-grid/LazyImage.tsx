import React, { FC } from "react";

export const LazyImage: FC<{src: string}> = ({src}) => {
  return (
    <img
      src={src + "?height=600"}
      alt="image"
      loading="lazy"
      decoding="async"
      style={{
        objectFit: "cover",
        width: "100%",
        height: "100%",
      }}
    />
  );
};
