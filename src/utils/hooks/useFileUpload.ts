import { useCallback, useEffect, useRef, useState } from "react";
import { getRandomArbitrary } from "../number";

interface IUseFileUpload {
  imageUrl?: string;
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
  onCancelUpload?: () => void;
}

export const useFileUpload = ({ imageUrl, processImage, onChange, onCancelUpload }: IUseFileUpload) => {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadName, setUploadName] = useState("");

  const uploadTimer = undefined;

  const imageRef = useRef<HTMLInputElement>(null);

  const openImagePicker = () => {
    imageRef?.current?.click();
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);

    if (image) {
      setImage(null);
    }

    const { files = [] } = e.target;

    if (files && files.length > 0) {
      let uploadProgress = getRandomArbitrary(10, 50);
      setUploadProgress(uploadProgress);

      try {
        const file = files[0];

        setUploadName(file.name);

        const uploadTimer = setInterval(() => {
          const randTimeIncrease = getRandomArbitrary(5, 15);

          if (uploadProgress + randTimeIncrease <= 100) {
            uploadProgress += randTimeIncrease;
            setUploadProgress(uploadProgress);
          }
        }, 700);

        const image = await processImage(file);

        if (image) {
          clearInterval(uploadTimer);
          setUploadProgress(100);
          setLoading(false);
          setImage(image);
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
  };

  const removeImage = () => {
    clearInterval(uploadTimer);
    setLoading(false);
    setImage(null);
    setUploadProgress(0);
    setUploadName("");
  };

  const onCancel = () => {
    removeImage();
    onCancelUpload?.();
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
    uploadName,
    uploadProgress,
    onCancel,
  };
};
