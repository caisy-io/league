import React from "react";
import {TranslationBadge} from "../TranslationBadge";
import {SimpleInputWrapper} from "./SimpleInputWrapper";
import {IconStarOutlined} from "../../../icons";

export default {
  
  title: "Components/Forms/SimpleInputWrapper",
  component: SimpleInputWrapper,
  argTypes: {
    state: {
      description: "Changes the state of the input",
      options: ["error", "success", "default", "locked"],
      control: {type: "select"},
      table: {
        defaultValue: {
          summary: "default",
        },
      },
    },
    required: {
      description: "Marks the input with a required inidicator",
      control: {type: "boolean"},
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
};

const Template = ({...args}) => <>
  <h1>this component adds Simple Input functionality, error messages and styling around any component</h1>
  <br/>
  <SimpleInputWrapper
    translationBadge={args.withTranslationBadge && <TranslationBadge countryCode={'de'}/>}
    required={args.required}
    leftIcon={args.withLeftIcon && <IconStarOutlined size={20}/>}
    rightIcon={args.withRightIcon && <IconStarOutlined size={20}/>}
    errors={args.state === "error" ? ["Error message"] : undefined}
    label={args.label}
    state={args.state}>
    <iframe width={'100%'} height="315" src="https://www.youtube.com/embed/3elGSZSWTbM" title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
  </SimpleInputWrapper>
</>

export const Default = Template.bind({});
Default.args = {
  label: "This is a label",
  state: "error",
  required: true,
  withLeftIcon: false,
  withRightIcon: false,
};

export const WithTranslationBadge = Template.bind({});
WithTranslationBadge.args = {
  label: "This is a label",
  withTranslationBadge: true,
  required: false,
};
