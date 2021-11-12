import React from "react";
import { CloseButton } from '../close-button';
import { SearchBarOperand } from './SearchBarOperand';
import { SearchBarOperandEntity } from './SearchBarOperandEntity';

export default {
    title: `Components/SearchBarOperand`,
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
    },
};

function SearchBarOperandDemo({ content, ...args }) {
    return <CloseButton defaultVisible={(args.state == "hover" || args.state == "activated") || false}>
        <SearchBarOperand activated={args.state == "activated" } hover={args.state == "hover" }>
            {content}
        </SearchBarOperand>
    </CloseButton>
}

const Template = (args) => <SearchBarOperandDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: "default",
    content: "Default",
};

// With entity
export const WithEntity = ({ content, ...args }) => (
    <CloseButton defaultVisible={(args.state == "hover" || args.state == "activated") || false}>
        <SearchBarOperand activated={args.state == "activated" } hover={args.state == "hover" }>
            <SearchBarOperandEntity activated={args.state == "activated" }>
                {content}
            </SearchBarOperandEntity>
            {content}
        </SearchBarOperand>
    </CloseButton>
);

WithEntity.args = {
    state: "default",
    content: "Default",
};