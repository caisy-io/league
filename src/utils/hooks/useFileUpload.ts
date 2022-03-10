import { useEffect, useRef, useState } from "react";

interface IUseFileUpload {
  imageUrl?: string;
  onChange: (url: string) => void;
  processImage: (file: File) => Promise<string>;
}

export const useFileUpload = ({ imageUrl, processImage, onChange }: IUseFileUpload) => {
  const [image, setImage] = useState<string | null>(null);
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
    setUploadProgress(0);
    setUploadName('');
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
  };
};
