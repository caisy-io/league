import React, { useEffect, useRef, useState } from "react";

import { FlatActionButton } from "../flat-action-button";
import { Button } from "../button";
import { Divider } from "../divider";
import { IconDelete, IconEdit } from "../../icons";
import { Img } from "../../base-components";

import { SSetImageCard } from "./styles/SSetImageCard";
import { SSetImageCardBody } from "./styles/SSetImageCardBody";
import { SSetImageCardButtonsBar } from "./styles/SSetImageCardButtonsBar";
import { SSetImageCardPreview } from "./styles/SSetImageCardPreview";
import { SSetImageCardTitle } from "./styles/SSetImageCardTitle";
import { SSetImageCardSubTitle } from "./styles/SSetImageCardSubTitle";

interface ISetImageCard {
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
  initalValue?: string;
}

export const SetImageCard: React.FC<ISetImageCard> = ({ processImage, onChange, initalValue }) => {
  const [image, setImage] = useState<string | null>(initalValue || null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const imageRef = useRef<HTMLInputElement>(null);

  const openImagePicker = () => {
    imageRef?.current?.click();
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    if (image) {
      removeImage();
    }    

    const { files = [] } = e.target;

    if (files && files.length > 0) {
      try {
        const image = await processImage(files[0]);

        setImage(image);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  useEffect(() => {
    if (image) {
      onChange(image);
    }
  }, [image]);

  return (
    <SSetImageCard>
      <SSetImageCardBody>
        {isLoading && <SSetImageCardTitle>Loading...</SSetImageCardTitle>}
        {!isLoading && !image && (
          <>
            <SSetImageCardTitle>Drag and drop file to upload</SSetImageCardTitle>
            <SSetImageCardSubTitle>Supported formats: .jpg, .png, .gif, .webp or video file</SSetImageCardSubTitle>
          </>
        )}
        {!isLoading && image && (
          <SSetImageCardPreview>
            <Img resolution={48} src={image} />
          </SSetImageCardPreview>
        )}
        {!isLoading && !image && (
          <Button type="primary" onClick={openImagePicker}>
            SELECT FILE
          </Button>
        )}
        <input hidden type="file" ref={imageRef} onChange={uploadImage} />
      </SSetImageCardBody>
      {image && (
        <SSetImageCardButtonsBar>
          <FlatActionButton disabled={isLoading} type="default" onClick={openImagePicker}>
            <IconEdit />
            CHANGE PREVIEW
          </FlatActionButton>
          <Divider marginBottom={0} marginTop={0} vertical width={44} />
          <FlatActionButton disabled={isLoading} type="danger" onClick={removeImage}>
            <IconDelete />
            DELETE
          </FlatActionButton>
        </SSetImageCardButtonsBar>
      )}
    </SSetImageCard>
  );
};
