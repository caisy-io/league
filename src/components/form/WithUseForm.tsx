import { IUseForm, useForm } from "./useForm";
import React, { ComponentType, FC, ComponentClass } from "react";

interface IUseFormProps {
  formProps: IUseForm;
}

export const WithUseForm = <P extends IUseFormProps>(Wrapped: ComponentType<P> | ComponentClass<any>) => {
  const WithUseForm: FC<P & IUseFormProps> = (props) => {
    const formProps = useForm();

    return <Wrapped {...(props as P)} formProps={formProps} />;
  };

  return WithUseForm;
};
