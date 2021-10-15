import React from "react";
import { Button, DatePicker, Form, Input, useForm, FormField, SelectSingleSearch } from "../../";

function FormShowcase() {
  const { control, handleSubmit, validate } = useForm();

  const onSubmit = async (formData) => {
    const isValid = await validate();
    isValid && console.log(formData);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: 32, alignItems: "stretch", width: 400 }}
    >
      <div>
        <FormField
          rules={[
            { name: "required", message: "Please enter something here!", condition: (value) => value && value !== "" },
          ]}
          label="Input"
          initialValue=""
          name="input.test"
          control={control}
        >
          {/*@ts-ignore nextline*/}
          <Input placeholder="Input" />
        </FormField>
      </div>
      <div>
        <FormField
          rules={[
            { name: "required", message: "This field is required.", condition: (value) => value && value !== "" },
          ]}
          label="Select"
          name="select"
          control={control}
        >
          <select>
            <option>One</option>
            <option>two</option>
            <option>three</option>
          </select>
        </FormField>
      </div>
      <div>
        <FormField label="DatePicker" initialValue={new Date()} name="datepicker" control={control}>
          {/*@ts-ignore nextline*/}
          <DatePicker />
        </FormField>
      </div>
      <div>
        <FormField label="Checkbox" initialValue={false} name="checkbox" control={control}>
          <input style={{ alignSelf: "center" }} type="checkbox" />
        </FormField>
      </div>
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
Default.args = {};
