import UserRepositories from "./UserRepositories";

export default {
    title: "UserRepositories",
    component: UserRepositories,
    argTypes: {
        repositories: { control: "object" }
    }
};

export const Default = (args) => <UserRepositories {...args} />;