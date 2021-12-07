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
        label: {
            description: "Content of the search bar operand",
            control: { type: "text" },
        },
        entity: {
            description: "Content of the search bar operand entity",
            control: { type: "text" },
        },
    },
};

function SearchBarOperandDemo({ state, label }) {
    return <CloseButton defaultVisible={(state == "hover" || state == "activated") || false}>
        <SearchBarOperand activated={state == "activated"} hover={state == "hover"} label={label}>
        </SearchBarOperand>
    </CloseButton>
}

const Template = (args) => <SearchBarOperandDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    state: "default",
    label: "Default"
};

// With entity
export const WithEntity = ({ state, label, entity }) => (
    <CloseButton defaultVisible={(state == "hover" || state == "activated") || false}>
        <SearchBarOperand activated={state == "activated"} hover={state == "hover"} label={label}>
            <SearchBarOperandEntity activated={state == "activated"}>
                {entity}
            </SearchBarOperandEntity>
        </SearchBarOperand>
    </CloseButton>
);

WithEntity.args = {
    state: "default",
    entity: "Default",
    label: "Default"
};