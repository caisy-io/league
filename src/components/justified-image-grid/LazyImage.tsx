import React, { FC } from "react";
import { SSkeleton } from "../skeleton/SSkeleton";
import { SImageLabelPreview } from "./styles/SImageLabelPreview";
import { SLazyImage } from "./styles/SLazyImage";
import { blurhashToCssGradientString } from "./utils";
import { SLazyImageLoadingWrapper } from "./styles/SLazyImageLoadingWrapper";
import { IJustifiedImageGrid, IJustifiedImageGridConfig } from "./types";

export const LazyImage: FC<{
  src: string;
  skeleton?: boolean;
  blurHash?: string;
  originType?: string;
  label?: string;
  title?: string;
  description?: string;
  config: IJustifiedImageGridConfig
}> = ({ src, skeleton, originType, blurHash, label, title, description, config }) => {
  const [fetchState, setFetchState] = React.useState<number>(0);
  if (skeleton) {
    return <SSkeleton width="100%" height={"100%"} borderRadius={"0"} />;
  }
  // handle src missing
  if (!src || fetchState === 2) {
    return (
      <SImageLabelPreview>
        <span>{label || "?"}</span>
      </SImageLabelPreview>
    );
  }

  const isSvg = originType?.includes("svg") || src.endsWith(".svg");

  let blurHashCss = "";

  if (!isSvg && blurHash) {
    blurHashCss = blurhashToCssGradientString(blurHash, 3, 3);
  }

  const onError = () => {
    if (fetchState !== 2) {
      setFetchState(2);
    }
  };
  const onLoad = () => {
    if (fetchState === 0) {
      setFetchState(1);
    }
  };

  return (
    <SLazyImageLoadingWrapper loading={fetchState === 0} blurHashCss={blurHashCss}>
      <SLazyImage
        isSvg={isSvg}
        onLoad={onLoad}
        onError={onError}
        src={src + `?height=${config.resizeHeight}`}
        alt={description || title}
        loading="lazy"
        decoding="async"
      />
      <div className="placeholder"></div>
    </SLazyImageLoadingWrapper>
  );
};
