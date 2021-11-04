import React from "react";
import { SearchBarOperand } from './SearchBarOperand';
import { SearchBarOperandEntity } from './SearchBarOperandEntity';
import { CloseButton} from '../..';

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
        entity: {
            description: "Displays search bar operand with or without entity",
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
    },
};

function SearchBarOperandDemo({ content, ...args }) {
    console.log("running demo");
    return <CloseButton hover>
         <SearchBarOperand {...args}>
            <SearchBarOperandEntity {...args}>
            {content}
            </SearchBarOperandEntity>
            {content}
        </SearchBarOperand>
    </CloseButton>
}

const Template = (args) => <SearchBarOperandDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: "default",
    content: "Default",
    entity: false
};