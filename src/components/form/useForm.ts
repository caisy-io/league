import React from "react";
import { IControl, IError, IField } from "./FormField";
import { IRule } from "./FormFieldWrapper";
import set from "lodash/set";
import produce from "immer";

export interface IUseForm {
  control: IControl;
  getFormState: () => any;
  handleSubmit: (onSubmit: (formData: any) => void) => (e: React.FormEvent) => void;
  addErrorOnField: (fieldName: string, errorName: string, errorMessage: string) => void;
  removeErrorFromField: (fieldName: string, errorName: string) => void;
  isFieldDirty: (fieldName: string) => boolean;
  validate: () => Promise<boolean>;
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
    // setFormState(produce((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], value } })));
    setFormState(
      produce((draft) => {
        if(!draft){
          draft = {};
        }
        if (!draft[fieldName]) {
          draft[fieldName] = {};
        }
        draft[fieldName].value = value;
      }),
    );
    markFieldAsDirty(fieldName);
  };

  const registerField = (fieldName: string, field: IField) => {
    setFormState(produce((prevState) => ({ ...prevState, [fieldName]: { ...prevState[fieldName], ...field } })));
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
      setDirtyFields(
        produce((draft) => {
          draft.push(fieldName);
        }),
      );
    }
  };

  const isFieldDirty = (fieldName: string) => {
    return dirtyFields.includes(fieldName);
  };

  const addErrorOnField = (fieldName: string, errorName: string, errorMessage: string) => {
    const errorList = formState[fieldName].errors;
    if (!errorList.some((error: IError) => error.name === errorName)) {
      setFormState(
        produce((draft) => {
          draft[fieldName].errors.push({ name: errorName, message: errorMessage });
        }),
      );
    }
  };

  const removeErrorFromField = (fieldName: string, errorName: string) => {
    setFormState(
      produce((draft) => {
        const field = draft[fieldName];
        field.errors = field.errors.filter((error: IError) => error.name !== errorName);
      }),
    );
  };

  const getFormState = () => {
    return formState;
  };

  const checkForErrors = () => {
    return new Promise((resolve) => {
      setFormState(
        produce((draft: IFormState) => {
          for (const property in draft) {
            if (draft[property].rules) {
              formState[property].rules.forEach((rule: IRule) => {
                if (!rule.condition(draft[property].value)) {
                  if (!draft[property].errors.some((error) => error.name === rule.name)) {
                    draft[property].errors.push({ name: rule.name, message: rule.message });
                  }
                } else if (draft[property].errors.some((error) => error.name === rule.name)) {
                  draft[property].errors = draft[property].errors.filter((error) => error.name !== rule.name);
                }
              });
            }
          }
          resolve(JSON.parse(JSON.stringify(draft)));
        }),
      );
    });
  };

  const validate = async () => {
    let isValid = true;
    const draft: any = await checkForErrors();

    for (const property in draft) {
      if (draft[property].errors && draft[property].errors.length > 0) {
        isValid = false;
      }
    }

    return isValid;
  };

  const setFieldValue = (fieldName: string, value: any) => {
    setFormState(
      produce((draft) => {
        if(!draft){
          draft = {};
        }
        if (!draft[fieldName]) {
          draft[fieldName] = {};
        }

        draft[fieldName].value = value;
      }),
    );
  };

  const removeFieldsFromState = (fields: string[]) => {
    setFormState(
      produce((draft) => {
        fields.forEach((field) => {
          delete draft[field];
        });
      }),
    );
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
