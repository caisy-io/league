import { useEffect, useRef, useState } from "react";

interface IUseFileUpload {
  imageUrl?: string;
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
}

export const useFileUpload = ({ imageUrl, processImage, onChange }: IUseFileUpload) => {
  const [image, setImage] = useState<string | null>(null);
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

  useEffect(() => {
    if (imageUrl) {
      setImage(imageUrl);
    }
  }, [imageUrl]);

  return {
    isLoading,
    image,
    imageRef,
    openImagePicker,
    removeImage,
    uploadImage,
  };
};
