import React, { useEffect, useRef, useState } from "react";
import { FlatActionButton } from "..";
import { IconDelete, IconEdit } from "../../icons";
import { Button } from "../button";
import { Divider } from "../divider";
import {
  SSetImageCard,
  SSetImageBody,
  SSetImageHeader,
  SSetImageTitle,
  SSetImageSubtitle,
  SSetImagePreview,
  SSetImageButtonsBar,
} from "./styles/SSetImageCard";

interface ISetImageCard {
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
  initalValue?: string;
}

export const SetImageCard: React.FC<ISetImageCard> = ({ processImage, onChange, initalValue }) => {
  const [image, setImage] = useState<string | null>(initalValue || null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const imageRef = useRef<HTMLInputElement>(null);

  const mockProcessIamge = () => {
    setLoading(true);
    imageRef?.current?.click();
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if(image) {
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
      <SSetImageBody>
        <SSetImageHeader>
          {isLoading && <SSetImageTitle>Loading...</SSetImageTitle>}
          {!isLoading && !image && (
            <>
              <SSetImageTitle>Drag and drop file to upload</SSetImageTitle>
              <SSetImageSubtitle>Supported formats: .jpg, .png, .gif, .webp or video file</SSetImageSubtitle>
            </>
          )}
        </SSetImageHeader>
        {/* FIXME! */}
        {/* Probably we should change img wrapper to existing element when url processing is done on server */}
        {/* {image && <Img resolution={48} src={image} />} */}
        {!isLoading && image && <SSetImagePreview src={image} />}
        {!isLoading && !image && (
          <Button type="primary" onClick={mockProcessIamge}>
            SELECT FILE
          </Button>
        )}
        <input hidden type="file" ref={imageRef} onChange={uploadImage} />
      </SSetImageBody>
      {image && (
        <SSetImageButtonsBar>
          <FlatActionButton disabled={isLoading} width="50%" height="44px" type="default" onClick={mockProcessIamge}>
            <IconEdit />
            CHANGE PREVIEW
          </FlatActionButton>
          <Divider vertical width={44} />
          <FlatActionButton disabled={isLoading} width="50%" height="44px" type="danger" onClick={removeImage}>
            <IconDelete />
            DELETE
          </FlatActionButton>
        </SSetImageButtonsBar>
      )}
    </SSetImageCard>
  );
};
