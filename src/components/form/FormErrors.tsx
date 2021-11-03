import React from "react";
import type { IControl } from "./FormField";
import { SFormErrorList } from "./styles/SFormErrorList";
import { SFormError } from "./styles/SFormError";

interface IFormErrors {
  control: IControl;
  name: string;
}

export const FormErrors: React.FC<IFormErrors> = ({ ...props }) => {
  return (
    <SFormErrorList>
      {props.control.formState[props.name]?.errors?.map((error) => (
        <SFormError key={error.name}>{error.message}</SFormError>
      ))}
    </SFormErrorList>
  );
};
