import React, { useEffect, useRef, useState } from "react";
import { Img } from "../../base-components";
import { IconDelete, IconEditImageAsset } from "../../icons";
import { useFileUpload } from "../../utils/hooks/useFileUpload";
import { Button } from "../button";

import { SAvatarInput } from "./styles/SAvatarInput";
import { SAvatarInputButtonsWrapper } from "./styles/SAvatarInputButtonsWrapper";
import { SAvatarInputPreview } from "./styles/SAvatarInputPreview";

interface IAvatarInput {
  imageUrl?: string;
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
}

export const AvatarInput: React.FC<IAvatarInput> = ({ imageUrl, processImage, onChange, children }) => {
  const { isLoading, image, imageRef, openImagePicker, removeImage, uploadImage } = useFileUpload({
    imageUrl,
    processImage,
    onChange,
  });

  return (
    <SAvatarInput>
      <SAvatarInputPreview>
        {!image && !isLoading && children}
        {!isLoading && image && <Img lazyload={false} src={image!} resolution={48} />}
      </SAvatarInputPreview>
      <SAvatarInputButtonsWrapper>
        {!isLoading && !image && (
          <Button onClick={openImagePicker} type="primary" size="small">
            {"upload image"}
          </Button>
        )}
        {!isLoading && image && (
          <>
            <Button onClick={openImagePicker} type="secondary" size="small">
              <IconEditImageAsset />
              {"change"}
            </Button>
            <Button onClick={removeImage} type="danger" size="small">
              <IconDelete />
              {"delete"}
            </Button>
          </>
        )}
      </SAvatarInputButtonsWrapper>
      <input key="avatar-input" hidden type="file" ref={imageRef} onChange={uploadImage} />
    </SAvatarInput>
  );
};
