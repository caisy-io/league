import {FC} from "react";
import {InputField, IInputFieldProps} from "../input-field";

export const StringSingleField: FC<IInputFieldProps> = ({
                                                          title,
                                                          description,
                                                          required,
                                                          tooltip,
                                                          errors,
                                                          children,
                                                          usersListComponent,
                                                          outsideWrapper,
                                                          wrapperBgColor,
                                                          icon,
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
      outsideWrapper={outsideWrapper}
      wrapperBgColor={wrapperBgColor}
      primary={primary}
    >
      {children}
    </InputField>
  );
};
