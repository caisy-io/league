import React from "react";
import { Button, Form, Input, useForm, FormField } from "../../";

function FormShowcase() {
  const { handleSubmit, validate, register, control } = useForm();

  const onSubmit = async (formData) => {
    const isValid = await validate();
    isValid && console.log(formData);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "stretch", width: 400 }}
    >
      <FormField name="input.test" control={control} reference="target.value">
        <Input {...register()} placeholder="Input" />
      </FormField>
      <Button htmlType="button" style={{ alignSelf: "flex-start" }}>
        Submit
      </Button>
    </Form>
  );
}

export default {
  title: "Components/Form",
  component: FormShowcase,
};
const Template = (args) => <FormShowcase {...args} />;

export const Default = Template.bind({});
// @ts-ignore
Default.args = {};
