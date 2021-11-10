import React from "react";
import { SimpleInput } from "../simple-input/SimpleInput";
import { WithLabel } from "./WithLabel";
import { WithErrorMessage } from "../with-error-message/WithErrorMessage";
import { WithTranslationBadge } from "../with-translation-badge/WithTranslationBadge";
import FieldContext from "../field-context/FieldContextState";
import { useForm, FormFieldWrapper, Form } from "../../form/index";
import GermanFlagIcon from "./GermanFlagIcon";

function WithLabelDemo() {
  const { control, handleSubmit, getFieldErrors, validate } = useForm();

  const onSubmit = async (data) => {
    if (await validate()) {
      console.log(data);
    }
  };

  return (
    <Form style={{ display: "flex", flexDirection: "column", flex: 8 }} onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: "flex", gap: 8 }}>
        <FormFieldWrapper
          rules={[{ name: "required", condition: (value) => value && value !== "", message: "This field is required" }]}
          control={control}
          name={`options.name`}
        >
          <FieldContext>
            <WithLabel active={true} content="Name*" />
            <WithErrorMessage
              active={true}
              content={getFieldErrors("options.name")?.map(({ message }) => message) || []}
            />
            <SimpleInput />
          </FieldContext>
        </FormFieldWrapper>
        <FormFieldWrapper control={control} name={`options.value`}>
          <FieldContext>
            <SimpleInput />
            <WithLabel active={true} content="Value" />
            <WithErrorMessage
              active={true}
              content={getFieldErrors("options.value")?.map(({ message }) => message) || []}
            />
          </FieldContext>
        </FormFieldWrapper>
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <FormFieldWrapper
          rules={[{ name: "required", condition: (value) => value && value !== "", message: "This field is required" }]}
          control={control}
          name={`options.name1`}
        >
          <FieldContext>
            <WithLabel active={true} content="Name*" />
            <WithErrorMessage
              active={true}
              content={getFieldErrors("options.name1")?.map(({ message }) => message) || []}
            />
            <SimpleInput />
          </FieldContext>
        </FormFieldWrapper>
        <FormFieldWrapper control={control} name={`options.value1`}>
          <FieldContext>
            <SimpleInput />
            <WithTranslationBadge active={true} content={{ flag: GermanFlagIcon, country: "DE" }} />
            <WithLabel active={true} content="Value" />
            <WithErrorMessage
              active={true}
              content={getFieldErrors("options.value1")?.map(({ message }) => message) || []}
            />
          </FieldContext>
        </FormFieldWrapper>
      </div>
      <button style={{ width: "fit-content" }}>Submit</button>
    </Form>
  );
}

export default {
  title: "Components/InputFields/WithLabel",
  component: WithLabelDemo,
  argTypes: {},
};

const Template = ({ ...args }) => <WithLabelDemo {...args} />;

export const Default = Template.bind({});
Default.args = {};
