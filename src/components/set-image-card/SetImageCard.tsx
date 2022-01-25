import React, { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { IconDelete, IconEdit } from "../../icons";
import { Img } from "../../base-components";
import ButtonsBar from "../buttons-bar";

import { SSetImageCard } from "./styles/SSetImageCard";
import { SSetImageCardBody } from "./styles/SSetImageCardBody";
import { SSetImageCardButtonsBar } from "./styles/SSetImageCardButtonsBar";
import { SSetImageCardPreview } from "./styles/SSetImageCardPreview";
import { SSetImageCardTitle } from "./styles/SSetImageCardTitle";
import { SSetImageCardSubTitle } from "./styles/SSetImageCardSubTitle";
import { SSetImageCardProgressBar } from "./styles/SSetImageCardProgressBar";
import { SSetImageCardProgressBarTitle } from "./styles/SSetImageCardProgressBarTitle";
import { SSetImageCardProgressBarWrapper } from "./styles/SSetImageCardProgressBarWrapper";
import { SSetImageCardProgressBarLabel } from "./styles/SSetImageCardProgressBarLabel";

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
        const file = files[0];

        setUploadName(file.name);

        const image = await processImage(file);

        setTimeout(() => {
          setUploadProgress(24);
        }, 500);
        setTimeout(() => {
          setUploadProgress(57);
        }, 700);

        if (image) {
          setImage(image);

          setTimeout(() => {
            setUploadProgress(100);
            setLoading(false);
          }, 800);
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
        {isLoading && (
          <SSetImageCardProgressBarWrapper>
            <SSetImageCardProgressBarTitle>{uploadName}</SSetImageCardProgressBarTitle>
            <SSetImageCardProgressBarLabel>{uploadProgress}%</SSetImageCardProgressBarLabel>
            <SSetImageCardProgressBar progress={uploadProgress} />
            <Button onClick={() => {}} type="secondary">
              CANCEL
            </Button>
          </SSetImageCardProgressBarWrapper>
        )}
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
