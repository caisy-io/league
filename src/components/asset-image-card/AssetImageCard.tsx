import React, {ReactNode} from "react";
import {Checkbox} from "../checkbox";
import {SAssetImage} from "./styles/SAssetImage";
import {SAssetImageCard} from "./styles/SAssetImageCard";
import {SAssetImageLabel} from "./styles/SAssetImageLabel";
import {SAssetImageRadioContainer} from "./styles/SAssetImageRadioContainer";
import {SSkeleton} from "../skeleton";

export type IAssetImageCardSizeType = "simple" | "small";

interface IAssetImageCard {
  image?: ReactNode;
  size?: IAssetImageCardSizeType;
  labelText?: string;
  activated?: boolean;
  skeleton?: boolean;
  onChange?: (e: Event) => void;
  onImageClick?: (e: Event) => void;
}

export const AssetImageCard: React.FC<IAssetImageCard> = ({
                                                            skeleton,
                                                            labelText,
                                                            size,
                                                            image,
                                                            activated,
                                                            onChange,
                                                            onImageClick,
                                                          }) => {
  return (
    <SAssetImageCard size={size} activated={activated} skeleton={skeleton}>
      <SAssetImage onClick={onImageClick}>{image}</SAssetImage>
      <SAssetImageRadioContainer onClick={e => {
        e.stopPropagation();
        onChange?.(e)
      }}>
        {skeleton ? (
          <>
            <SSkeleton borderRadius="16px"/>
            <SSkeleton width="80px" borderRadius="4px"/>
          </>
        ) : (
          <>
            <Checkbox
              onChange={(e) => {
                onChange?.(e);
              }}
              checked={activated}
            />
            <SAssetImageLabel title={labelText} activated={activated}>
              {labelText}
            </SAssetImageLabel>
          </>
        )}
      </SAssetImageRadioContainer>
    </SAssetImageCard>
  );
};
