import React, { ReactNode } from "react";
import { SPopconfirm } from "./styles/SPopconfirm";
import { SPopconfirmWrapper } from "./styles/SPopconfirmWrapper";
import { SPopconfirmTitle } from "./styles/SPopconfirmTitle";
import { SPopconfirmButtons } from "./styles/SPopconfirmButtons";
import { Button } from "../button/Button";
import { Popover, TPlacement } from "../popover/Popover";
import { SPopconfirmDescription } from "./styles/SPopconfirmDescription";
import { SPopconfirmMessage } from "./styles/SPopconfirmMessage";
interface IPopconfirm {
  title: string | JSX.Element;
  description?: ReactNode;
  disabled?: boolean;
  onConfirm: (() => any) | ((e: any) => any);
  onCancel?: (() => any) | ((e: any) => any);
  placement?: TPlacement | undefined;
  message?: ReactNode;
  okText?: string | ReactNode;
  cancelText?: string | ReactNode;
  wrapperStyle?: React.CSSProperties;
  container?: React.MutableRefObject<null>;
  children?: React.ReactNode;
}

export const Popconfirm: React.FC<IPopconfirm> = ({ ...props }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOk = (e) => {
    props.onConfirm(e);
    setOpen(false);
  };

  const handleClickCancel = (e) => {
    if (props.onCancel) props.onCancel(e);
    setOpen(false);
  };

  const ref = React.useRef(null);

  // console.log(`Popconfirm props: `, props);
  return (
    <>
      <SPopconfirmWrapper style={props.wrapperStyle} ref={ref} onClick={() => setOpen(true)}>
        {props.children}
      </SPopconfirmWrapper>
      <Popover
        onClickOutside={() => setOpen(false)}
        trianglecolor="var(--ui-01)"
        placement={props.placement || "top"}
        reference={ref}
        container={props.container}
        display={open}
        // disableTriangle={false}
      >
        {() => (
          <SPopconfirm opened={!props.disabled} onClick={(e) => e.stopPropagation()}>
            {props.description && <SPopconfirmDescription>{props.description}</SPopconfirmDescription>}
            <SPopconfirmTitle>{props.title}</SPopconfirmTitle>
            {props.message && <SPopconfirmMessage>{props.message}</SPopconfirmMessage>}
            <SPopconfirmButtons>
              <Button type="danger" onClick={(e) => handleClickOk(e)}>
                {props.okText || "OK"}
              </Button>
              <Button onClick={(e) => handleClickCancel(e)}>{props.cancelText || "Cancel"}</Button>
            </SPopconfirmButtons>
          </SPopconfirm>
        )}
      </Popover>
    </>
  );
};
