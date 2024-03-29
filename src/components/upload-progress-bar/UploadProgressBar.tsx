import React, { ReactNode } from "react";
import { Button } from "../button/Button";
import { SProgressBar } from "./styles/SProgressBar";
import { SUploadProgressBar } from "./styles/SUploadProgressBar";
import { SUploadProgressBarLabel } from "./styles/SUploadProgressBarLabel";
import { SUploadProgressBarTitle } from "./styles/SUploadProgressBarTitle";

export interface IUploadProgressBar {
  progress?: number;
  uploadName?: string;
  onCancel?: () => void;
  cancelText?: string | ReactNode;
  children?: React.ReactNode;
}

export const UploadProgressBar: React.FC<IUploadProgressBar> = ({
  progress,
  uploadName,
  onCancel = () => {},
  cancelText,
}) => {
  const handleCancel = (e) => {
    e.preventDefault();
    onCancel?.();
  };

  return (
    <SUploadProgressBar>
      <SUploadProgressBarTitle>{uploadName}</SUploadProgressBarTitle>
      <SUploadProgressBarLabel>{progress}%</SUploadProgressBarLabel>
      <SProgressBar progress={progress} />
      <Button onClick={handleCancel} type="neutral">
        {cancelText || "CANCEL"}
      </Button>
    </SUploadProgressBar>
  );
};
