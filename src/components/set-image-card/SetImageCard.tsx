import React, { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { IconDelete, IconEdit } from "../../icons";
import { Img } from "../../base-components";
import { ButtonsBar } from "../buttons-bar";

import { SSetImageCard } from "./styles/SSetImageCard";
import { SSetImageCardBody } from "./styles/SSetImageCardBody";
import { SSetImageCardButtonsBar } from "./styles/SSetImageCardButtonsBar";
import { SSetImageCardPreview } from "./styles/SSetImageCardPreview";
import { SSetImageCardTitle } from "./styles/SSetImageCardTitle";
import { SSetImageCardSubTitle } from "./styles/SSetImageCardSubTitle";
import { UploadProgressBar } from "../upload-progress-bar";

interface ISetImageCard {
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
  initalValue?: string;
}

export const SetImageCard: React.FC<ISetImageCard> = ({ processImage, onChange, initalValue }) => {
  const [image, setImage] = useState<string | null>(initalValue || null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadName, setUploadName] = useState("");

  const imageRef = useRef<HTMLInputElement>(null);

  const openImagePicker = (e) => {
    e.preventDefault();
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
        const file = files[0];

        setUploadName(file.name);

        const image = await processImage(file);

        let uploadProgress = 24;

        setUploadProgress(uploadProgress);

        const timer = setInterval(() => {
          const randTimeIncrease = Math.ceil(20 - Math.random() * 10);

          if (uploadProgress + randTimeIncrease <= 100) {
            uploadProgress += randTimeIncrease;
            setUploadProgress(uploadProgress);
          }
        }, 300);

        if (image) {
          clearInterval(timer);

          setTimeout(() => {
            setLoading(false);
            setImage(image);
          }, 1000);
        }
      } catch (error) {
        console.log(error);
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
        {isLoading && <UploadProgressBar progress={uploadProgress} uploadName={uploadName} />}
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
      {!isLoading && image && (
        <SSetImageCardButtonsBar>
          <ButtonsBar>
            <Button onClick={openImagePicker} type="primary" sticked={true}>
              <IconEdit size={20} />
              {"CHANGE PREVIEW"}
            </Button>
            <Button onClick={removeImage} type="danger" sticked={true}>
              <IconDelete size={20} />
              {"DELETE"}
            </Button>
          </ButtonsBar>
        </SSetImageCardButtonsBar>
      )}
    </SSetImageCard>
  );
};
