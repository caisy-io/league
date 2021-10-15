import React from "react";
import get from "lodash/get";

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

export interface IRule {
  name: string;
  message: string;
  condition: (value: any) => boolean;
}

interface IFormFieldWrapper {
  name: string;
  reference?: string;
  initialValue?: any;
  control: IControl;
  rules?: IRule[];
  valuePropName?: string;
  onChange?: (e: any) => void;
}

export const FormFieldWrapper: React.FC<IFormFieldWrapper> = ({ ...props }) => {
  const onChange = (e: any) => {
    props.onChange && props.onChange(e);
    const getValue = () => {
      if (props.reference) return get(e, props.reference);
      else if (e?.target?.value) return e.target.value;
      else if (e?.target?.checked) return e.target.checked;
      else return e;
    };

    const value = getValue();
    props.control.onFieldChange(props.name, value);
  };

  React.useEffect(() => {
    const field = { value: props.initialValue, errors: [], rules: props.rules || [] };
    props.control.registerField(props.name, field);
  }, []);

  const clonedProps = props.valuePropName
    ? {
        [props.valuePropName]:
          props.control.formState[props.name]?.value !== undefined
            ? props.control.formState[props.name].value
            : props.initialValue,
        onChange,
      }
    : {
        value:
          props.control.formState[props.name]?.value !== undefined
            ? props.control.formState[props.name].value
            : props.initialValue,
        onChange,
      };

  const childrenWithProps = React.Children.map(props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, clonedProps);
    }
    return child;
  });

  return <>{childrenWithProps}</>;
};
