import React, { ReactNode } from "react";
import { Img } from "../../base-components";
import { IconDelete, IconEditImageAsset } from "../../icons";
import { useFileUpload } from "../../utils/hooks/useFileUpload";
import { Button } from "../button";
import { UploadProgressBar } from "../upload-progress-bar";

import { SAvatarInput } from "./styles/SAvatarInput";
import { SAvatarInputButtonsWrapper } from "./styles/SAvatarInputButtonsWrapper";
import { SAvatarInputPreview } from "./styles/SAvatarInputPreview";

export interface IAvatarInput {
  imageUrl?: string;
  onChange: (url: string | null) => void;
  processImage: (file: File) => Promise<string>;
  avatarResolution?: number;
  onCancelUpload?: () => void;
  uploadImageText?: string | ReactNode;
  changeText?: string | ReactNode;
  deleteText?: string | ReactNode;
  disabled?: boolean;
}

export const AvatarInput: React.FC<IAvatarInput> = ({
  imageUrl,
  processImage,
  onChange,
  children,
  avatarResolution = 48,
  onCancelUpload,
  uploadImageText,
  changeText,
  deleteText,
  disabled,
}) => {
  const {
    isLoading,
    image,
    imageRef,
    openImagePicker,
    removeImage,
    uploadImage,
    uploadName,
    uploadProgress,
    onCancel,
  } = useFileUpload({
    imageUrl,
    processImage,
    onChange,
    onCancelUpload,
  });

  return (
    <SAvatarInput>
      {isLoading && <UploadProgressBar progress={uploadProgress} uploadName={uploadName} onCancel={onCancel} />}
      {!isLoading && (
        <SAvatarInputPreview>
          {!image && children}
          {image && <Img lazyload={false} src={image!} resolution={avatarResolution} />}
        </SAvatarInputPreview>
      )}
      {!isLoading && !disabled && (
        <SAvatarInputButtonsWrapper>
          {!image && (
            <Button onClick={openImagePicker} type="primary" size="small">
              {uploadImageText || "upload image"}
            </Button>
          )}
          {image && (
            <>
              <Button onClick={openImagePicker} type="neutral" size="small">
                <IconEditImageAsset />
                {changeText || "change"}
              </Button>
              <Button onClick={removeImage} type="danger" size="small">
                <IconDelete />
                {deleteText || "delete"}
              </Button>
            </>
          )}
        </SAvatarInputButtonsWrapper>
      )}
      {!disabled && <input key="avatar-input" hidden type="file" ref={imageRef} onChange={uploadImage} />}
    </SAvatarInput>
  );
};
