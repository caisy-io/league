import React from "react";
import { DocumentStatusIndicator, IDocumentStatus } from "../document-status-indicator/DocumentStatusIndicator";
import { SDocumentItem } from "./styles/SDocumentItem";
import { SDocumentItemBody } from "./styles/SDocumentItemBody";
import { SDocumentItemHeader } from "./styles/SDocumentItemHeader";
import { SDocumentItemImage } from "./styles/SDocumentItemImage";
import { SDocumentItemBodyTitle } from "./styles/SDocumentItemBodyTitle";
import { SDocumentItemTextBox } from "./styles/SDocumentItemTextBox";
import { SCardHeaderTitle } from "../card/styles/SCardHeaderTitle";
import { SCardBody } from "../card/styles/SCardBody";
import { Card } from "../card/Card";
import { SDocumentItemBodyLabel } from "./styles/SDocumentItemBodyLabel";
import { IconFile } from "../../icons/IconFile";
import { SDocumentItemIconWrapper } from "./styles/SDocumentItemIconWrapper";
import { Img } from "../..";

interface IDocumentItem {
  key?: string;
  id?: string;
  uid?: string;
  previewImageUrl?: string;
  status?: IDocumentStatus;
  title: string;
  type: string;
  header?: React.ReactNode;
  selectable?: boolean;
  selected?: boolean;
  onSelect?: any;
}

export const DocumentItem: React.FC<IDocumentItem> = ({ ...props }) => {
  const onSelect = () => {
    props.onSelect && props.onSelect(props.id);
  };

  return (
    <SDocumentItem
      selectable={props.selectable}
      onClick={onSelect}
      selected={(props.selectable && props.selected) || false}
    >
      <Card
        header={
          props.header ? (
            props.header
          ) : (
            <SCardHeaderTitle>
              <SDocumentItemHeader>
                <h3>{props.title}</h3>
                <DocumentStatusIndicator status={props.status} />
              </SDocumentItemHeader>
            </SCardHeaderTitle>
          )
        }
      >
        <SCardBody>
          <SDocumentItemBody>
            <SDocumentItemImage>
              {props.previewImageUrl && (
                <>
                  <Img
                    lazyload={false}
                    scrollContainer={".scroll-container"}
                    src={props.previewImageUrl}
                    resolution={62}
                  />
                </>
              )}
              <SDocumentItemIconWrapper>
                {props.previewImageUrl ? null : <IconFile></IconFile>}
              </SDocumentItemIconWrapper>
            </SDocumentItemImage>
            <SDocumentItemTextBox>
              <SDocumentItemBodyTitle>{props.title}</SDocumentItemBodyTitle>
              <SDocumentItemBodyLabel>{props.type}</SDocumentItemBodyLabel>
            </SDocumentItemTextBox>
            {props.children}
          </SDocumentItemBody>
        </SCardBody>
      </Card>
    </SDocumentItem>
  );
};
