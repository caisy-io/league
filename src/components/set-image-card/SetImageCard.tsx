import React, { useState } from "react";
import { Button } from "../button";
import {
  SSetImageCard,
  SSetImageBody,
  SSetImageHeader,
  SSetImageTitle,
  SSetImageSubtitle,
} from "./styles/SSetImageCard";

interface ISetImageCard {
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
  initalValue?: string;
}

export const SetImageCard: React.FC<ISetImageCard> = () => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const mockProcessIamge = () => {
    setLoading(true);
    setTimeout(() => {
      setImage("https://picsum.photos/200");
      setLoading(false);
    }, 2000);
  };

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
        {image && <img src={image} />}
        {!isLoading && !image && (
          <Button type="primary" onClick={mockProcessIamge}>
            SELECT FILE
          </Button>
        )}
      </SSetImageBody>
    </SSetImageCard>
  );
};
