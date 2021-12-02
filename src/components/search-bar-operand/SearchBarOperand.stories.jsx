import React from "react";
import { CloseButton } from '../close-button';
import { SearchBarOperand } from './SearchBarOperand';
import { SearchBarOperandEntity } from './SearchBarOperandEntity';

export default {
    title: `Components/Forms/SearchBarOperand`,
    parameters: {
        design: {
          type: "figma",
          url: "https://www.figma.com/file/1hz5D4Q7pj5w0YrRw7hXbu/UI-Kit?node-id=1094%3A18210",
        },
    },
    component: SearchBarOperandDemo,
    argTypes: {
        state: {
            description: "Changes the overall design of the search bar operand",
            options: ["default", "hover", "activated"],
            control: { type: "select" },
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
        },
        content: {
            description: "Content of the search bar operand",
            control: { type: "text" },
        },
        label: {
            description: "Content of the search bar operand",
            control: { type: "text" },
        },
    },
};

function SearchBarOperandDemo({ content, ...args }) {
    return <CloseButton defaultVisible={(args.state == "hover" || args.state == "activated") || false}>
        <SearchBarOperand activated={args.state == "activated" } hover={args.state == "hover" } label={args.label}>
        </SearchBarOperand>
    </CloseButton>
}

const Template = (args) => <SearchBarOperandDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: "default",
    content: "Default",
    label: "Default"
};

// With entity
export const WithEntity = ({ content, ...args }) => (
    <CloseButton defaultVisible={(args.state == "hover" || args.state == "activated") || false}>
        <SearchBarOperand activated={args.state == "activated" } hover={args.state == "hover" } label={args.label}>
            <SearchBarOperandEntity activated={args.state == "activated" }>
                {content}
            </SearchBarOperandEntity>
        </SearchBarOperand>
    </CloseButton>
);

WithEntity.args = {
    state: "default",
    content: "Default",
    label: "Default"
};