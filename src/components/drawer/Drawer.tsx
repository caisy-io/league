import React from "react";
import { SDrawer } from "./styles/SDrawer";
import { SDrawerBody } from "./styles/SDrawerBody";
import { SDrawerContent } from "./styles/SDrawerContent";
import { SDrawerHeader } from "./styles/SDrawerHeader";
import { SDrawerCloseButton } from "./styles/SDrawerCloseButton";
import { IconClose } from "../../icons/IconClose";
import { Divider } from "../divider/Divider";
import { Stackable } from "../stackable/Stackable";

interface IDrawer {
  open: boolean;
  width: string;
  onClose?: () => void;
  placement: "left" | "right";
  mountOnElement?: any;
  animationTime?: number;
  title: string;
  closable?: boolean;
  maskClosable: boolean;
  transparentMask?: boolean;
  top?: string;
  headerBackground?: string;
  headerColor?: string;
  disablePadding?: true;
}

export const Drawer: React.FC<IDrawer> = ({ ...props }) => {
  const [open, setOpen] = React.useState(props.open);
  const [closing, setClosing] = React.useState(false);
  const animationTime = props.animationTime || 300;

  // console.log(`Drawer open ${open} , props.open: ${props.open}`);

  const onClose = () => {
    if (open && !closing) {
      setClosing(true);
      setTimeout(() => {
        setOpen(false);
        setClosing(false);
        props.onClose && props.onClose();
      }, animationTime);
    }
  };

  React.useEffect(() => {
    if (!props.open && open && !closing) {
      setClosing(true);
      setTimeout(() => {
        setOpen(props.open);
        setClosing(false);
        props.onClose && props.onClose();
      }, animationTime);
    } else {
      setClosing(false);
      setOpen(props.open);
    }
  }, [props.open]);

  const width = typeof props.width !== "string" ? `${props.width}px` : props.width;

  return open ? (
    <Stackable target={props.mountOnElement ?? undefined}>
      <SDrawer
        animationTime={animationTime}
        closing={closing}
        open={open}
        onClick={() => props.maskClosable && onClose()}
        transparentMask={props.transparentMask}
        top={props.top}
        className="caisy-drawer"
      >
        <SDrawerContent
          animationTime={animationTime}
          onClick={(e) => e.stopPropagation()}
          closing={closing}
          placement={props.placement}
          open={open}
          width={width}
        >
          {props.title ? (
            <>
              <SDrawerHeader color={props.headerColor || "unset"} background={props.headerBackground || "transparent"}>
                {props.title}
                {props.closable && (
                  <SDrawerCloseButton onClick={onClose}>
                    <IconClose />
                  </SDrawerCloseButton>
                )}
              </SDrawerHeader>
              <Divider marginBottom={16} marginTop={16} style={{ marginLeft: "32px", width: "calc(100% - 32px)" }} />
            </>
          ) : null}
          <SDrawerBody disablePadding={props.disablePadding}>{props.children}</SDrawerBody>
        </SDrawerContent>
      </SDrawer>
    </Stackable>
  ) : null;
};
