import Header from "./Header";

export default {
    title: "Layouts/Header",
    component: Header,
    argTypes: {
        isPublic: { control: "boolean" },
    },
};

export const Default = (args) => <Header {...args} />;