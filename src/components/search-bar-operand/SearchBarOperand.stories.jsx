import React from "react";
import { SearchBarOperand } from './SearchBarOperand';

export default {
    title: `Components/SearchBarOperand`,
    component: SearchBarOperandDemo,
    argTypes: {
        activated: {
            description: "Changes the state of the Search Bar Operand to Activated",
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
        },
        hover: {
            description: "Changes the state of the Search Bar Operand to Hover",
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
    <SearchBarOperand>
        {content}
    </SearchBarOperand>
}

const Template = (args) => <SearchBarOperand {...args} />;

export const Default = Template.bind({});
Default.args = {

};