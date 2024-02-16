import SimpleLink from "./SimpleLink";

export default {
    title: "SimpleLink",
    component: SimpleLink,
    argTypes: {
        text: {
            control: "text",
        },
        href: {
            control: "text",
        },
    },
};

export const Default = (args) => <SimpleLink {...args} />;