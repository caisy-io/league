import React from "react";
import { IControl, IError, IField } from "./FormField";
import { IRule } from "./FormFieldWrapper";
import set from "lodash/set";

export interface IUseForm {
  control: IControl;
  getFormState: () => any;
  handleSubmit: (onSubmit: (formData: any) => void) => (e: React.FormEvent) => void;
  addErrorOnField: (fieldName: string, errorName: string, errorMessage: string) => void;
  removeErrorFromField: (fieldName: string, errorName: string) => void;
  isFieldDirty: (fieldName: string) => boolean;
  validate: () => boolean;
  setFieldValue: (fieldName: string, value: any) => void;
  requiredRule: (condition: (value: any) => boolean) => IRule;
  removeFieldsFromState: (fields: string[]) => void;
  getFieldErrors: (fieldName: string) => IError[];
}

interface IFormState {
  [property: string]: IField;
}

interface IInitialFormState {
  [property: string]: { value: any };
}

export const useForm: (initialFormState?: IInitialFormState) => IUseForm = (initialFormState?: IInitialFormState) => {
  const [formState, setFormState] = React.useState({});
  const [dirtyFields, setDirtyFields] = React.useState<string[]>([]);

  React.useEffect(() => {
    initialFormState && initializeFormState(initialFormState);
  }, []);

  const initializeFormState = (initialFormData: IInitialFormState) => {
    for (const property in initialFormData) {
      const field = {
        ...formState[property],
        value: initialFormData[property].value,
      };
      registerField(property, field);
    }
  };

  const requiredRule = (condition: (value: any) => boolean) => ({
    name: "required",
    message: "Required field",
    condition,
  });

  const onFieldChange = (fieldName: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], value } }));
    markFieldAsDirty(fieldName);
  };

  const registerField = (fieldName: string, field: IField) => {
    setFormState((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], ...field } }));
  };

  const handleSubmit = (onSubmit: (formData: any) => void) => {
    return (e: React.FormEvent) => {
      e.preventDefault();
      const formData = {};
      for (const property in formState) {
        set(formData, property, formState[property].value);
      }

      return onSubmit(formData);
    };
  };

  const markFieldAsDirty = (fieldName: string) => {
    if (!dirtyFields.includes(fieldName)) {
      const newDirtyFields = dirtyFields.slice();
      newDirtyFields.push(fieldName);
      setDirtyFields(newDirtyFields);
    }
  };

  const isFieldDirty = (fieldName: string) => {
    return dirtyFields.includes(fieldName);
  };

  const addErrorOnField = (fieldName: string, errorName: string, errorMessage: string) => {
    const errorList = formState[fieldName].errors.slice();
    if (!errorList.some((error: IError) => error.name === errorName)) {
      errorList.push({ name: errorName, message: errorMessage });
      setFormState((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], errors: errorList } }));
    }
  };

  const removeErrorFromField = (fieldName: string, errorName: string) => {
    const errorList = formState[fieldName].errors.filter((error: IError) => error.name !== errorName);
    setFormState((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], errors: errorList } }));
  };

  const getFormState = () => {
    return formState;
  };

  const validate = () => {
    let isValid = true;

    const newFormState = { ...formState };

    for (const property in newFormState) {
      if (newFormState[property].rules) {
        newFormState[property].rules.forEach((rule: IRule) => {
          if (!rule.condition(newFormState[property].value)) {
            if (!newFormState[property].errors.some((error: IError) => error.name === rule.name)) {
              newFormState[property].errors.push({ name: rule.name, message: rule.message });
            }
          } else if (newFormState[property].errors.some((error: IError) => error.name === rule.name)) {
            newFormState[property].errors = newFormState[property].errors.filter(
              (error: IError) => error.name !== rule.name,
            );
          }
        });
      }
    }

    for (const property in newFormState) {
      if (newFormState[property].errors && newFormState[property].errors.length > 0) {
        isValid = false;
      }
    }

    setFormState(newFormState);

    return isValid;
  };

  const setFieldValue = (fieldName: string, value: any) => {
    setFormState((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], value } }));
  };

  const removeFieldsFromState = (fields: string[]) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const newFormState = {};
    for (const property in formState) {
      if (!fields.includes(property)) {
        newFormState[property] = formState[property];
      }
    }
    setFormState(() => newFormState);
  };

  const getFieldErrors = (fieldName: string) => {
    const errors = getFormState()[fieldName]?.errors;
    return errors;
  };

  return {
    control: {
      onFieldChange,
      formState: getFormState(),
      registerField,
    },
    getFormState,
    handleSubmit,
    addErrorOnField,
    removeErrorFromField,
    isFieldDirty,
    validate,
    setFieldValue,
    requiredRule,
    removeFieldsFromState,
    getFieldErrors,
  };
};
