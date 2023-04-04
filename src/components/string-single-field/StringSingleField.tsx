import { FC } from "react";
import { InputField, IInputFieldProps } from "../input-field";

export const StringSingleField: FC<IInputFieldProps> = ({ title, description, required, tooltip, errors, children, usersList }) => {
  return (
    <InputField title={title} description={description} required={required} tooltip={tooltip} errors={errors} usersList={usersList}>
      {children}
    </InputField>
  );
};
