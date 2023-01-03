import React from "react";
import { FormLabel } from "./FormLabel";
import { FormErrors } from "./FormErrors";
import { FormFieldWrapper, IRule } from "./FormFieldWrapper";
import { SFormField } from "./styles/SFormField";

export interface IError {
  name: string;
  message: string;
}

export interface IField {
  value: any;
  errors: IError[];
  rules: any;
}

export interface IControl {
  onFieldChange: (fieldName: string, value: any) => void;
  formState: any;
  registerField: (fieldName: string, field: IField) => void;
}

// interface RenderProp<TChildrenProps, TElement = any> {
//   (props: TChildrenProps): React.ReactElement<TElement> | React.ReactNode;
// }
// children: RenderProp<{ value: any }>;

export interface IFormField {
  name: string;
  control: IControl;
  reference?: string;
  initialValue?: any;
  label?: string;
  rules?: IRule[];
  valuePropName?: string;
  style?: React.CSSProperties;
  onChange?: (e: any) => void;
  children?: React.ReactNode;
}

export const FormField: React.FC<IFormField> = ({ ...props }) => {
  return (
    <SFormField style={props.style}>
      {props.label && <FormLabel>{props.label}</FormLabel>}
      <FormFieldWrapper
        rules={props.rules}
        reference={props.reference}
        name={props.name}
        initialValue={props.initialValue}
        control={props.control}
        valuePropName={props.valuePropName}
        onChange={props.onChange}
      >
        {props.children}
      </FormFieldWrapper>
      <FormErrors name={props.name} control={props.control} />
    </SFormField>
  );
};
