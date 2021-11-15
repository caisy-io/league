import React from "react";
import { SimpleInput } from "./SimpleInput";
import { WithLabel } from "../with-label/WithLabel";
import { WithErrorMessage } from "../with-error-message/WithErrorMessage";
import { WithTranslationBadge } from "../with-translation-badge/WithTranslationBadge";
import FieldContext from "../field-context/FieldContextState";
import { useForm, FormFieldWrapper, Form } from "../../form/index";
import GermanFlagIcon from "./GermanFlagIcon";

function SimpleInputDemo() {
  const { control, handleSubmit, getFieldErrors, validate } = useForm();

  const [formData, setFormData] = React.useState(null);

  const onSubmit = async (data) => {
    if (await validate()) {
      console.log(data);
      setFormData(data);
    }
  };

  const getErrorList = (fieldName) => {
    return getFieldErrors(fieldName)?.map(({ message }) => message) || [];
  };

  return (
    <>
      <Form style={{ display: "flex", flexDirection: "column", gap: 8 }} onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", gap: 8 }}>
          <FieldContext>
            <WithLabel active={true} content="Name*" />
            <WithErrorMessage active={true} content={getErrorList("formData.name")} />
            <FormFieldWrapper
              rules={[
                { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
              ]}
              control={control}
              name={`formData.name`}
            >
              <SimpleInput state={getErrorList("formData.name").length > 0 ? "error" : "success"} />
            </FormFieldWrapper>
          </FieldContext>

          <FieldContext>
            <WithTranslationBadge active={true} content={{ flag: GermanFlagIcon, country: "DE" }} />
            <FormFieldWrapper control={control} name={`formData.value`}>
              <SimpleInput />
            </FormFieldWrapper>
            <WithLabel active={true} content="Value" />
          </FieldContext>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <FieldContext>
            <WithLabel active={true} content="Name*" />
            <WithErrorMessage active={true} content={getErrorList("formData.name1")} />
            <FormFieldWrapper
              rules={[
                { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
              ]}
              control={control}
              name={`formData.name1`}
            >
              <SimpleInput state={getErrorList("formData.name1").length > 0 ? "error" : "success"} />
            </FormFieldWrapper>
          </FieldContext>

          <FieldContext>
            <FormFieldWrapper control={control} name={`formData.value1`}>
              <SimpleInput />
            </FormFieldWrapper>
            <WithTranslationBadge active={true} content={{ flag: GermanFlagIcon, country: "DE" }} />
            <WithLabel active={true} content="Value" />
          </FieldContext>
        </div>
        <button style={{ width: "fit-content" }}>Submit</button>
      </Form>
      <div>
        <pre>{formData && JSON.stringify(formData)}</pre>
      </div>
    </>
  );
}

export default {
  title: "Components/InputFields/SimpleInput",
  component: SimpleInputDemo,
  argTypes: {},
};

const Template = ({ ...args }) => <SimpleInputDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
