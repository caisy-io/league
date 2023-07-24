import { FC } from "react";
import { InputField, IInputFieldProps } from "../input-field";

export const StringSingleField: FC<IInputFieldProps> = ({
  title,
  description,
  required,
  tooltip,
  errors,
  children,
  usersListComponent,
  icon,
  inlineStackedLevel,
  primary,
}) => {
  return (
    <InputField
      title={title}
      description={description}
      required={required}
      tooltip={tooltip}
      errors={errors}
      usersListComponent={usersListComponent}
      icon={icon}
      inlineStackedLevel={inlineStackedLevel}
      primary={primary}
    >
      {children}
    </InputField>
  );
};
