import UserOverview from "./UserOverview";

export default {
    title: "UserOverview",
    component: UserOverview,
    argTypes: {
        name: { control: "text" },
        login: { control: "text" },
        avatar_url: { control: "text" },
    },
};

export const Overview = (args) => <UserOverview {...args} />;
