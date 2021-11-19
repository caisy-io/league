import React from "react";
import { SimpleInput } from "..";
import { withLabel } from "..";
import { withErrorMessage } from "..";
import { withTranslationBadge } from "..";
import { useForm, FormFieldWrapper, Form } from "../../form/index";
import GermanFlagIcon from "./GermanFlagIcon";

const WithAllInput = withLabel(withErrorMessage(withTranslationBadge(SimpleInput)));

function WithAll() {
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
          <FormFieldWrapper
            rules={[
              { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
              { name: "fourChars", condition: (value) => value && value.length > 3, message: "At least 4 characters" },
            ]}
            control={control}
            name={`formData.name`}
          >
            <WithAllInput
              errors={getErrorList("formData.name")}
              badge={{ flag: GermanFlagIcon, country: "DE" }}
              label="Name*"
              state={getErrorList("formData.name").length > 0 ? "error" : "success"}
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            rules={[
              { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
            ]}
            control={control}
            name={`formData.value`}
          >
            <WithAllInput
              errors={getErrorList("formData.value")}
              badge={{ flag: GermanFlagIcon, country: "DE" }}
              label="Value*"
              state={getErrorList("formData.value").length > 0 ? "error" : "success"}
            />
          </FormFieldWrapper>
        </div>

        <div style={{ display: "flex", gap: 8 }}>
          <FormFieldWrapper
            rules={[
              { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
              { name: "fourChars", condition: (value) => value && value.length > 3, message: "At least 4 characters" },
            ]}
            control={control}
            name={`formData.name2`}
          >
            <WithAllInput
              errors={getErrorList("formData.name2")}
              badge={{ flag: GermanFlagIcon, country: "DE" }}
              label="Name*"
              state={getErrorList("formData.name2").length > 0 ? "error" : "success"}
            />
          </FormFieldWrapper>

          <FormFieldWrapper
            rules={[
              { name: "required", condition: (value) => value && value !== "", message: "This field is required" },
            ]}
            control={control}
            name={`formData.value2`}
          >
            <WithAllInput
              errors={getErrorList("formData.value2")}
              badge={{ flag: GermanFlagIcon, country: "DE" }}
              label="Value*"
              state={getErrorList("formData.value2").length > 0 ? "error" : "success"}
            />
          </FormFieldWrapper>
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
  title: "Components/InputFields/WithAll",
  component: WithAll,
  argTypes: {},
};

const Template = ({ ...args }) => <WithAll {...args} />;

export const Default = Template.bind({});
Default.args = {};
