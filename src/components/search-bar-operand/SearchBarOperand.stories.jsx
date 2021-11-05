import React from "react";
import { SearchBarOperand } from './SearchBarOperand';
import { SearchBarOperandEntity } from './SearchBarOperandEntity';
import { CloseButton } from '../..';

export default {
    title: `Components/SearchBarOperand`,
    component: SearchBarOperandDemo,
    argTypes: {
        type: {
            description: "Changes the overall design of the search bar operand",
            options: ["default", "hover", "active"],
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
    console.log("running demo" + args);
    return <CloseButton>
        <SearchBarOperand {...args}>
            {content}
        </SearchBarOperand>
    </CloseButton>
}

const Template = (args) => <SearchBarOperandDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "default",
    content: "Default",
};

// With entity
export const WithEntity = ({ content, ...args }) => (
    <CloseButton hover=>
        <SearchBarOperand {...args}>
            <SearchBarOperandEntity {...args}>
                {content}
            </SearchBarOperandEntity>
            {content}
        </SearchBarOperand>
    </CloseButton>
);

WithEntity.args = {
    type: "default",
    content: "Default",
};